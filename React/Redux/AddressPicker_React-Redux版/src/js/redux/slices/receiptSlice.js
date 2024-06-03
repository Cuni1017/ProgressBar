import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  receiptType: "", //發票類型: 二聯or三聯
  taxId: "", //統一編號
  receiptOptions: [], //byMail, promptRegistered
};

const receiptSlice = createSlice({
  name: "receiptType",
  initialState: initialState,
  reducers: {
    setReceipt(state, action) {
      //   console.log(state);
      //   console.log(action);
      const { receiptType, taxId, receiptOptions } = action.payload;
      state.receiptType = receiptType;
      state.taxId = taxId;
      state.receiptOptions = receiptOptions;
    },
    // setReceiptType(state, action) {
    //   console.log(state);
    //   console.log(action);
    // },
    // setTaxId(state, action) {
    //   console.log(state);
    //   console.log(action);
    // },
    // setReceiptOptions(state, action) {
    //   console.log(state);
    //   console.log(action);
    // },
  },
});

export const { setReceipt, setReceiptType, setTaxId, setReceiptOptions } =
  receiptSlice.actions;

export default receiptSlice.reducer;
