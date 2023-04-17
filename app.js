 // fetching the JSON data
const url = "./assets/movies.json";

let movies = [];

fetch(url)
  .then(response => response.json())
  .then(data => {
    movies = data;
  });

// function to filter movies by genre
function filterByGenre(movies, genre) {
  if (!genre) {
    return movies;
  }
  return movies.filter((movie) => movie.genre === genre);
}

// function to filter movies by rating
function filterByRating(movies, rating) {
  if (!rating) {
    return movies;
  }
  return movies.filter((movie) => movie.rating >= rating);
}

// function to filter movies by release year
function filterByYear(movies, year) {
  if (!year) {
    return movies;
  }
  return movies.filter((movie) => movie.year === year);
}

// function to recommend movies based on user preferences
function recommendMovies() {
  const genre = document.getElementById("genre").value;
  const rating = parseFloat(document.getElementById("rating").value);
  const year = parseInt(document.getElementById("year").value);

  // filter movies based on user preferences
  let filteredMovies = filterByGenre(movies, genre);
  filteredMovies = filterByRating(filteredMovies, rating);
  filteredMovies = filterByYear(filteredMovies, year);

  // display filtered movies on the user interface
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  if (filteredMovies.length === 0) {
    resultDiv.innerHTML = "No movies found.";
  } else {
    const ul = document.createElement("ul");
    filteredMovies.forEach((movie) => {
      const li = document.createElement("li");
      li.textContent = `${movie.title} (${movie.year}) - ${movie.genre}, ${movie.rating}/5`;
      ul.appendChild(li);
    });
    resultDiv.appendChild(ul);
  }
}