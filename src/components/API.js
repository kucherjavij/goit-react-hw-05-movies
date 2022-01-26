const KEY = 'ecff174557f5d798cd185fb8fd292849'
const URL = 'https://api.themoviedb.org/3/'
export function fetchSearchMovies(movieName) {
    return fetch(`${URL}search/movie?api_key=${KEY}&language=en-US&query=${movieName}&page=1`)
    .then(response => {return response.json()}
    )
}



export function defaultMovies () {
    return fetch(`
    ${URL}trending/movie/day?api_key=${KEY}`) 
    .then(response => {return response.json()}
        )
        
}

export function fetchMovieId(id) {
    return fetch(`${URL}movie/${id}?api_key=${KEY}`)
    .then(response => {return response.json()})
}

export function fetchCast(id) {
    return fetch(`${URL}movie/${id}/credits?api_key=${KEY}`)
    .then(response => {return response.json()})
}

export function fetchReviews(id) {
    return fetch(`${URL}movie/${id}/reviews?api_key=${KEY}`)
    .then(response => {return response.json()})
}