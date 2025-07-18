import React from "react";

export type ButtonProps = {
  label?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  normal?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};
