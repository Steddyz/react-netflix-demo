import React, { useState } from "react";
import Information from "./Information";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Navigation from "../../UI/Navigation/Navigation";
import Episodes from "../Episodes/Episodes";

import { DATA } from "../../../data";

import cl from "./Main.module.scss";
import Details from "../Details/Details";

export default function Main() {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const [isActiveTab, setIsActiveTab] = useState(1);

  return (
    <div className={cl.wrapper}>
      <Sidebar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <div
        className={cl.main}
        style={{
          backgroundImage: `url(${DATA[0].mainImage}`,
          width: isSidebarShow ? "85%" : "90%",
        }}
      >
        {isActiveTab === 1 ? (
          <Information movie={DATA[0]} />
        ) : isActiveTab === 2 ? (
          <Episodes movie={DATA[0]} />
        ) : isActiveTab === 3 ? (
          <Details movie={DATA[0]} />
        ) : null}

        <Navigation isActiveTab={isActiveTab} setIsActiveTab={setIsActiveTab} />
      </div>
    </div>
  );
}
