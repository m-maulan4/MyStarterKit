// src/features/auth/baseQuery.ts
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { setCredentials, logout } from "@/features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000",
  credentials: "include", // penting agar refreshToken di cookie ikut
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as RootState).auth.access_token;
  //   if (token) {
  //     headers.set("authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // kalau token expired (401)
  if (result.error && result.error.status === 401) {
    console.warn("Access token expired, mencoba refresh...");
    // coba refresh token
    const refreshResult = await baseQuery("/auth/newToken", api, extraOptions);

    if (refreshResult.data) {
      const { username, token_user } = refreshResult.data as {
        username: string;
        token_user: string;
      };

      // update state dengan accessToken baru
      api.dispatch(
        setCredentials({
          username,
          token_user,
          isAuthenticated: true,
        })
      );

      // ulangi request sebelumnya dengan token baru
      result = await baseQuery(args, api, extraOptions);
    } else {
      // kalau refresh gagal → logout
      api.dispatch(logout());
    }
  }

  return result;
};
