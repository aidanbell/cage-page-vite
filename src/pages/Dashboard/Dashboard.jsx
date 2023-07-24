import MovieCardGrid from "../../components/MovieCardGrid/MovieCardGrid";
import { Container } from "@mui/material";
import "./Dashboard.css"

export default function Dashboard({ user }) {
  return (
     user  && 
     <Container className="dashboard-container" maxWidth="xl">
      <MovieCardGrid user={user} movies={user ? user.watched : [] }/>
    </Container>
  );
}