const moviesContainer = document.querySelector('#movies_container')
const form = document.querySelector('form')


const baseURL = `http://localhost:4000/api`

const moviesCallback = ({ data: movies }) => displayMovies(movies)
const errCallback = err => console.log(err)

const getAllMovies = () => axios.get(`${baseURL}/movies`).then(moviesCallback).catch(errCallback)
const createMovie = (body) => axios.post(`${baseURL}/movies`, body).then(moviesCallback).catch(errCallback);
const deleteMovie = (id) => axios.delete(`${baseURL}/movies/${id}`).then(moviesCallback).catch(errCallback);


document.getElementById("complimentButton").onclick = function () {
  axios.get(`${baseURL}/compliment/`).then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("fortuneButton").onclick = function () {
  axios.get(`${baseURL}/fortune/`).then(function (response) {
    const data = response.data;
    alert(data);
  });
};

function submitHandler(e) {
  e.preventDefault();

  let movie_title = document.querySelector("#movie_title");
  let imageURL = document.querySelector("#img");

  let bodyObj = {
    movie_title: movie_title.value,
    imageURL: imageURL.value
  }

  createMovie(bodyObj);

  movie_title.value = '';
  imageURL.value = '';
}

function createMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  movieCard.innerHTML = `<img alt='movie cover image' src=${movie.imageURL} class="movie-cover-image"/>
  <p class="movie_title">${movie.movie_title}</p>
  <button onclick="deleteMovie(${movie.id})">delete</button>
  `;
  moviesContainer.appendChild(movieCard);
}

function displayMovies(arr) {
  moviesContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createMovieCard(arr[i]);
  }
}

form.addEventListener('submit', submitHandler)

getAllMovies()