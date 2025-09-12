import React from "react";
import "./MovieCard.css";

function MovieCard({ title, poster }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}

export default MovieCard;
