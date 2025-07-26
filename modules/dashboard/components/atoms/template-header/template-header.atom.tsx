import React from "react";

import classes from "./templateheader.module.css";

import { TemplateHeaderProps } from "./templateheader.type";

const TemplateheaderAtom: React.FC<TemplateHeaderProps> = ({ content }) => {
  return (
    <div className={`${classes.template__header}`}>
      <h2>{content}</h2>
    </div>
  );
};

export default TemplateheaderAtom;
