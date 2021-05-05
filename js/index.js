const app = document.querySelector("#movie-list");
const movieList = document.getElementById("movie-list");
let movies = [];
let input = document.getElementById("searchresult");
let search;
let form = document.getElementById("form");
console.log(form);

const fetchMovie = async () => {
  await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=62c5a8a060e9e8d0de6d0b9de3383041&language=fr-FR&query=" +
      search
  )
    .then((res) => res.json())
    .then((data) => (movies = data.results));
};

input.addEventListener("input", (event) => {
  search = event.target.value;
  fetchMovie();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  moviesDisplay();
});

const dateParser = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  console.log(dateParser);
  return newDate;
};

const moviesDisplay = () => {
  app.innerHTML = movies
    .map((movie) => {
      return `
    <li class="movie">
    <h2>${movie.title}</h2>
    <p>Date de sortie : ${dateParser(movie.release_date)}</p>
    <img class="affiche" src=${
      movie.poster_path
        ? "https://image.tmdb.org/t/p/w300/" + movie.poster_path
        : "assets/img/poster.jpg"
    }
    alt="Affiche du film ${movie.title} "/>
    <p>Note du film : ${movie.vote_average}/10 <img  class=logofg src=${
        movie.vote_average < 6 ? "assets/img/glacon.png" : "assets/img/fire.png"
      }></p>
    <p class="syn">Synopsis : ${movie.overview}</p>
    </li>
    `;
    })
    .join("");
};

// ${movie.poster_path} != null ? "https://image.tmdb.org/t/p/w300${movie.poster_path}" : "..assets/img/poster.jpg"}
