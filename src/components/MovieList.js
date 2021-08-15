import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

function MovieList({ movies, error }) {
  return (
    <Container>
      {error ? <h3>{error}</h3> : ""}

      {movies &&
        movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            type={movie.Type}
            imdb={movie.imdbID}
          />
        ))}
    </Container>
  );
}

export default MovieList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
