import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  numberroom: 0,
  price: "",
  sort: "",
};

export const datatofilterSlice = createSlice({
  name: "datetofilter",
  initialState,
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addNumberroom: (state, action) => {
      state.numberroom = action.payload;
    },
    addprice: (state, action) => {
      state.price = action.payload;
    },
    addsort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { addName, addNumberroom, addprice, addsort } =
  datatofilterSlice.actions;
export default datatofilterSlice.reducer;
