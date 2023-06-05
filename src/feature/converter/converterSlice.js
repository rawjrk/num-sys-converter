import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: "",
  fromBase: 10,
  toBase: 2,
};

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setFromBase(state, action) {
      state.fromBase = action.payload;
    },
    setToBase(state, action) {
      state.toBase = action.payload;
    },
  },
});

export const { setNumber, setFromBase, setToBase } = converterSlice.actions;
export const selectConverter = (state) => state.converter;

export default converterSlice.reducer;
