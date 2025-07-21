"use client";

import _ from "lodash";
import { FormEvent, useEffect, useState } from "react";

import { useAppDispatch } from "./redux.hooks";
import { NotificationTitleType, showNotification } from "@/shared/redux/features/notification/notification.slice";

interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string | RegExp;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

type ErrorRecord<T> = Partial<Record<keyof T, string>>;

export type Validations<T extends object> = Partial<
  Record<keyof T, Validation>
>;

/**
 * Creates a form hook that manages form state, validation, and submission.
 *
 * @template T - The type of the form data.
 * @param {T} data - The initial form data.
 * @param {boolean} trigger - A trigger value to force re-renders.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setTrigger - A function to update the trigger value.
 * @param {() => void} [onSubmit] - An optional callback function to be called on form submission.
 * @param {Validations<T>} [validations] - An optional object containing validation rules for each form field.
 * @returns {{ form: T, errors: ErrorRecord<T>, handleSubmit: () => Promise<void>, updateForm: (name: keyof typeof data | (keyof typeof data)[], value: string | string[] | boolean | number | object | [] | Partial<Place> | undefined) => void }} - An object containing the form state, error state, submit handler, and update form function.
 */
const UseFormHook = <T extends Record<keyof T, string>>(
  data: T,
  trigger: boolean,
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
  onSubmit?: (e?: FormEvent<HTMLFormElement>) => void,
  validations?: Validations<T>
): {
  form: T;
  errors: ErrorRecord<T>;
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => Promise<void>;
  updateForm: (
    name: keyof typeof data | (keyof typeof data)[],
    value: string | string[] | boolean | number | object | [] | undefined
  ) => void;
} => {
  const [form] = useState<T>(data);
  const [errors, setErrors] = useState<ErrorRecord<T>>({});
  const dispatch = useAppDispatch();

  const updateForm = (
    name: keyof typeof data | (keyof typeof data)[],
    value: string | string[] | boolean | number | object | [] | undefined
  ) => {
    if (Array.isArray(name) && Array.isArray(value)) {
      for (let i = 0; i < name.length; i++) {
        _.set(form, name[i], value[i]);
      }
    } else {
      _.set(form, name, value);
    }

    setErrors({} as ErrorRecord<T>);
    setTrigger(!trigger);
  };

  const handleSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    if (e !== undefined) {
      (e as FormEvent<HTMLFormElement>).preventDefault();
    }

    if (validations) {
      let valid = true;
      const newErrors: ErrorRecord<T> = {};

      for (const key in validations) {
        const value = form[key];
        const validation = validations[key];

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        const regTest =
          typeof pattern?.value === "string"
            ? RegExp(pattern.value).test(value)
            : pattern?.value?.test(value);

        if (pattern?.value && !regTest) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;

        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({} as ErrorRecord<T>);

    if (onSubmit) {
      onSubmit(e);
    }
  };

  useEffect(() => {
    if (errors && Object.keys(errors).length > 0) {
      dispatch(
        showNotification({
          message: Object.values(errors)[0] as string,
          title: NotificationTitleType.ERROR,
        })
      );
    }
  }, [errors, dispatch]);

  useEffect(() => {
    setTrigger(!trigger);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { form, errors, handleSubmit, updateForm };
};

export default UseFormHook;
