import React from "react";

import cl from "./Episodes.module.scss";

import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";
import img4 from "../../../images/img4.jpg";
import img5 from "../../../images/img5.jpg";

export default function Episodes({ movie }) {
  return (
    <div>
      <div className={cl.episodes__wrapper}>
        <div className={cl.episodes__wrapper__top}>
          <img
            className={cl.logo__details}
            src={movie.logo}
            alt={movie.name}
            width="200"
            style={{ opacity: 0.8, paddingTop: "15px" }}
          />
        </div>
        <div className={cl.episodes__wrapper__bottom}>
          <img className={cl.episodes__image} src={img1} />
          <img className={cl.episodes__image} src={img2} />
          <img className={cl.episodes__image} src={img3} />
          <img className={cl.episodes__image} src={img4} />
        </div>
        <span className={cl.episodes__description}>Moments from the movie</span>
      </div>
    </div>
  );
}
