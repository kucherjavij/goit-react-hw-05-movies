import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { useParams} from "react-router-dom"
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import * as API from '../API'
import s from './MovieDetailsPage.module.css'
const Cast = lazy(() => import("../Cast"))
const Reviews = lazy(() => import("../Reviews"))

function MovieDetailsPage() {
const {movieId} = useParams()
const [movie, setMovie] = useState(null);
const navigate = useNavigate()

useEffect(() => {
    if (!movieId) {
        return
    }
    API.fetchMovieId(movieId).then(resp => setMovie(resp))
}, [movieId]);
    
    return ( 
    <div>
        <div>
                <button onClick={() => navigate(-1)} className={s.button}>Go Back</button>
        </div>
           {movie &&
           <div> 
               <div className={s.conteiner}> 
                    <div >
                        <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`${movie.original_title}`}
                        width="210px"/>
                    </div>
                    <div className={s.movieContainer}>
                        <h1>{movie.original_title}</h1>
                        <p>User Score: {`${movie.vote_average}`}</p>
                        <h2>Overview</h2>
                        <p>{movie.overview}</p>
                        <h3>Genres</h3>
                        <ul>
                            {movie.genres.map(genre =>
                                <li key={genre.id}> {genre.name} </li>)}
                        </ul>
                    </div>
                </div>
                <div><hr/>
                    <h2>Additional Information</h2>
                    <ul>
                        <li><Link to={`/Movies/${movieId}/cast`}>Cast</Link></li>
                        <li><Link to={`/Movies/${movieId}/reviews`}>Reviews</Link></li>
                    </ul>
                </div>
            </div>}
        <hr/>
        <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
        <Route path='/cast' element={<Cast/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        </Routes>
        </Suspense>
    </div>
    )
}

export default MovieDetailsPage