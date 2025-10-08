import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type AuthState } from "@/types/types";

const initialState: AuthState = {
  username: "",
  token_user: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.username = action.payload.username;
      state.token_user = action.payload.token_user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = "";
      state.token_user = "";
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
