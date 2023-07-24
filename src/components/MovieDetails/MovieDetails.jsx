import Sentiment from "../Sentiment/Sentiment.jsx";
import { Button } from "@mui/material";
import { watched } from "../../utils/helpers.js";

const buttonText = [
  "YOU CANNOT UNSEE THIS",
  "ONCE YOU'VE SEEN IT, YOU CAN'T UNSEE IT",
  "YOU HAVE WITNESSED THIS",
  "NO TAKE BACKS",
  "OH NO",
  "WHY DID YOU DO THIS",
]

export default function MovieDetails ({movie, user, handleAddToWatched}) {
  console.log(new Date(movie.releaseDate).toLocaleDateString());


  return (
    movie && (
      <div>
        <h1>{movie.title}</h1>
        {movie.genres.join(', ')}
        <p>Released: {new Date(movie.releaseDate).toLocaleDateString("en-US")}</p>
        <p>{movie.overview}</p>
        <h3>Rating: {movie.rating} <Sentiment rating={movie.rating}/></h3>
        {user && watched(user.watched, movie.movieId) ?
          <Button variant="outlined" disabled >{buttonText[Math.random() * buttonText.length | 0]}</Button>
          :
          <Button variant="contained" color="primary" onClick={() => handleAddToWatched(movie.movieId)}>ADD TO WATCHED</Button>
        }
      </div>
    )
  );
}