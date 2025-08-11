import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUser";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    userInfo: [],

    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      console.log(action);
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export const usersReducer = usersSlice.reducer;
