import { createAsyncThunk } from "@reduxjs/toolkit";
import service from "../../service";

export const fetchDishes = createAsyncThunk(
  "restaurant/fetchDishes",
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await service.get("dishes");

      return fulfillWithValue(data);
    } catch (error) {
      console.error(error);

      return rejectWithValue(error);
    }
  }
);
