import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Account: {
    username: "",
    password: "",
  },
};

const testSlice = createSlice({
  name: "userAccount",
  initialState: initialState,

  reducers: {
    testLogin(state, action) {
      console.log(state);
    },
    testLogout(state, action) {
      console.log(state);
    },
  },
});

export const { testLogin, testLogout } = testSlice.actions;
export default testSlice.reducer;
