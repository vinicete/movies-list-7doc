const movies = document.querySelector('#movies')

let list = [
  {
    image: "/assets/images/image 1.svg",
    title: "Avengers Endgame",
    year: 2019,
    grade: 9.2,
    isFavorite: true,
    description: "Descrição loka...",
  },
  {
    image: "/assets/images/image 1.svg",
    title: "Avengers Endgame",
    year: 2019,
    grade: 9.2,
    isFavorite: true,
    description: "Descrição doida...",
  }
]

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
    heart.src = "assets/images/heart-empty.svg"
    favButton.appendChild(heart)

    const favButtonSpan = document.createElement('span')
    favButtonSpan.innerText = 'Favoritar'
    favButton.appendChild(favButtonSpan)

  })

}


//updateMovieList()

export default updateMovieList;
