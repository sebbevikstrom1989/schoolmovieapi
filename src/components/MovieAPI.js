import React, { useEffect, useState } from "react";
import Form from "./Form";
import MovieList from "./MovieList";

function MovieAPI() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("batman");
  const [movieType, setMovieType] = useState("All");
  const [error, setError] = useState("");

  //Fetch the movies when searching

  const getMovieRequest = async (searchValue) => {
    const url =
      movieType === "All"
        ? `http://www.omdbapi.com/?s=${searchValue}&apikey=8434f39a`
        : `http://www.omdbapi.com/?s=${searchValue}&type=${movieType}&apikey=8434f39a`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setError(data.Error);
      })
      .catch((error) => {
        console.log("Opps, something went wrong!", error);
      });
  };

  useEffect(() => {
    getMovieRequest(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, movieType]);

  return (
    <div>
      <Form
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setMovieType={setMovieType}
        movieType={movieType}
      />
      <MovieList movies={movies} error={error} />
    </div>
  );
}

export default MovieAPI;
