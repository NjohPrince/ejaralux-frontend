"use client";

import React, { useState } from "react";
import Link from "next/link";

import classes from "../auth.module.css";

import InputAtom from "@/shared/components/atoms/input/input.atom";
import { RegisterDataType } from "@/modules/auth/types/auth.types";
import UseFormHook from "@/shared/lib/hooks/use-form.hook";
import { loginValidation } from "@/modules/auth/lib/validations/login.validation";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";
import LockIcon from "@/shared/components/icons/lock.icon";
import MailIcon from "@/shared/components/icons/mail.icon";
import EyeOpenIcon from "@/shared/components/icons/eye-open.icon";
import EyeClosedIcon from "@/shared/components/icons/eye-closed.icon";
import UserIcon from "@/shared/components/icons/user.icon";

const SignUpTemplate = () => {
  const [form, setForm] = useState<RegisterDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [trigger, setTrigger] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { email, password, confirmPassword, firstName, lastName } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    updateForm(e.target.name as keyof RegisterDataType, e.target.value);
  };

  const launchAPI = async () => {
    setLoading(true);
  };

  const { handleSubmit, updateForm } = UseFormHook<RegisterDataType>(
    form,
    trigger,
    setTrigger,
    launchAPI,
    loginValidation
  );

  return (
    <div className={`${classes.auth} w-full flex col gap-32`}>
      <h2>Create an account!</h2>

      <form
        onSubmit={handleSubmit}
        className={`${classes.form} flex col gap-24 w-full`}
      >
        <div className={`${classes.form__fields} flex col gap-16 w-full`}>
          <div className={`${classes.names} flex gap-16 w-full`}>
            <div className={`${classes.fields} flex col gap-4 w-full`}>
              <label htmlFor="firstName">First Name</label>
              <InputAtom
                value={firstName}
                name="firstName"
                id="firstName"
                onChange={onChange}
                iconLeft={<UserIcon size="20" color="var(--dark-color)" />}
                placeholder="John G."
                ariaLabel="First Name"
              />
            </div>

            <div className={`${classes.fields} flex col gap-4 w-full`}>
              <label htmlFor="lastName">Last Name</label>
              <InputAtom
                value={lastName}
                name="lastName"
                id="lastName"
                onChange={onChange}
                iconLeft={<UserIcon size="20" color="var(--dark-color)" />}
                placeholder="Lake"
                ariaLabel="Last Name"
              />
            </div>
          </div>

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
            <label htmlFor="email">Create a Password</label>
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
              normal
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
            label="Create an Account"
            ariaLabel="Create an Account"
            type="submit"
            loading={loading}
            normal={true}
          />
        </div>

        <div className={`${classes.actions} w-full`}>
          <p>
            Already have an account?{" "}
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

export default SignUpTemplate;
