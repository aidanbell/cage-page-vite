import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { getOne, addToWatched, addRule, getRules } from '../../utils/api-service';
import { Grid } from '@mui/material';

import "./Details.css"

import RulesForm from "../../components/RulesForm/RulesForm";
import RulesScroller from "../../components/RulesScroller/RulesScroller";
import MovieDetails from '../../components/MovieDetails/MovieDetails';

export default function Details({ user, getFreshUser }) {
  const [movie, setMovie] = useState(null);
  const [rules, setRules] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    if (movie) return;
    getFreshMovie();
    getFreshRules();
  }, []);

  async function handleAddToWatched(id) {
    let res = await addToWatched(id);
    await getFreshUser();
  }

  async function handleAddToast(id) {
    let res = await addToast(id, user._id);
    await getFreshUser();
  }

  async function getFreshMovie() {
    let movie = await getOne(id);
    setMovie(movie);
  }

  async function getFreshRules() {
    let rules = await getRules(id);
    setRules(rules);
  }

  async function goAddRule(rule) {
    let res = await addRule(id, rule)
    await getFreshMovie();
    await getFreshRules();
  }

  return (
    <>
      {movie ? (
        <div className="details-page">
          <div className="details-details">
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.posterPath}`}
              alt={movie.title}
            />
            <MovieDetails
              movie={movie}
              user={user}
              handleAddToWatched={handleAddToWatched}
            />
          </div>
          <div className="divider"></div>
          <div className="details-rules">
            <RulesScroller rules={rules} />
            <RulesForm user={user} goAddRule={goAddRule} movieId={id}/>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}