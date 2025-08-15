import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import projectReducer from "./features/projects/projectSlice";
import { authApi } from "./features/auth/authApi";
import { projectAPI } from "./features/projects/projectAPI";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    [authApi.reducerPath]: authApi.reducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
  },
  middleware: (gDM) => gDM().concat(authApi.middleware, projectAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
