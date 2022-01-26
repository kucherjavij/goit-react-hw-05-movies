import { useState} from "react";
import { Link } from "react-router-dom";
import * as API from './API'


function Movies() {
const [movieName, setmovieName] = useState('');
const [movie, setmovie] = useState(null);

const onHandleSubmit = (evt) => {
    evt.preventDefault()
    API.fetchSearchMovies(movieName).then(resp => setmovie(resp.results) )
    setmovieName('')
}



const onMovieChange = (evt) => {
    setmovieName(evt.currentTarget.value.toLowerCase())
}

    return ( 
    <div>
        <form onSubmit={onHandleSubmit}>
  <button type="submit">
    <span>Search</span>
  </button>

  <input
  name='pictureName'
  value={movieName}
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images"
    onChange={onMovieChange}
  />
</form>
<hr/>
<ul>
    {movie && movie.map(s => (<li key={s.id}><Link to={`/Movies/${s.id}`}>{s.title}</Link></li>))}
</ul>
    </div> 
    );}

export default Movies;