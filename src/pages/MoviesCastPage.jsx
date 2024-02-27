import {SwitcherBar} from "../components/SwitcherBar.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieCreditsService} from "../services/moviesService.js";
import {ColorRing} from "react-loader-spinner";

export function MoviesCastPage() {
    const {movieId} = useParams()
    const [isLoading, setIsLoading] = useState(false);
    const [cast, setCast] = useState(null)

    useEffect(() => {
        setIsLoading(true);
        getMovieCreditsService(movieId).then(data => setCast(data)).finally(() => setIsLoading(false))
    }, [movieId])

    console.log(cast)
    return (
        <div>
            {isLoading && <ColorRing/>}
            <ul>
                {cast &&
                    cast["cast"].map((person) => {
                        return (
                            <li key={person.id} style={{display: "flex"}}><img
                                src={"https://image.tmdb.org/t/p/original" + person.profile_path} alt={person.name}
                                width={30}/> <span>{person.name}</span></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
