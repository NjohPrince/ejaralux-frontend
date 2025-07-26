import React from "react";

import classes from "./sidebar.module.css";

import SidebarLinkAtom from "../../atoms/sidebar-link/sidebar-link.atom";

const SidebarOrganism = () => {
  return (
    <aside role="navigation" className={`${classes.sidebar} flex col 32`}>
      <div className={`${classes.head}`}>
        <h2>EJARALUX</h2>
      </div>

      <div className={`${classes.side__menu} flex col`}>
        <SidebarLinkAtom label="Dashboard" href="/dashboard" />
        <SidebarLinkAtom label="Categories" href="/dashboard/categories" />
        <SidebarLinkAtom label="Products" href="/dashboard/products" />
        <SidebarLinkAtom
          label="Manage Orders"
          href="/dashboard/manage-orders"
        />
      </div>
    </aside>
  );
};

export default SidebarOrganism;
