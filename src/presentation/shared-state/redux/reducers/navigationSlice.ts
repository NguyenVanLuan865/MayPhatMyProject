import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Screen = 'login' | 'authorized' | 'noodlesEmpty' | 'error';

interface NavigationState {
  currentScreen: Screen;
}

const initialState: NavigationState = {
  currentScreen: 'login', 
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<Screen>) => {
      state.currentScreen = action.payload;
    },
  },
});

export const { setScreen } = navigationSlice.actions;

export default navigationSlice.reducer;
