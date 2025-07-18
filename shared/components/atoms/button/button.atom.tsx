import React from "react";

import classes from "./button.module.css";
import { ButtonProps } from "./button.type";

/**
 * The ButtonAtom component renders a button with an optional left and/or right icon and a "Please wait..." state.
 *
 * @param {ButtonProps} props - The component props.
 * @param {string} props.label - The button label. Required.
 * @param {string} [props.ariaLabel] - The aria-label for accessibility.
 * @param {"button" | "submit" | "reset"} [props.type="button"] - The button type.
 * @param {React.ReactNode} [props.iconLeft] - Optional icon to be displayed on the left side of the button.
 * @param {React.ReactNode} [props.iconRight] - Optional icon to be displayed on the right side of the button.
 * @param {boolean} [props.loading=false] - Whether the button is in a loading state.
 * @param {(e: React.MouseEvent) => void} [props.onClick] - The callback function to be called on button click.
 *
 * @example
 * <ButtonAtom label="Submit" ariaLabel="Submit the form" type="submit" onClick={() => console.log("Submit")} />
 */
const ButtonAtom: React.FC<ButtonProps> = ({
  label,
  ariaLabel,
  type = "button",
  iconLeft,
  iconRight,
  loading,
  normal,
  onClick,
}: ButtonProps) => {
  return (
    <div className={`${classes.wrapper}`}>
      <button
        aria-label={ariaLabel}
        aria-busy={loading}
        disabled={loading}
        aria-disabled={loading}
        type={type}
        onClick={onClick}
        className={`${classes.button} ${normal ? classes.normal : ""} delay`}
      >
        {loading ? (
          <>
            <span
              className={classes.spinner}
              role="status"
              aria-live="polite"
              aria-label="Loading"
            />
            Please wait...
          </>
        ) : (
          <>
            {iconLeft}
            {label}
            {iconRight}
          </>
        )}
      </button>
    </div>
  );
};

export default ButtonAtom;
