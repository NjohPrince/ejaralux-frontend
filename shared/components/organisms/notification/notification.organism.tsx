"use client";

import { JSX } from "react";

import classes from "./notifcation.module.css";

import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux.hooks";
import { RootState } from "@/shared/redux/store";
import {
  NotificationState,
  NotificationTitleType,
  resetNotificationState,
} from "@/shared/redux/features/notification/notification.slice";
import CloseIcon from "../../icons/close.icon";
import ErrorIcon from "../../icons/error.icon";
import WarningIcon from "../../icons/warning.icon";
import CheckIcon from "../../icons/check.icon";

/**
 * A notification component that displays a notification message at the top of
 * the screen, if any. It will automatically clear the notification message after
 * 5 seconds.
 *
 * The notification message is automatically cleared after 5 seconds.
 *
 * @returns {JSX.Element} The NotificationOrganism component.
 */
const NotificationOrganism = (): JSX.Element => {
  const notificationState = useAppSelector(
    (state: RootState) => state.notificationSlice
  );
  const dispatch = useAppDispatch();

  const clearNotification = () => {
    dispatch(resetNotificationState());
  };

  return (
    <div
      className={`${classes.notification} ${
        notificationState.state === NotificationState.ACTIVE
          ? classes.active
          : ""
      }`}
      style={{
        width: "100%",
        display: "flex",
        gap: "10px",
        background:
          notificationState.title === NotificationTitleType.ERROR
            ? "var(--error-color-10)"
            : notificationState.title === NotificationTitleType.WARNING
            ? "var(--warning-color-10)"
            : notificationState.title === NotificationTitleType.NONE
            ? ""
            : "var(--success-color-10)",
        borderLeft:
          notificationState.title === NotificationTitleType.ERROR
            ? "2px solid var(--error-color)"
            : notificationState.title === NotificationTitleType.WARNING
            ? "2px solid var(--warning-color)"
            : notificationState.title === NotificationTitleType.NONE
            ? ""
            : "2px solid var(--success-color)",
      }}
    >
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          clearNotification();
        }}
        tabIndex={0}
        role="button"
        aria-label="close notification"
        className={classes.close}
      >
        <CloseIcon
          color={
            notificationState.title === NotificationTitleType.ERROR
              ? "var(--error-color)"
              : notificationState.title === NotificationTitleType.WARNING
              ? "var(--warning-color)"
              : notificationState.title === NotificationTitleType.NONE
              ? ""
              : "var(--success-color)"
          }
          strokeWidth="2"
          size="18"
        />
      </div>
      <div className={classes.icon}>
        {notificationState.title === NotificationTitleType.ERROR ? (
          <ErrorIcon strokeWidth="2" size={"18"} color="var(--error-color)" />
        ) : notificationState.title === NotificationTitleType.WARNING ? (
          <WarningIcon
            strokeWidth="2"
            size={"18"}
            color="var(--warning-color)"
          />
        ) : notificationState.title === NotificationTitleType.NONE ? null : (
          <CheckIcon strokeWidth="2" size={"18"} color="var(--success-color)" />
        )}
      </div>
      <div>
        <h2
          style={{
            color:
              notificationState.title === NotificationTitleType.ERROR
                ? "var(--error-color)"
                : notificationState.title === NotificationTitleType.WARNING
                ? "var(--warning-color)"
                : notificationState.title === NotificationTitleType.NONE
                ? ""
                : "var(--success-color)",
          }}
        >
          {notificationState.title === NotificationTitleType.ERROR
            ? "Error"
            : notificationState.title === NotificationTitleType.WARNING
            ? "Warning"
            : notificationState.title === NotificationTitleType.NONE
            ? ""
            : "Success"}
        </h2>
        <h3>{notificationState.message}</h3>
      </div>
    </div>
  );
};

export default NotificationOrganism;
