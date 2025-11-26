import { movies } from "./movies.js";
const patternSearchInput = document.getElementById("pattern-search-input");
const patternSearchSubmit = document.getElementById("pattern-search-submit");
const contactDisplay = document.getElementById("movie-display");

function renderContact(movieObj) {
  const contactCard = document.createElement("aside");
  contactCard.classList.add("movie-card");
  const title = document.createElement("p");
  const year = document.createElement("p");
  const genre = document.createElement("p");
  title.innerText = movieObj.title;
  year.innerText = movieObj.year;
  genre.innerText = movieObj.genre;

  contactCard.append(title);
  contactCard.append(year);
  contactCard.append(genre);
  contactDisplay.append(contactCard);

  /*
    The CSS for contact-card has been done for you. 
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card. 
*/
}

patternSearchSubmit.addEventListener("click", function () {
  let searchValue = patternSearchInput.value.toLowerCase().trim();
  contactDisplay.innerHTML = ""; // clear old results
  let results = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchValue) ||
      movie.genre.toLowerCase().includes(searchValue)
  );
  if (results.length === 0) {
    contactDisplay.innerHTML = "<p>No movies found.</p>";
    return;
  }
  results.forEach((movie) => renderContact(movie));
});
