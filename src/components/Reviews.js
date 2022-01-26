import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from './API'

function Reviews() {
    const {movieId} = useParams()
    const [reviews, setReviews] = useState(null);

useEffect(() => {
    API.fetchReviews(movieId).then(resp => setReviews(resp.results))
}, [movieId]);

    return <div>
        <ul>
            {reviews && reviews.map((comments) => (
                <li key={comments.id}>
                    <h3>Author: {comments.author}</h3>
                    <p>{comments.content}</p>
                </li>
            ))}
            </ul>
    </div>;
}

export default Reviews;