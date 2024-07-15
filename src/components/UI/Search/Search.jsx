import React from "react";
import cl from "./Search.module.scss";

export default function Search() {
  return (
    <div className={cl.search}>
      <div>
        <i className="bx bx-search-alt"></i>
        <input></input>
      </div>
      <i className="bx bx-customize"></i>
    </div>
  );
}
