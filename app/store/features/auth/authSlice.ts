// features/auth/authSlice.ts
import { createSlice, type PayloadAction,  } from '@reduxjs/toolkit'

interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
} 

interface AuthState {
  user: UserDetails | null
  token: string | null
  refresh: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  token: null,
  refresh: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: any; token: string, refresh: string }>) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.refresh = action.payload.refresh
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.refresh = null
      state.isAuthenticated = false
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
