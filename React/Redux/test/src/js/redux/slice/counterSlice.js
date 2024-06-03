import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialstate,
  reducers: {
    setCounterPlus(state, action) {
      const { num } = action.payload;
      state.count += num;
    },
  },
});

export const { setCounterPlus } = counterSlice.actions;
export default counterSlice.reducer;
