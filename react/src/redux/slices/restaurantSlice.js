import { createSlice } from "@reduxjs/toolkit";
import { fetchDishes } from "../api/restaurantApi";

const initialState = {
  loadingDishes: false,
  dishes: [],
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDishes.pending, (state) => {
      state.loadingDishes = true;
    });

    builder.addCase(fetchDishes.fulfilled, (state, { payload }) => {
      state.dishes = payload;
      state.loadingDishes = false;
    });

    builder.addCase(fetchDishes.rejected, (state) => {
      state.loadingDishes = false;
    });
  },
});

const restaurantReducer = restaurantSlice.reducer;

export default restaurantReducer;
