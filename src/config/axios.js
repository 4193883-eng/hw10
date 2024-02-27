import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmNhN2Q0OWUxZjkxYTM5Njk5NjU0N2I5Yjg1MmJjOSIsInN1YiI6IjY1MTMxNjA5MjZkYWMxMDBlYjFiZTIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MKi6sgoVD3Y6xHCLF5L0mIzGoGTkk1DoJIJor8c2IDA"

axios.defaults.headers.authorization = `Bearer ${token}`
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
