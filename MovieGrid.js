import React from "react";
import movies from "../data/movies";
import MovieCard from "./MovieCard";
import "./MovieGrid.css";

function MovieGrid() {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} poster={movie.poster} />
      ))}
    </div>
  );
}

export default MovieGrid;
