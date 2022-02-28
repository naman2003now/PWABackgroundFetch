var currentPage = 1
var getNews = () =>
	fetch(
		"https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=tech&page_size=10&page=" +
			currentPage,
		{
			method: "GET",
			headers: {
				"x-api-key": "R7xtqPm3m6raCsL16PEzkkfqiIYfb32ww4N2LyWo5wA",
			},
		}
	)
		.then((response) => response.json())
		.then((data) => {
			console.log("Success:", data)
			data.articles.forEach((element) => {
				let card = document.createElement("div")
				card.className = "card"
				card.innerHTML =
					'<img src="' +
					element.media +
					'" class="media"/><h1>' +
					element.title +
					"</h1><p>" +
					element.summary +
					"</p>"
				document.body.appendChild(card)
			})
		})
		.catch((error) => {
			console.error("Error:", error)
		})

window.onscroll = function (ev) {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		currentPage++
		getNews()
	}
}
getNews()
if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js")
}
