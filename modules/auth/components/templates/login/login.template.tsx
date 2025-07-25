"use client";

import React, { useState } from "react";
import Link from "next/link";
import { JSX } from "react";
import { useRouter } from "next/navigation";

import classes from "../auth.module.css";

import InputAtom from "@/shared/components/atoms/input/input.atom";
import { LoginDataType } from "@/modules/auth/types/auth.types";
import UseFormHook from "@/shared/lib/hooks/use-form.hook";
import { loginValidation } from "@/modules/auth/lib/validations/login.validation";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";
import LockIcon from "@/shared/components/icons/lock.icon";
import MailIcon from "@/shared/components/icons/mail.icon";
import EyeOpenIcon from "@/shared/components/icons/eye-open.icon";
import EyeClosedIcon from "@/shared/components/icons/eye-closed.icon";
import { useAppDispatch } from "@/shared/lib/hooks/redux.hooks";
import { loginUser } from "@/shared/redux/features/auth/auth.slice";
import {
  NotificationTitleType,
  showNotification,
} from "@/shared/redux/features/notification/notification.slice";
import { BackendError } from "@/shared/lib/utils/extract-error-message.util";

/**
 * LoginTemplate
 *
 * This component renders the login form for the application.
 * It includes fields for entering email and password, and handles
 * form submission with validation. The password field has an option
 * to toggle visibility. It also provides links for password recovery
 * and account registration.
 *
 * @returns {JSX.Element} The rendered login form component.
 */
const LoginTemplate = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<LoginDataType>({
    email: "",
    password: "",
  });

  const [trigger, setTrigger] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    updateForm(e.target.name as keyof LoginDataType, e.target.value);
  };

  const launchAPI = async () => {
    setLoading(true);

    try {
      await dispatch(loginUser(form)).unwrap();

      dispatch(
        showNotification({
          title: NotificationTitleType.SUCCESS,
          message: "Login successful! Redirecting...",
        })
      );

      router.push("/dashboard");
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

  const { handleSubmit, updateForm } = UseFormHook<LoginDataType>(
    form,
    trigger,
    setTrigger,
    launchAPI,
    loginValidation
  );

  return (
    <div className={`${classes.auth} w-full flex col gap-32`}>
      <h2>Welcome Back!</h2>

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

          <div className={`${classes.fields} flex col gap-4 w-full`}>
            <label htmlFor="email">Your Password</label>
            <InputAtom
              value={password}
              name="password"
              id="password"
              onChange={onChange}
              iconLeft={<LockIcon size="20" color="var(--dark-color)" />}
              iconRight={
                showPassword ? (
                  <EyeOpenIcon size="20" color="var(--dark-color)" />
                ) : (
                  <EyeClosedIcon size="20" color="var(--dark-color)" />
                )
              }
              placeholder="********"
              ariaLabel="Password"
              type={showPassword ? "text" : "password"}
              action={(e) => {
                e?.stopPropagation();
                e?.preventDefault();
                setShowPassword(!showPassword);
              }}
            />

            <div className={`${classes.reference} w-full flex`}>
              <Link href={"/auth/forgot-password"} aria-label="Forgot Password">
                Forgot Password?
              </Link>
            </div>
          </div>

          <ButtonAtom
            label="Sign In"
            ariaLabel="Sign In"
            type="submit"
            loading={loading}
            normal={true}
          />
        </div>

        <div className={`${classes.actions} w-full`}>
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href={"/auth/sign-up"}
              style={{ color: "var(--dark-color)", fontWeight: "600" }}
              aria-label="Sign Up"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginTemplate;
