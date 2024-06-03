import { configureStore } from "@reduxjs/toolkit";
// createStore好像快被淘汰了

import receiptTypeSlice from "./slices/receiptSlice";
import fullAddressSlice from "./slices/fullAddressSlice";

const store = configureStore({
  reducer: {
    receipt: receiptTypeSlice,
    fullAddress: fullAddressSlice,
  },
});

export default store;
