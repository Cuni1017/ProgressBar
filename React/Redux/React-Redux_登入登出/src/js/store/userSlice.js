import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "",
    age: 0,
    email: "",
    login: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  // reducers裡的function會自帶兩個參數state, action
  reducers: {
    //寫如何去改變state的Function

    setLogin(state, action) {
      console.log(action); //action會接收從外部傳入的參數，e.x. NotLogin裡的dispatch()
      // 設定state
      const { name, age, email } = action.payload; //先解構
      state.profile = { name, age, email, login: true }; //存入
    },
    setLogout(state, action) {
      state.profile = {
        ...initialState.profile,
      };
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
