import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});

setupListeners(store.dispatch);

export { fetchUser } from "./thunks/fetchUser";
