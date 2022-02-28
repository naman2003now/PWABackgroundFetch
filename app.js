fetch(
	"https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=tech&page_size=10",
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
	})
	.catch((error) => {
		console.error("Error:", error)
	})

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js")
}
