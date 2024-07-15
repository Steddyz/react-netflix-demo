import React from "react";

import cl from "./Header.module.scss";

export default function Profile() {
  return (
    <div className={cl["profile-wrapper"]}>
      <div className={cl.notification}>
        <i className="bx bxs-bell"></i>
        <span></span>
      </div>
      <div className={cl.profile}>
        <div>
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50"
            alt=""
          />
        </div>
        <i className="bx bx-caret-down"></i>
      </div>
    </div>
  );
}
