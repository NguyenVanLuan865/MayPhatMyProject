import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScanQRState {
    userId: string | null;
    status: 'notscanned' | 'scanned';
}

const initialState: ScanQRState = {
    userId: null,
    status: 'notscanned',
};

const scanQRSlice = createSlice({
    name: 'scanQR',
    initialState,
    reducers: {
        setUserID: (state, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
        setScanQRStatus: (state, action: PayloadAction<'notscanned' | 'scanned'>) => {
            state.status = action.payload;
        },
        resetScan: (state) => {
            state.status = 'notscanned';
            state.userId = null;
        },
    },
});

export const { 
    setUserID, 
    setScanQRStatus, 
    resetScan
} = scanQRSlice.actions;
export default scanQRSlice.reducer;
