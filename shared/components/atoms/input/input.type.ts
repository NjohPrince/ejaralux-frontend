import React from "react";

export type InputProps = {
  placeholder: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  name: string;
  value: string;
  id: string;
  ariaLabel?: string;
  type?: "text" | "password";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  action?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  autoComplete?: boolean;
};
