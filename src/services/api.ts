import axios from "../utils/axios"


export const getMovies = (searchText: string) => {
    return axios.get(`/?s=${searchText}`)
}

export const getMovieDetail = (id: string) => {
    return axios.get(`/?i=${id}`)
}

