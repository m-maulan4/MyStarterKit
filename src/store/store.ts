import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";
// --- fungsi bantu untuk localStorage ---
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("auth");
    if (serializedState === null) return undefined;
    return { auth: JSON.parse(serializedState) };
  } catch (e) {
    console.warn("Gagal load state:", e);
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serialized = JSON.stringify(state.auth);
    localStorage.setItem("auth", serialized);
  } catch (e) {
    console.warn("Gagal simpan state:", e);
  }
};

// --- store ---
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Simpan setiap kali state berubah
store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
