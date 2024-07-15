import React from "react";

import cl from "./Details.module.scss";

export default function Details({ movie }) {
  return (
    <div>
      <div className={cl.wrapper}>
        <h3 className={cl.title__details}>
          <img
            className={cl.logo__details}
            src={movie.logo}
            alt={movie.name}
            width="200"
            style={{ opacity: 0.8 }}
          />
        </h3>
        <p className={cl.descriptoin__details}>
          Development of the movie began when Marvel Studios received a loan
          from Merrill Lynch in April 2005. Following the success of Iron Man,
          Marvel announced in May 2008 that The Avengers would be released in
          July 2011 and would reunite Stark (Downey), Rogers (Evans), Banner
          (portrayed by Edward Norton at the time),[b] and Thor (Hemsworth) from
          previous Marvel films. After Johansson signed on as Romanov in March
          2009, Renner as Barton in June 2010, and Ruffalo replaced Norton as
          Banner in July 2010, the film's release was postponed to 2012. In
          April 2010, Whedon joined the film, rewriting the original script by
          Zach Penn. Filming began in April 2011 in Albuquerque, New Mexico, and
          moved to Cleveland, Ohio, in August, and to New York in September. The
          film contains over 2200 shots of visual effects. The Avengers
          premiered at the El Capitan Theater in Los Angeles on April 11, 2012,
          and was released in the United States on May 4 as the final film of
          the first phase of the MCU cinematic universe. The film has been
          highly praised for Whedon's direction and screenplay, visual effects,
          action scenes, acting and music. It grossed more than $1.5 billion at
          the global box office, setting numerous box office records and
          becoming the third highest-grossing film of all time at the time of
          its release and the highest-grossing film of 2012. It was the first
          Marvel movie to gross $1 billion from ticket sales.
        </p>
      </div>
      <hr />
    </div>
  );
}
