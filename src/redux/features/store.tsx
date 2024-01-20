import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },

    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
