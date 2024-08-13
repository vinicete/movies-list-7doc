import { carregar } from "./api.js"

const movies = document.querySelector('#movies')

let favMovies = getLocalStorage()

function saveToLocalStorage(favMovies){

  localStorage.setItem('favmovies',JSON.stringify(favMovies))
}


function getLocalStorage(keyName){

  return JSON.parse(localStorage.getItem('favmovies'))
}


const checkbox = document.querySelector('#favorites_only')

checkbox.addEventListener('click', () => {
  const checked = checkbox.checked;

  console.log('Checkbox is:', checked ? 'Checked' : 'Unchecked');

  if (checked) {
    updateMovieList(getLocalStorage());
  } else {
    carregar();
  }
});





function updateMovieList(list){

  movies.innerHTML = ''
  list.forEach(movie=>{

    const backdropPath = movie.backdrop_path 
      ? `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}` 
      : '../assets/images/image2.jpeg'; 


    const movieItem = document.createElement('div')
    movieItem.classList.add('movie-item')
    movies.appendChild(movieItem)

    const movieItemInfo = document.createElement('div')
    movieItemInfo.classList.add('movie-item-info')

    const movieItemText = document.createElement('div')
    movieItemText.classList.add('movie-item-text')

    movieItem.appendChild(movieItemInfo)
    movieItem.appendChild(movieItemText)

    const movieDesc = document.createElement('p')
    movieDesc.innerText = movie.overview
    movieItemText.appendChild(movieDesc)

    const movieImg = document.createElement('img')
    movieImg.src = backdropPath
    movieItemInfo.appendChild(movieImg)

    const movieItemTitle = document.createElement('div')
    movieItemTitle.classList.add('movie-item-title')
    movieItemInfo.appendChild(movieItemTitle)
    
    const year = new Date(movie.release_date).getFullYear()
    const title = document.createElement('p')
    title.innerText = `${movie.title} (${year})`
    movieItemTitle.appendChild(title)

    const avaliation = document.createElement('div')
    avaliation.classList.add('avaliation')
    movieItemTitle.appendChild(avaliation)

    const grade = document.createElement('div')
    grade.classList.add('grade')
    avaliation.appendChild(grade)

    const star = document.createElement('img')
    star.classList.add('star')
    star.src = "assets/images/Star.svg"
    grade.appendChild(star)

    const gradeValue = document.createElement('span')
    gradeValue.innerText = movie.vote_average.toFixed(1)
    grade.appendChild(gradeValue)


    const favButton = document.createElement('button')
    favButton.classList.add('grade')
    favButton.id = 'set_favorite'
    avaliation.appendChild(favButton)


    const heart = document.createElement('img')
    heart.classList.add('heart')
    const favorited = getLocalStorage().find(item => item.id === movie.id)
    if(favorited){
      heart.src = "assets/images/heart-fill.svg"  
    }
    else{
      //console.log(movie)
      heart.classList.add('notFavorite')
      heart.src = "assets/images/heart-empty.svg"
    }
    favButton.appendChild(heart)



    heart.addEventListener('click', ()=>{

      const isFavorite = heart.classList.contains('notFavorite')
      if(isFavorite){
        heart.classList.toggle('notFavorite')
        heart.src = "assets/images/heart-fill.svg"
        const isInMovies = favMovies.find(item => item.id ===movie.id)

        if(!isInMovies){
          favMovies.push(movie)
        }
        
        saveToLocalStorage(favMovies)
      }
      else{
        heart.classList.toggle('notFavorite')
        heart.src = "assets/images/heart-empty.svg"
        const movieIndex = favMovies.findIndex(item => item.id === movie.id);
        if (movieIndex > -1) {
          favMovies.splice(movieIndex, 1);
        }

        
        saveToLocalStorage(favMovies)
      }
      
      console.log(movie)
      console.log(favMovies)
      console.log(getLocalStorage())
      return favMovies

    })

    const favButtonSpan = document.createElement('span')
    favButtonSpan.innerText = 'Favoritar'
    favButton.appendChild(favButtonSpan)

  })

}


//updateMovieList()









export default updateMovieList;
