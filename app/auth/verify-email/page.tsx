"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  NotificationTitleType,
  showNotification,
} from "@/shared/redux/features/notification/notification.slice";
import { verifyEmailThunk } from "@/shared/redux/features/auth/auth.slice";
import { BackendError } from "@/shared/lib/utils/extract-error-message.util";
import { useAppDispatch } from "@/shared/lib/hooks/redux.hooks";

const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const verificationCode = searchParams.get("verificationCode") || "";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!verificationCode) {
      setError("Invalid or missing verification code.");
      return;
    }

    const verify = async () => {
      setLoading(true);

      try {
        await dispatch(verifyEmailThunk(verificationCode)).unwrap();

        setSuccess(true);

        dispatch(
          showNotification({
            title: NotificationTitleType.SUCCESS,
            message: "Email verified successfully!",
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

    verify();
  }, [verificationCode, dispatch, router]);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        padding: 20,
        textAlign: "center",
      }}
    >
      {loading && <p style={{ fontSize: "2rem" }}>Verifying your email...</p>}
      {error && (
        <p style={{ color: "var(--error-color)", fontSize: "2rem" }}>{error}</p>
      )}
      {success && (
        <p style={{ color: "var(--success-color)", fontSize: "2rem" }}>
          Email verified! Redirecting to login...
        </p>
      )}
    </div>
  );
};

export default VerifyEmailPage;
