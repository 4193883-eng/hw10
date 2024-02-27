import {SwitcherBar} from "../components/SwitcherBar.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieCreditsService, getMovieReviewService} from "../services/moviesService.js";
import {ColorRing} from "react-loader-spinner";

export function MovieReviewsPage() {
    const {movieId} = useParams()
    const [isLoading, setIsLoading] = useState(false);
    const [reviews, setReviews] = useState(null)

    useEffect(() => {
        setIsLoading(true);
        getMovieReviewService(movieId).then(data => setReviews(data)).finally(() => setIsLoading(false))
    }, [movieId])

    console.log(reviews)
    return (
        <div>
            {isLoading && <ColorRing/>}
            <ul>
                {reviews &&
                    reviews["results"].map((review) => {
                        return (
                            <li key={review.id}><h4>{review.author}</h4> <p>{review.content}</p></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
