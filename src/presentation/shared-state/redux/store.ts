import { configureStore } from '@reduxjs/toolkit';
import { navigationReducer,  userReducer,noodleMachineReducer , loadingReducer} from './reducers'; // Đảm bảo bạn import đúng slice
import { thunk } from 'redux-thunk';
export const store = configureStore({
  reducer: {
    authentication: userReducer,
    navigation: navigationReducer,
    noodleMachine: noodleMachineReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
