import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../Config";
import axios from "axios";
const initialState = {
  loading: "idle" | "pending" | "succeeded" | "failed",
  isLogined: false,
  user: {},
};

const pending = (state, action) => {
  state.loading = "pending";
};
const rejected = (state, action) => {
  state.isLogined = false;
  state.loading = "failed";
};
const fulfilled = (state, action) => {
  const {
    name = "",
    username = "",
    _id = "",
    email = "",
    token = null,
  } = action.payload;
  state.user = {
    name,
    username,
    _id,
    email,
  };
  state.isLogined = true;
  state.loading = "succeeded";
  if (token) {
    localStorage.setItem("token", token);
  }
};
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, pending)
      .addCase(fetchLogin.rejected, rejected)
      .addCase(fetchLogin.fulfilled, fulfilled)
      .addCase(userLogin.pending, pending)
      .addCase(userLogin.rejected, rejected)
      .addCase(userLogin.fulfilled, fulfilled)
      .addCase(facebookLogin.pending, pending)
      .addCase(facebookLogin.rejected, rejected)
      .addCase(facebookLogin.fulfilled, fulfilled)
      .addCase(registerUser.pending, pending)
      .addCase(registerUser.rejected, rejected)
      .addCase(registerUser.fulfilled, fulfilled);
  },
});
export const fetchLogin = createAsyncThunk("tk/user", async (tk, thunkApi) => {
  try {
    const { data } = await axios.post(
      `${URL}/tk`,
      {},
      {
        headers: {
          authorization: localStorage.getItem("token"),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const { error = null, status = null } = data;
    if (status != null && status != 200) {
      return thunkApi.rejectWithValue(data);
    }
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
export const userLogin = createAsyncThunk(
  "user/login",
  async (form, thunkApi) => {
    try {
      const { data } = await axios.post(`${URL}/auth`, form);
      const { error = null, status = null } = data;
      if (status != null && status != 200) {
        return thunkApi.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const facebookLogin = createAsyncThunk(
  "fb/login",
  async (response, thunkApi) => {
    try {
      const { data } = await axios.post(`${URL}/auth/fb`, response);
      const { error = null, status = null } = data;
      if (status != null && status != 200) {
        return thunkApi.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const registerUser = createAsyncThunk(
  "user/register",
  async (form, thunkApi) => {
    try {
      const { data } = await axios.post(`${URL}/insert/user`, form);
      const { error = null, status = null } = data;
      if (status != null && status != 200) {
        return thunkApi.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export default userSlice.reducer;
