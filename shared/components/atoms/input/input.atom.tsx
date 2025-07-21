import React from "react";

import classes from "./input.module.css";
import { InputProps } from "./input.type";

/**
 * InputAtom is a functional component that renders an input field with optional
 * left and right icons. It provides a customizable input element that can be used
 * within forms or standalone, with support for accessibility and styling.
 *
 * @param {InputProps} props - The properties object.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {React.ReactNode} [props.iconLeft] - Optional icon to be displayed on the left side of the input.
 * @param {React.ReactNode} [props.iconRight] - Optional icon to be displayed on the right side of the input.
 * @param {string} props.name - The name attribute of the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {string} props.id - The id attribute of the input field.
 * @param {string} [props.ariaLabel] - Optional aria-label for accessibility purposes.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Callback function to handle change events for the input field.
 */
const InputAtom: React.FC<InputProps> = ({
  placeholder,
  iconLeft,
  iconRight,
  name,
  value,
  ariaLabel,
  type = "text",
  id,
  action,
  onChange,
}: InputProps) => {
  return (
    <div className={`${classes.wrapper}`}>
      {iconLeft ? <div className={`${classes.icon__left}`}>{iconLeft}</div> : null}
      <input
        aria-label={ariaLabel}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${classes.input} ${iconLeft ? classes.icon : ""}`}
        type={type}
        placeholder={placeholder}
      />
      {iconRight ? (
        <button
          onClick={(e) => {
            if (action) {
              action(e);
            }
          }}
          type="button"
          aria-label="Toggle password visibility"
          className={`${classes.icon__right}`}
        >
          {iconRight}
        </button>
      ) : null}
    </div>
  );
};

export default InputAtom;
