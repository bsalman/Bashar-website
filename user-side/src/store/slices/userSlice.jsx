import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUser";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: null,
    userInfo: []
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state, _action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export const userReducer = userSlice.reducer;
