function getData () {
	const movie = document.getElementById("movie").value;
	const container = document.getElementById("container");
	const url = `https://www.omdbapi.com/?apikey=951b722&t=${movie}`;
	const xhttps = new XMLHttpRequest();
	
	xhttps.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			console.log(this.responseText);
			console.log(JSON.parse(this.responseText));
			const data = JSON.parse(this.responseText);
			
			
			document.getElementById("movie-title").innerHTML = data.Title;
			document.getElementById("poster").src = data.Poster;
			document.getElementById("year").innerHTML = data.Year;
			document.getElementById("released").innerHTML = data.Released;
			document.getElementById("runtime").innerHTML = data.Runtime;
			document.getElementById("director").innerHTML = data.Director;
      document.getElementById("writer").innerHTML = data.Writer;
      document.getElementById("actors").innerHTML = data.Actors;
			document.getElementById("genre").innerHTML = data.Genre;
      document.getElementById("plot").innerHTML = data.Plot;
      document.getElementById("awards").innerHTML = data.Awards;
		}
	};
	xhttps.open("GET", url, true);
	xhttps.send();
}
const button = document.getElementById("btn");
button.addEventListener("click", () => {
	getData();
	document.getElementById("container").style.backgroundColor = "#fff3da";
});