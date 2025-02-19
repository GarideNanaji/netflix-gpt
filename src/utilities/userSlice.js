import { createSlice } from "@reduxjs/toolkit";

const initialState = null; // Define the initial state properly

const userSlice = createSlice({
  name: "user",
  initialState, // Use `initialState` instead of `defaultState`
  reducers: {
    addUser: (state, action) => {
      return action.payload; // Updates the state with user data
    },
    removeUser: () => {
      return null; // Clears user data on logout
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
