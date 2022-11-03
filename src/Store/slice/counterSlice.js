import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const intialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "Counter",
  initialState: intialState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
const { increament, decreament, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
