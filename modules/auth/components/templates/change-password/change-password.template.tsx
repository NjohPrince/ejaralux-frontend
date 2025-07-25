"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { JSX } from "react";

import classes from "../auth.module.css";

import InputAtom from "@/shared/components/atoms/input/input.atom";
import { ResetPasswordDataType } from "@/modules/auth/types/auth.types";
import UseFormHook from "@/shared/lib/hooks/use-form.hook";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";
import LockIcon from "@/shared/components/icons/lock.icon";
import EyeOpenIcon from "@/shared/components/icons/eye-open.icon";
import EyeClosedIcon from "@/shared/components/icons/eye-closed.icon";
import { changePasswordValidation } from "@/modules/auth/lib/validations/change-password.validation";
import { resetPasswordThunk } from "@/shared/redux/features/auth/auth.slice";
import {
  NotificationTitleType,
  showNotification,
} from "@/shared/redux/features/notification/notification.slice";
import { useAppDispatch } from "@/shared/lib/hooks/redux.hooks";
import { BackendError } from "@/shared/lib/utils/extract-error-message.util";

/**
 * ChangePasswordTemplate
 *
 * This component is a template for the change password form of the application.
 *
 * It will render a form with the following fields:
 *   - New Password
 *   - Confirm Password
 *
 * The component also handle the form submission and the password visibility
 *
 * @returns {JSX.Element} The rendered component
 */
const ChangePasswordTemplate = (): JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<ResetPasswordDataType>({
    password: "",
    confirmPassword: "",
  });

  const token = searchParams.get("token") || "";

  const [trigger, setTrigger] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { password, confirmPassword } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    updateForm(e.target.name as keyof ResetPasswordDataType, e.target.value);
  };

  const launchAPI = async () => {
    setLoading(true);

    try {
      await dispatch(
        resetPasswordThunk({ ...form, passwordConfirm: confirmPassword, token })
      ).unwrap();

      dispatch(
        showNotification({
          title: NotificationTitleType.SUCCESS,
          message: "Password changed successfully! Redirecting...",
        })
      );

      setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
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

  const { handleSubmit, updateForm } = UseFormHook<ResetPasswordDataType>(
    form,
    trigger,
    setTrigger,
    launchAPI,
    changePasswordValidation
  );

  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    }
  }, [token, router]);

  return (
    <div className={`${classes.auth} w-full flex col gap-32`}>
      <h2>Reset your password</h2>

      <form
        onSubmit={handleSubmit}
        className={`${classes.form} flex col gap-24 w-full`}
      >
        <div className={`${classes.form__fields} flex col gap-16 w-full`}>
          <div className={`${classes.fields} flex col gap-4 w-full`}>
            <label htmlFor="email">Create a New Password</label>
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
          </div>

          <div className={`${classes.fields} flex col gap-4 w-full`}>
            <label htmlFor="email">Confirm Password</label>
            <InputAtom
              value={confirmPassword}
              name="confirmPassword"
              id="confirmPassword"
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
          </div>

          <ButtonAtom
            label="Reset my Password"
            ariaLabel="Reset my Password"
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

export default ChangePasswordTemplate;
