import updateMovieList from "./script.js";
import { apiKey, bearer } from "./environment.js";


let movies = []

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `${bearer}`
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


  