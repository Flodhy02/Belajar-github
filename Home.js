import React from "react";
import MovieGrid from "../components/MovieGrid";
import Sidebar from "../components/Sidebar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="title">🎬 Movie App</h1>
      <div className="content">
        <MovieGrid />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
