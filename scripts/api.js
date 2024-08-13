import updateMovieList from "./script.js";

export const apiKey = 'c3aa690acc0285b3324696b370038de1'

let movies = []

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2FhNjkwYWNjMDI4NWIzMzI0Njk2YjM3MDAzOGRlMSIsIm5iZiI6MTcyMjc5Njk1Ny45MzIxOTUsInN1YiI6IjY2YWI5Y2NlNzIzMmQxZjEzMmNkNWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l-GLK11Cdv8tlUtkqka4G8ksLw-YZEEH5dyXkcMmJ60'
  }
};

const carregar = () => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}language=pt-BR&page=1`,options)
  .then(response => response.json())
  .then(response => {
    
    movies = response.results

    console.log(response)
    updateMovieList(movies)

  
  })
  .catch(err => console.error(err));

carregar()

  
const searchBar = document.querySelector('#search_bar')
const searchInput = document.querySelector('#search_input')

searchBar.addEventListener('submit', function(event){

  event.preventDefault()
  console.log(searchInput.value)

  fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput.value}&include_adult=false&language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => {
    movies = response.results

    console.log(response)
    updateMovieList(movies)

  })
  .catch(err => console.error(err));

})

  

 /* document.addEventListener('DOMContentLoaded',function(){
    const favButton = document.querySelector('#set_favorite')
    favButton.addEventListener('click', function(){
      console.log(favButton)
    })

  })*/


export { carregar }


  