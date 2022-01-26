import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from './API'



function Cast () {
    const {movieId} = useParams()
    const [actor, setActor] = useState(null);

useEffect(() => {
    API.fetchCast(movieId).then(resp => setActor(resp.cast))

}, [movieId]);


    return <div>
<ul>
    {actor && actor.map((actor) => (
        <li key={actor.id}>
            <img
                 src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                 alt={`${actor.name}`} 
                 width="150px"/>
            <p>{actor.name}</p>
            <p>Character:{actor.character}</p>
        </li>
    ))}
</ul>

    </div>;
}

export default Cast;