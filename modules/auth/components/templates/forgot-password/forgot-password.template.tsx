"use client";

import React, { useState } from "react";
import Link from "next/link";

import classes from "../auth.module.css";

import InputAtom from "@/shared/components/atoms/input/input.atom";
import { ForgotPasswordDataType } from "@/modules/auth/types/auth.types";
import UseFormHook from "@/shared/lib/hooks/use-form.hook";
import { loginValidation } from "@/modules/auth/lib/validations/login.validation";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";
import MailIcon from "@/shared/components/icons/mail.icon";

const ForgotPasswordTemplate = () => {
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
  };

  const { handleSubmit, updateForm } = UseFormHook<ForgotPasswordDataType>(
    form,
    trigger,
    setTrigger,
    launchAPI,
    loginValidation
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
