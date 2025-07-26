"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./sidebarlink.module.css";

import { SidebarLinkProps } from "./sidebarlink.type";

const SidebarLinkAtom: React.FC<SidebarLinkProps> = ({ label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${classes.sidebar__link} ${
        isActive ? classes.active : ""
      } delay flex gap-12`}
    >
      {label}
    </Link>
  );
};

export default SidebarLinkAtom;
