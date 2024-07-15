import React from "react";
import Search from "../../UI/Search/Search";
import Profile from "./Profile";

import cl from "./Header.module.scss";

export default function Header() {
  return (
    <div className={cl.header}>
      <div>
        <a href="/">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix"
            height="35"
            width="112"
          />
        </a>
        <Search />
      </div>
      <Profile />
    </div>
  );
}
