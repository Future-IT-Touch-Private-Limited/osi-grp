"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rooturl } from "../Rooturl";
import { createSlice } from "@reduxjs/toolkit";

export const getCountry = createAsyncThunk("/countries", async () => {
  const res = await axios.get(`${rooturl}/country`);
  return res.data;
});

const countryslice = createSlice({
  name: "country",
  initialState: { data: [], isLoading: false, isError: false },
  extraReducers: (builder) => {
    builder.addCase(getCountry.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCountry.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default countryslice.reducer;
