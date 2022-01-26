import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
const MovieDetailsPage = lazy(() => import("./components/MovieDetailsPage/MovieDetailsPage"))
const Movies = lazy(() => import("./components/Movies"))


function App() {
  return (
  <div>
    <Navigation/>
    <hr /> <Suspense fallback={<div>LOADING...</div>}>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      
      <Route path='/Movies' element={<Movies/>} />
      <Route path='/Movies/:movieId/*' element={<MovieDetailsPage/>} />
      
    </Routes>
   </Suspense>
    
  </div>
  );
}

export default App;
