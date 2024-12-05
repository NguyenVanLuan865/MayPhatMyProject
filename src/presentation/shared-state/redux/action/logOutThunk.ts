import { Dispatch } from 'redux';
import { logout } from '../reducers/userSlice'; 
import { setScreen } from '../reducers/navigationSlice'; 

export const logOut = () => async (dispatch: Dispatch) => {
  try {
    dispatch(logout());
    dispatch(setScreen('login'));
  } catch (error) {
    console.error('Logout error:', error);
  }
};
