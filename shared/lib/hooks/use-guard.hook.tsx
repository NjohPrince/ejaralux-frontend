"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { useAppDispatch } from "./redux.hooks";
import { RootState } from "@/shared/redux/store";
import { loadUser } from "@/shared/redux/features/auth/auth.slice";

export const useAuthGuard = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state?.authSlice?.user);

  useEffect(() => {
    if (!user) {
      dispatch(loadUser())
        .unwrap()
        .catch(() => router.push("/auth/login"));
    }
  }, [dispatch, router, user]);
};
