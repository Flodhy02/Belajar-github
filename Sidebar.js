import React from "react";
import movies from "../data/movies";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Popular Movies</h3>
      <ul>
        {movies.slice(0, 8).map((movie) => (
          <li key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <span>{movie.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
