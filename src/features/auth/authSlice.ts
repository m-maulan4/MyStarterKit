import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type AuthState } from "@/types/types";

const initialState: AuthState = {
  username: "",
  access_token: "",
  isAuthenticated: false,
  // role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.username = action.payload.username;
      // state.role = action.payload.role;
      state.access_token = action.payload.access_token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = "";
      // state.role = "";
      state.access_token = "";
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
