import { Middleware } from "redux";

/**
 * A Redux middleware that logs every action and the state after the action is dispatched.
 *
 * @param store - The Redux store.
 * @returns A function that takes the next middleware in the chain.
 * The next function returns another function that takes an action.
 *
 * The middleware logs the action being dispatched and the new state
 * of the store after the action has been processed.
 */
const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  const returnValue = next(action);
  console.log("The action: ", action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return returnValue;
};

export default loggerMiddleware;
