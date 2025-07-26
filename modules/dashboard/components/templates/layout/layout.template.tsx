"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import classes from "./layout.module.css";

import ButtonAtom from "@/shared/components/atoms/button/button.atom";
import LogoutIcon from "@/shared/components/icons/logout.icon";
import BurgerIcon from "@/shared/components/icons/burger.icon";
import SidebarOrganism from "../../organisms/sidebar/sidebar.organism";
import { useAppDispatch } from "@/shared/lib/hooks/redux.hooks";
import { logoutThunk } from "@/shared/redux/features/auth/auth.slice";
import {
  NotificationTitleType,
  showNotification,
} from "@/shared/redux/features/notification/notification.slice";
import { BackendError } from "@/shared/lib/utils/extract-error-message.util";

const LayoutTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [sidebarActive, setSidebarActive] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);

    try {
      await dispatch(logoutThunk()).unwrap();

      dispatch(
        showNotification({
          title: NotificationTitleType.SUCCESS,
          message: "Successfully logged out!",
        })
      );

      router.push("/auth/login");
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

  return (
    <div className={`${classes.layout}`}>
      <div
        className={`${classes.sidenav} ${
          !sidebarActive ? classes.close : ""
        } delay`}
      >
        <SidebarOrganism />
      </div>
      <div
        className={`${classes.content} ${
          !sidebarActive ? classes.expand : ""
        } delay`}
      >
        <div className={`${classes.view} flex col gap-32`}>
          <div className={`${classes.nav} flex gap-24 space-between`}>
            <button
              aria-label="sidebar toggler"
              className={`${classes.toggler} flex center`}
              onClick={() => {
                setSidebarActive(!sidebarActive);
              }}
            >
              <BurgerIcon size="32" color="var(--dark-color)" />
            </button>
            <div>
              <ButtonAtom
                loading={loading}
                ariaLabel="logout"
                label="Logout"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
                iconLeft={<LogoutIcon size="20" />}
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutTemplate;
