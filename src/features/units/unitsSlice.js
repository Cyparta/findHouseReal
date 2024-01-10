import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  data: [],
  filter: {
    page: "",
    room_number: "",
    bath_count: "",
    ordering: "",
    search: "",
  },
};

export const GETUnits = createAsyncThunk("GETUnits", async (data, ThunkApi) => {
  const filter = ThunkApi.getState().units.filter;
  let params = {};

  if (filter.page !== "") {
    params.page = filter.page;
  }

  if (filter.search !== "") {
    params.search = filter.search;
  }

  if (filter.room_number !== "") {
    params.room_number = filter.room_number;
  }

  if (filter.bath_count !== "") {
    params.bath_count = filter.bath_count;
  }

  if (filter.ordering !== "") {
    params.ordering = filter.ordering;
  }

  try {
    const response = await axios.get(
      `https://dolphin-app-u2qj5.ondigitalocean.app/en/aqar/api/router/website-units/`,
      { params: params }
    );
    return response.data;
  } catch (error) {
    return ThunkApi.rejectWithValue(error.message);
  }
});

export const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    updateFilter: (state, { payload }) => {
      state.filter[payload.name] = payload.val;
    },
    clearAll: (state) => {
      state.filter = {
        page: "",
        room_number: "",
        bath_count: "",
        ordering: "",
        search: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GETUnits.pending, (state) => {
        state.loading = true;
      })
      .addCase(GETUnits.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(GETUnits.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { updateFilter, clearAll } = unitsSlice.actions;

export default unitsSlice.reducer;
