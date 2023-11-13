import {useEffect,useState} from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
// 99a81d4


const API_URL = 'http://www.omdbapi.com?apikey=99a81d4';

const movie1 = {
    "Title": "Superman",
    "Year": "2011", 
    "imdbID": "tt2084949", 
    "Type": "movie", 
    "Poster": "N/A"
};

const App = ()=>{

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);

    return(
        <div className="app">
           <h1>Movieland</h1>
           <div className="search">
            <input
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
            />  
            <img
                src={SearchIcon}
                alt="search"
                onClick={()=> searchMovies(searchTerm)}
            />  
           </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie)=>(
                                <MovieCard movie={movie}/>
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }

           
        </div>
    );
}

export default App;