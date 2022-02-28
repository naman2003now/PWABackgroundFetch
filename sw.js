self.addEventListener("install", (e) => {
	e.waitUntil(
		caches.open("static").then((cache) => {
			return cache.addAll(["./", "./app.js", "./style.css"])
		})
	)
})

self.addEventListener("fetch", function (event) {
	event.respondWith(
		fetch(event.request).catch(function () {
			return caches.match(event.request)
		})
	)
})
