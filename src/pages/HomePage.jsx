import {useEffect, useState} from "react";
import {getTrendingMoviesService} from "../services/moviesService.js";
import {ColorRing} from "react-loader-spinner";
import {Link} from "react-router-dom";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getTrendingMoviesService()
            .then((res) => setMovies(res.results))
            .finally(() => setIsLoading(false))
    }, [])

    console.log(movies)

    return (
        <div>
            {isLoading && <ColorRing visible/>}
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}><Link to={`/movies/${movie.id}`}>{String(movie.title)}</Link></li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
