const app = document.querySelector(".movie-list");
let movies = [];
let input = document.getElementById("searchresult");
let search;

const fetchMovie = async () => {
  await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=62c5a8a060e9e8d0de6d0b9de3383041&language=fr-FR&query=" +
      search
  )
    .then((res) => res.json())
    .then((data) => (movies = data.results));

  console.log(movies);
  input.addEventListener("input", (event) => {
    search = event.target.value;
    fetchMovie();
  });
};
const moviesDisplay = () => {};

// app.innerHTML = fetchMovie
//   .map((movie) => {
//     return `
// 		<li class="movie">
// 		<h2>${title}</h2>
// 		<img src= alt='photo de/>
// 		<p></p>
// 		<p></p>
// 		</li>
// 		`;
//   })
//   .join("");

// fetchMovie();
