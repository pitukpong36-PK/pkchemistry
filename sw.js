/* PKchemistry service worker — offline cache (works only when served over http/https) */
const CACHE = 'pkchem-v15';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg', './data/media.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // only handle same-origin requests (Firebase/fonts go straight to network)
  if (url.origin !== location.origin) return;

  // หน้า HTML และไฟล์ข้อมูล (data/*.json) ใช้ network-first
  // เพื่อให้เนื้อหา/ข้อมูลที่อัปเดตขึ้นเสมอ แล้ว fallback เป็น cache เมื่อออฟไลน์
  const isDoc  = req.mode === 'navigate' || req.destination === 'document' ||
                 /\.html$/.test(url.pathname) || url.pathname === '/' || url.pathname.endsWith('/');
  const isData = /\/data\/.*\.json(\?.*)?$/.test(url.pathname);

  if (isDoc || isData) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(c => c || caches.match('./index.html')))
    );
    return;
  }

  // assets อื่น ๆ ใช้ cache-first
  e.respondWith(
    caches.match(req).then(cached =>
      cached || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => cached)
    )
  );
});
