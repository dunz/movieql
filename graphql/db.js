import fetch from 'node-fetch'

// export const people = [
//     {
//         id: 1,
//         name: 'dj',
//         age: 25,
//         gender: 'mail'
//     },
//     {
//         id: 2,
//         name: 'dj',
//         age: 25,
//         gender: 'mail'
//     },
//     {
//         id: 3,
//         name: 'dj',
//         age: 25,
//         gender: 'mail'
//     },
//     {
//         id: 4,
//         name: 'dj',
//         age: 25,
//         gender: 'mail'
//     }
// ]
//
// export let movies = [
//     {
//         id:1,
//         name: 'aaa',
//         score: 3
//     },{
//         id:2,
//         name: 'aaa2',
//         score: 32
//     },{
//         id:3,
//         name: 'aaa',
//         score: 33
//     },{
//         id:4,
//         name: 'aaa',
//         score: 34
//     },{
//         id:5,
//         name: 'aaa',
//         score: 35
//     },{
//         id:6,
//         name: 'aaa',
//         score: 36
//     },{
//         id:7,
//         name: 'aaa',
//         score: 37
//     },
// ]

// export const getMovies = () => movies;
// export const getMovies = () => movies;
// export const getMovieById = id => movies.find(m => m.id === id)
// export const deleteMovie = (id) => {
//     const cleanMovie = movies.filter(m => m.id !== id)
//     const result = cleanMovie.length < movies.length
//     movies = cleanMovie
//     return result;
// }
// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: movies.length + 1,
//         name,
//         score
//     }
//     movies.push(newMovie)
//     return newMovie;
// }

const API_URL = 'https://yts.mx/api/v2/list_movies.json'

export const getMovies = (limit, rating) =>  {
    const query = {
        ...limit > 0 && {limit: limit},
        ...rating > 0 && {minimum_rating: rating}
    }
    const queryString = Object.entries(query).reduce((acc, [key, value]) => {
        acc += `${acc ? '&': '?'}${key}=${value}`
        return acc;
    }, '')
    const REQUEST_URL = API_URL + queryString
    console.log('REQUEST_URL', REQUEST_URL)
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies)
}

