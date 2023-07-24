import "./MovieCard.css"
import { Card, CardContent, CardActions, CardMedia, Divider }  from '@mui/material';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import { watched } from "../../utils/helpers";

export default function MovieCard({ _id, title, posterPath, movieId, user, rulesCount }) {
  return (
    <Link className="card-link" to={`/movies/${movieId}`}>
      <Card className="card-link" sx={{ height: "100%" }}>
        <CardMedia
          image={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${posterPath}`}
          alt={title}
          component="img"
          className="card-image"
        />
        <CardContent className="card-content">
          {title}
          {/* <Typography variant="h4" noWrap={true} className="card-title">{title}</Typography> */}
        </CardContent>
        <Divider />
        {user && (
          <CardActions className="card-action" variant="soft">
            {watched(user.watched, movieId) ? (
              <h4 className="watched">Watched</h4>
            ) : (
              <h4 className="not-watched">Not Watched</h4>
            )}
            <Divider orientation="vertical" flexItem />
            <h4>{rulesCount} Rules</h4>
          </CardActions>
        )}
      </Card>
    </Link>
  );
}