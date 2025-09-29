import { createAsyncThunk } from "@reduxjs/toolkit";
import { allMyInfosPost } from "../../service/api";

const fetchUser = createAsyncThunk("user/fetch", async (thunkAPI) => {
  try {
    const data = await allMyInfosPost(1);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export { fetchUser };
