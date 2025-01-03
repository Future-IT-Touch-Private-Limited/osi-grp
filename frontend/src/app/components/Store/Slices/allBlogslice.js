"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rooturl } from "../Rooturl";
import { createSlice } from "@reduxjs/toolkit";

export const getallBlog = createAsyncThunk("/allblog", async () => {
  const res = await axios.get(`${rooturl}/blog`);
  return res.data;
});

const allBlogslice = createSlice({
  name: "allblog",
  initialState: { data: [], isLoading: false, isError: false },
  extraReducers: (builder) => {
    builder.addCase(getallBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getallBlog.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getallBlog.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default allBlogslice.reducer;
