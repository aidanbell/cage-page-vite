import { Grid } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieCardGrid.css";

export default function MovieCardGrid({ movies, user }) {
  return (
    <Grid container spacing={2}>
      {movies ? (
        movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard {...movie} user={user} />
          </Grid>
        ))
      ) : (
        <Loading />
      )}
    </Grid>
  );
}