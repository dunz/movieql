import {getMovies} from "./db";

export const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        // movie: (_, {id}) => getMovieById(id)
    },
    // Mutation: {
    //     addMovie: (_, {name, score}) => addMovie(name, score),
    //     deleteMovie: (_, {id}) => deleteMovie(id)
    // }
}
