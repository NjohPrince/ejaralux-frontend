import React from "react";

import classes from "./sidebar.module.css";

const SidebarOrganism = () => {
  return (
    <aside role="navigation" className={`${classes.sidebar} flex col 32`}>
      <div className={`${classes.head}`}>
        <h2>EJARALUX</h2>
      </div>

      <div className={`${classes.side__menu}`}></div>
    </aside>
  );
};

export default SidebarOrganism;
