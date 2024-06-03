import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "台北市",
  district: "中正區",
  postalCode: "100",
  address: "",
};

const fullAddressSlice = createSlice({
  name: "fullAddress",
  initialState: initialState,
  reducers: {
    setFullAddress(state, action) {
      let fullAddress = action.payload;
      const { city, district, postalCode, address } = fullAddress;
      state.city = city;
      state.district = district;
      state.postalCode = postalCode;
      state.address = address;
    },
  },
});

export const { setFullAddress } = fullAddressSlice.actions;

export default fullAddressSlice.reducer;
