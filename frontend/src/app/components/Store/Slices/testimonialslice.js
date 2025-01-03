"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rooturl } from "../Rooturl";
import { createSlice } from "@reduxjs/toolkit";

export const gettestimonial = createAsyncThunk("/testimonial", async () => {
  const res = await axios.get(`${rooturl}/testimonial`);

  return res.data;
});

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: { data: [], isLoading: false, isError: false },
  extraReducers: (builder) => {
    builder.addCase(gettestimonial.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(gettestimonial.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(gettestimonial.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default testimonialSlice.reducer;
