import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from "../redux/reducers/authSlice"

export const useLogin = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const error = useSelector((state) => state.auth.error)

  const login = async (email, password) => {
    dispatch(loginStart());

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const user = await response.json()

    if (!response.ok) {
        const error = await response.json();
        dispatch(loginFailure(error))
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(user))

      // update the auth state
      dispatch(loginSuccess(user))

    }
  }

  return { login, user, error }
}

