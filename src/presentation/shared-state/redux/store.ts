import { configureStore } from '@reduxjs/toolkit';
import { 
  navigationReducer,  
  userReducer,
  noodleMachineReducer , 
  loadingReducer,
  scanQRReducer
} from './reducers'; 
import { thunk } from 'redux-thunk';
export const store = configureStore({
  reducer: {
    authentication: userReducer,
    navigation: navigationReducer,
    noodleMachine: noodleMachineReducer,
    loading: loadingReducer,
    scanQR: scanQRReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
