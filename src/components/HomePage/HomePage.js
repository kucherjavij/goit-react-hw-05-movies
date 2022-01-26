import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../API'
import s from './HomePage.module.css'

console.log(API.defaultMovies());
function HomePage() {
const [movie, setmovie] = useState(null)

useEffect(() => {
    API.defaultMovies().then(resp => setmovie(resp.results))
}, []);
    
 
   return(
   <div>
       <h1 className={s.title}>TRADING TODAY</h1>
       <ul>
            {movie && movie.map(s => (<li key={s.id} ><Link to={`/Movies/${s.id}`}>{s.title}</Link></li>))}
        </ul>
   </div>
)}

export default HomePage