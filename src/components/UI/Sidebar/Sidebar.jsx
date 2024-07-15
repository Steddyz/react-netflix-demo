import React from "react";

import cl from "./Sidebar.module.scss";

const menu = ["Popular", "TV Shows", "Films", "My list"];

export default function Sidebar({ isSidebarShow, setIsSidebarShow }) {
  return (
    <div
      className={cl.sidebar}
      style={{ width: isSidebarShow ? "15%" : "10%" }}
    >
      <button
        onClick={() => {
          setIsSidebarShow(!isSidebarShow);
        }}
      >
        <i className={`bx bx-${isSidebarShow ? "x" : "bx bxs-grid"}`}></i>
      </button>
      <ul className={isSidebarShow ? cl.show : ""}>
        {menu.map((title) => (
          <li key={title}>
            <a href="/">{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
