const CACHE_NAME = "app-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/icons/LogoEquipe192.png",
  "/icons/LogoEquipe512.png",
  "/images/ArenaBlue.png",
  "/images/ArenaRed.png",
  "/images/autonomoimagerp.png",
  "/images/bargeimagerp.png",
  "/images/Checkimg.png",
  "/images/coralimagerp.png",
  "/images/Deep.png",
  "/images/DeepFalho.png",
  "/images/Downloadimg.png",
  "/images/DownloadResetimg.png",
  "/images/Finalsimg.png",
  "/images/Leftimg.png",
  "/images/LogoEquipe.png",
  "/images/Middleimg.png",
  "/images/Nenhum.png",
  "/images/Parked.png",
  "/images/Playoffs.png",
  "/images/Playoffsimg.png",
  "/images/Practiceimg.png",
  "/images/QRcodedimg.png",
  "/images/Qualificationsimg.png",
  "/images/Rightimg.png",
  "/images/Shalow.png",
  "/images/ShalowFalho.png",
  "/images/Stringimg.png",
  "/images/vscolor.png",
  "/images/Xizimg.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});