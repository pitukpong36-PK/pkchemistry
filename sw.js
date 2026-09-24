/* PKchemistry service worker — offline cache (works only when served over http/https) */
const CACHE = 'pkchem-v25';
const ASSETS = ['./index.html', './manifest.webmanifest', './icon.svg', './data/media.json'];

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
    // ทุก ?fbclid=… / ?utm=… ของหน้าเว็บใช้แคชก้อนเดียว (ไม่งั้นแคชไฟล์ 2.9 MB ซ้ำทุกลิงก์ที่แชร์)
    const key = req.mode === 'navigate' ? './index.html' : req;
    const net = fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key, copy)); }
      return res;
    });
    // เน็ตช้า/หลุด: รอไม่เกิน 4 วิ แล้วใช้ฉบับในเครื่องก่อน (โหลดฉบับใหม่ต่อเบื้องหลังให้ครั้งหน้า)
    const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 4000));
    e.respondWith(
      Promise.race([net, timeout]).catch(() =>
        caches.match(key).then(c => c || caches.match('./index.html')).then(c => c || net))
    );
    return;
  }

  // assets อื่น ๆ ใช้ cache-first
  e.respondWith(
    caches.match(req).then(cached =>
      cached || fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => cached)
    )
  );
});
