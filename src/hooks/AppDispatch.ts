import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";

// Untuk dispatch dengan tipe AppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Untuk selector dengan tipe RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
