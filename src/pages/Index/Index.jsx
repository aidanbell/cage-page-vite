import { useState, useEffect } from 'react';
import { getAll } from '../../utils/api-service';

import { Grid, Container } from '@mui/material'

import MovieCard from '../../components/MovieCard/MovieCard';
import Controls from '../../components/Controls/Controls';
import MovieCardGrid from '../../components/MovieCardGrid/MovieCardGrid';
import Loading from '../../components/Loading/Loading';

import "./Index.css"

export default function Index({user, movies, setMovies, sortkey, setSortkey}) {

  useEffect(() => {
    if (!movies.length) {
      console.log('movies: ', movies)
      console.log('index useEffect')
      getAll()
        .then(movies => setMovies(movies))
        .catch(err => console.error(err))
    }
  }, [movies])

  function sortHandle(key) {
    if (key === 'title') {
      setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)))
    } else if (key === 'rules') {
      setMovies([...movies].sort((a, b) => b.rulesCount - a.rulesCount))
    } else if (key === 'rating') {
      setMovies([...movies].sort((a, b) => b.rating - a.rating))
    } else if (key ==='-rating') {
      setMovies([...movies].sort((a, b) => a.rating - b.rating))
    } else if (key === 'year') {
      setMovies([...movies].sort((a, b) => {
        if (a.releaseDate === null) return 1
        if (b.releaseDate === null) return -1
        return b.releaseDate.slice(0, 4) - a.releaseDate.slice(0, 4)
      }))
    }
  }


  return (
    <Container className="index-container" maxWidth="xl">
      <Controls
        sortHandle={sortHandle}
        sortkey={sortkey}
        setSortkey={setSortkey}
        movies={movies && movies.reduce((acc, movie) => [...acc, {label: movie.title, id: movie.movieId}], [])}
      />
      {movies.length ? 
        <MovieCardGrid movies={movies} user={user} />
        :
        <Loading />
      }
    </Container>
  )
}