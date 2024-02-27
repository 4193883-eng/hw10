import axios from "axios";

export function getTrendingMoviesService(){
    return axios.get('/trending/movie/week').then(res => res.data)
}

export function getMovieDetailsService(id){
    return axios.get(`/movie/${id}`).then(res => res.data)
}

export function getMovieCreditsService(id){
    return axios.get(`/movie/${id}/credits`).then(res => res.data)
}

export function getMovieReviewService(id){
    return axios.get(`/movie/${id}/reviews`).then(res => res.data)
}

export function queryMovies(query){
    return axios.get(`/search/movie`, {
        params: {
            'query': query
        }
    }).then(res => res.data)
}
