"use client";

import { JSX, useEffect } from "react";

import NotificationOrganism from "../../organisms/notification/notification.organism";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux.hooks";
import {
  NotificationState,
  resetNotificationState,
} from "@/shared/redux/features/notification/notification.slice";
import { RootState } from "@/shared/redux/store";

/**
 * A template component that displays a notification message at the top of the screen, if any.
 *
 * This component is a wrapper around the children component, and will automatically
 * display the notification message if the notification state is active.
 *
 * The notification message is automatically cleared after 5 seconds.
 *
 * @param {{ children: React.ReactNode }} props The props object, which should contain the
 * children component to be rendered.
 * @returns {JSX.Element} The NotificationTemplate component.
 */
const NotificationTemplate: React.FC<{
  children: React.ReactNode;
}> = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const dispatch = useAppDispatch();
  const notificationState = useAppSelector(
    (state: RootState) => state.notificationSlice
  );

  useEffect(() => {
    if (notificationState.state === NotificationState.ACTIVE) {
      setTimeout(() => {
        dispatch(resetNotificationState());
      }, 5000);
    }
  }, [notificationState, dispatch]);

  return (
    <>
      <NotificationOrganism />
      {children}
    </>
  );
};

export default NotificationTemplate;
