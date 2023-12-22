import { authApi } from "../../app/api/apiSlice";

export const authApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),
    register: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useForgotPasswordMutation, useRegisterMutation } = authApiSlice;
