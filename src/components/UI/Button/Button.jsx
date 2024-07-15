import React from "react";

import cl from "./Button.module.scss";

export default function Button({ children, callback }) {
  return (
    <button onClick={callback} className={cl.button}>
      {children}
    </button>
  );
}
