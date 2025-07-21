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
    resetNotificationState: (state) => {
      state.message = "";
      state.title = NotificationTitleType.NONE;
      state.state = NotificationState.INACTIVE;
    },
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
