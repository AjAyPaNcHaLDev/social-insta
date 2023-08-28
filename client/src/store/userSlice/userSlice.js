import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../app/Config";
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
    name = state.name,
    username = state.username,
    _id = state._id,
    email = state.email,
    token = null,
    profile_picture = state.profile_picture,
  } = action.payload;
  state.user = {
    name,
    username,
    _id,
    email,
    profile_picture,
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
      .addCase(registerUser.fulfilled, fulfilled)
      .addCase(uploadProfilePicture.pending, pending)
      .addCase(uploadProfilePicture.rejected, rejected)
      .addCase(uploadProfilePicture.fulfilled, profilePictureFulfiled);
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
export const uploadProfilePicture = createAsyncThunk(
  "user/pic",
  async (img, thunk) => {
    try {
      const form = new FormData();
      form.set("profile_picture", img);
      const { data } = await axios.post(`${URL}/user/pic`, form, {
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

export default userSlice.reducer;

const profilePictureFulfiled = (state, action) => {
  state.user.profile_picture = action.payload.profile_picture;
};
