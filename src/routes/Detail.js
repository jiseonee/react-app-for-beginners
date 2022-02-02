import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    const getMovie = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        console.log(movie);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
        <h1>Detail</h1>
        <img src={movie.large_cover_image}/>
        <h3>{movie.title_long} | {movie.rating}</h3>
        <p>{movie.description_full}</p>
        </div>
    );
  }
  
  export default Detail;
  