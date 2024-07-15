import React from "react";

import cl from "./Navigation.module.scss";

const tabs = [
  { _id: 1, name: "Overview" },
  { _id: 2, name: "Episodes" },
  { _id: 3, name: "Details" },
];

export default function Navigation({ isActiveTab, setIsActiveTab }) {
  return (
    <nav className={cl.nav}>
      {tabs.map((tab) => (
        <button
          className={isActiveTab == tab._id ? cl.active : ""}
          key={tab._id}
          onClick={() => {
            setIsActiveTab(tab._id);
          }}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
}
