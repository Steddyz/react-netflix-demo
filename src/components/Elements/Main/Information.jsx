import React from "react";

import cl from "./Main.module.scss";
import Button from "../../UI/Button/Button";

export default function Information({ movie }) {
  const addToFavorites = (movieName) => {
    let favorites = localStorage.getItem("favoriteMovies");
    if (favorites) {
      favorites = JSON.parse(favorites);
      localStorage.setItem("faviroteMovies", [...favorites.movieName]);
    }
  };

  return (
    <div className={cl.info}>
      <img
        src={movie.logo}
        alt={movie.name}
        width="200"
        style={{ opacity: 0.8 }}
      />
      <div className={cl.additional}>
        <span>{movie.year}</span>
        <span>{movie.limitAge}</span>
        <span>{movie.rating}</span>
        <span>{movie.duration}</span>
      </div>

      <div className={cl.description}>{movie.description}</div>
      <div className={cl.buttons}>
        <Button cb={() => console.log("movie is open")}>
          <i className="bx bx-play" style={{ color: "#c62e21" }}></i>
          <span>Play</span>
        </Button>
        <Button cb={addToFavorites}>
          <i className="bx bx-plus"></i>
          <span>Play</span>
        </Button>
      </div>
    </div>
  );
}
