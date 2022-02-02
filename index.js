
let message = document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')

    movieTitle.addEventListener('click', crossOffMovie)

    movieTitle.textContent = inputField.value  // not sure
   
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)

    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

const form = document.querySelector('form')

form.addEventListener('submit', addMovie)
 
const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}

const crossOffMovie = (event) =>{
    event.target.classList.toggle('checked') 
    if(event.target.classList.contains('checked') === true){
        message.textContent = "Watched!"
    }else{
        message.textContent = "Movie added back!"
    }
}