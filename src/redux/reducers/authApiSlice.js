import { authApi } from "../../app/api/apiSlice";

export const authApiSlice = authApi.injectEndpoints({
    endpoints: (builder)=> ({
        login: builder.mutation({
            query: (credentials)=> ({
                url:'login',
                method:'POST',
                body: credentials,
            })
        }),
        logout: builder.mutation({
            query: () => ({
              url: '/logout',
              method: 'POST',
            }),
          }),
          forgotPassword: builder.mutation({
            query: (email) => ({
              url: '/forgot-password',
              method: 'POST',
              body: { email },
            }),
          }),
          signUp: builder.mutation({
            query: (credentials) => ({
              url: '/register',
              method: 'POST',
              body: credentials,
            }),
          }),
          resetPassword: builder.mutation({
            query: (credentials) => ({
              url: '/reset-password',
              method: 'POST',
              body: credentials,
            }),
          }),
    })
    
})

export const { useLoginMutation, useLogoutMutation, useForgotPasswordMutation, useSignUpMutation, useResetPasswordMutation } = authApiSlice;
