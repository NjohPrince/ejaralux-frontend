"use client";

import React, { JSX } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store";

/**
 * A component that wraps its children with the Redux Provider,
 * allowing them to access the Redux store.
 *
 * @param {{ children: React.ReactNode }} props - The props object containing
 * the React children components to be wrapped.
 * @returns {JSX.Element} The Provider component that wraps the children.
 */
export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
