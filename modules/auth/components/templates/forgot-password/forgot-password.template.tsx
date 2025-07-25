"use client";

import React, { useState } from "react";
import Link from "next/link";
import { JSX } from "react";

import classes from "../auth.module.css";

import InputAtom from "@/shared/components/atoms/input/input.atom";
import { ForgotPasswordDataType } from "@/modules/auth/types/auth.types";
import UseFormHook from "@/shared/lib/hooks/use-form.hook";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";
import MailIcon from "@/shared/components/icons/mail.icon";
import { useAppDispatch } from "@/shared/lib/hooks/redux.hooks";
import { forgotPasswordThunk } from "@/shared/redux/features/auth/auth.slice";
import {
  NotificationTitleType,
  showNotification,
} from "@/shared/redux/features/notification/notification.slice";
import { BackendError } from "@/shared/lib/utils/extract-error-message.util";
import { forgotPasswordValidation } from "@/modules/auth/lib/validations/forgot-password.validation";

/**
 * The Forgot Password template component.
 *
 * This component renders a form to request a password reset.
 *
 * @returns {JSX.Element} The rendered component.
 */
const ForgotPasswordTemplate = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<ForgotPasswordDataType>({
    email: "",
  });

  const [trigger, setTrigger] = useState(false);

  const [loading, setLoading] = useState(false);

  const { email } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    updateForm(e.target.name as keyof ForgotPasswordDataType, e.target.value);
  };

  const launchAPI = async () => {
    setLoading(true);

    try {
      await dispatch(forgotPasswordThunk(form)).unwrap();

      dispatch(
        showNotification({
          title: NotificationTitleType.SUCCESS,
          message: "Almost there! Reset link sent to email",
        })
      );
    } catch (err: BackendError | unknown) {
      dispatch(
        showNotification({
          title: NotificationTitleType.ERROR,
          message: (err as BackendError).message || "Something went wrong...",
        })
      );
    } finally {
      setLoading(false);
    }
  };

  const { handleSubmit, updateForm } = UseFormHook<ForgotPasswordDataType>(
    form,
    trigger,
    setTrigger,
    launchAPI,
    forgotPasswordValidation
  );

  return (
    <div className={`${classes.auth} w-full flex col gap-32`}>
      <h2>Forgot Password</h2>

      <form
        onSubmit={handleSubmit}
        className={`${classes.form} flex col gap-24 w-full`}
      >
        <div className={`${classes.form__fields} flex col gap-16 w-full`}>
          <div className={`${classes.fields} flex col gap-4 w-full`}>
            <label htmlFor="email">E-Mail Address</label>
            <InputAtom
              value={email}
              name="email"
              id="email"
              onChange={onChange}
              iconLeft={<MailIcon size="20" color="var(--dark-color)" />}
              placeholder="example@ejaralux.com"
              ariaLabel="Email address"
            />
          </div>

          <ButtonAtom
            label="Request Password Reset"
            ariaLabel="Request Password Reset"
            type="submit"
            loading={loading}
            normal={true}
          />
        </div>

        <div className={`${classes.actions} w-full`}>
          <p>
            Remember your password?{" "}
            <Link
              href={"/auth/login"}
              style={{ color: "var(--dark-color)", fontWeight: "600" }}
              aria-label="Login"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordTemplate;
