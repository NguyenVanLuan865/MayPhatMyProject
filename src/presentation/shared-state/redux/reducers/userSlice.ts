import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  userId: string;
  name: string;
  birthday: string;
  gender: string;
  department: string;
  remainingNoodles: number;
  avatar: string;
}

interface AuthenticationState {
  user: User | null;
  isAuthenticating: boolean;
  isAuthorized: boolean;
  error: string | null;
}

const initialState: AuthenticationState = {
  user: null,
  isAuthenticating: true,
  isAuthorized: false,
  error: null,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    startAuthentication: (state) => {
      state.isAuthenticating = true;
      state.error = null;
    },
    authenticationSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticating = false;
      state.isAuthorized = true;
      state.user = action.payload;
    },
    authenticationFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticating = false;
      state.error = action.payload; 
      state.isAuthorized = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthorized = false;
      state.isAuthenticating = true;
      state.error = null;
    },
  },
});

export const {
  startAuthentication,
  authenticationSuccess,
  authenticationFailure,
  logout,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
