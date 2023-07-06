import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginSuccess, logOut } from '../../redux/reducers/authSlice';

const baseQuery= fetchBaseQuery({
    baseUrl: 'https://muiaa-backend-api.onrender.com/api/v1/auth',
    credentials: 'include',
    prepareHeaders: (headers, {getState})=>{
        const token = getState().auth.token;
        if (token){
            headers.set('authorization', `Bearer ${token}`)
        }
        else return headers
    }

})

//refresh tokens

const refreshWrapper = async (args, api , extraOptions) => {
   let response = await baseQuery(args, api , extraOptions)
   if (response?.error?.originalStatus=== 403){
   console.log ('Refresh token loading...')
   const newResponse = await baseQuery('/login', api, extraOptions)
   console.log('for now we will route you back to the /login route refresh token not implemented yet')
   if (newResponse?.data){
    api.dspatch(login(newResponse.user, newResponse.token))
    let response = await baseQuery(args, api , extraOptions)

   }
   else api.dispatch(logOut())
   }
   return response;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: (builder)=> ({}) })
    