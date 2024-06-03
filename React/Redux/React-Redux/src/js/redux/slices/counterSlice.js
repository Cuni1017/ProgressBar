import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    setCount(state, action) {
      //   console.log(state);
      //   console.log(action);
      const count = action.payload;
      state.count += count;
    },
  },
});

export const { setCount } = counterSlice.actions;
export default counterSlice.reducer;
