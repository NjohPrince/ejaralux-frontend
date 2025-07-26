"use client";

import React, { useState } from "react";

import classes from "./layout.module.css";

import ButtonAtom from "@/shared/components/atoms/button/button.atom";
import LogoutIcon from "@/shared/components/icons/logout.icon";
import BurgerIcon from "@/shared/components/icons/burger.icon";
import SidebarOrganism from "../../organisms/sidebar/sidebar.organism";

const LayoutTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(true);

  return (
    <div className={`${classes.layout}`}>
      <div
        className={`${classes.sidenav} ${
          !sidebarActive ? classes.close : ""
        } delay`}
      >
        <SidebarOrganism />
      </div>
      <div
        className={`${classes.content} ${
          !sidebarActive ? classes.expand : ""
        } delay`}
      >
        <div className={`${classes.view} flex col gap-32`}>
          <div className={`${classes.nav} flex gap-24 space-between`}>
            <button
              aria-label="sidebar toggler"
              className={`${classes.toggler} flex center`}
              onClick={() => {
                setSidebarActive(!sidebarActive);
              }}
            >
              <BurgerIcon size="32" color="var(--dark-color)" />
            </button>
            <div>
              <ButtonAtom label="Logout" iconLeft={<LogoutIcon size="20" />} />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutTemplate;
