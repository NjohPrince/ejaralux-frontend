import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum NotificationState {
  ACTIVE,
  INACTIVE,
}

export enum NotificationTitleType {
  ERROR,
  SUCCESS,
  WARNING,
  NONE,
}

type InitialStateType = {
  message: string;
  title: NotificationTitleType;
  state: NotificationState;
};

export const initialState: InitialStateType = {
  title: NotificationTitleType.NONE,
  message: "",
  state: NotificationState.INACTIVE,
};

const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState: initialState,
  reducers: {
    /**
     * Resets the notification state back to its initial state.
     *
     * The message will be cleared, the title will be set to NONE and the state will be set to INACTIVE.
     */
    resetNotificationState: (state) => {
      state.message = "";
      state.title = NotificationTitleType.NONE;
      state.state = NotificationState.INACTIVE;
    },
    
    /**
     * Sets the notification state to active and updates the message and title.
     *
     * When called, this will show a notification with the given message and title.
     *
     * @param message The message to show in the notification.
     * @param title The title type of the notification.
     */
    showNotification: (
      state,
      action: PayloadAction<{ message: string; title: NotificationTitleType }>
    ) => {
      state.state = NotificationState.ACTIVE;
      state.message = action.payload.message;
      state.title = action.payload.title;
    },
  },
});

export const { resetNotificationState, showNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
