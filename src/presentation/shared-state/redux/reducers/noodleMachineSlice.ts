import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NoodleMachineState {
  numberCupOfNoodles: number;
  history: { userId: string; noodlesTaken: number; timestamp: string }[];
  machineStatus: 'idle' | 'loading' | 'empty' | 'error';
}

const initialState: NoodleMachineState = {
  numberCupOfNoodles: 0,
  history: [],
  machineStatus: 'idle',
};

const noodleMachineSlice = createSlice({
  name: 'noodleMachine',
  initialState,
  reducers: {
    setRemainingNoodles: (state, action: PayloadAction<number>) => {
      state.numberCupOfNoodles = action.payload;
    },
    setMachineStatus: (state, action: PayloadAction<'idle' | 'loading' | 'empty' | 'error'>) => {
      state.machineStatus = action.payload;
    },
    addToHistory: (state, action: PayloadAction<{ userId: string; noodlesTaken: number }>) => {
      const timestamp = new Date().toISOString();
      state.history.push({ ...action.payload, timestamp });
    },
    resetMachine: (state) => {
      state.machineStatus = 'idle';
      state.history = [];
    },
  },
});

export const {
  setRemainingNoodles,
  setMachineStatus,
  addToHistory,
  resetMachine,
} = noodleMachineSlice.actions;

export default noodleMachineSlice.reducer;
