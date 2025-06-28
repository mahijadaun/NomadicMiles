import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      // extra null check
      if (!state) return initialState;
      state.loading = true;
      state.error = null;
    },

    signInSuccess: (state, action) => {
      if (!state) return initialState;
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    signInFailure: (state, action) => {
      if (!state) return initialState;
      state.loading = false;
      state.error = action.payload;
    },

    signOutSuccess: (state) => {
      if (!state) return initialState;
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signOutSuccess } =
  userSlice.actions;

export default userSlice.reducer;
