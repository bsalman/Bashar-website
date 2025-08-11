import { createAsyncThunk } from "@reduxjs/toolkit";
import { allMyInfosPost } from "../../service/api";

const fetchUser = createAsyncThunk("user/fetch", allMyInfosPost(1));

export { fetchUser };
