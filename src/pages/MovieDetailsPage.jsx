import {useEffect, useState} from "react";
import {getMovieDetailsService} from "../services/moviesService.js";
import {Link, Outlet, useParams} from "react-router-dom";
import {ColorRing} from "react-loader-spinner";

export function MovieDetailsPage() {
    const [details, setDetails] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const {movieId} = useParams()
    useEffect(() => {
        setLoading(true)
        getMovieDetailsService(movieId).then((data) => setDetails(data)).finally(() => setLoading(false))
    }, []);
    {
        console.log(details)
    }

    return (<>
            {isLoading && <ColorRing visible/>}
            {details !== null && (
                <div>
                    <h2>{details.title}</h2>
                    <img src={"https://image.tmdb.org/t/p/original" + details.poster_path} width={300}
                         alt={details.title}/>
                    <p>{details.overview}</p>
                    <div>
                        <h3>Additional Info</h3>
                        <Link to={"reviews"}>Reviews</Link><br/>
                        <Link to={"cast"}>Cast</Link>
                    </div>
                    <Outlet/>
                </div>
            )
            }
        </>
    )
}
