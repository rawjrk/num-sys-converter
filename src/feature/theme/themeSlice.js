import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "darkTheme",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleTheme: (state) => {
      switch (state.name) {
        case "darkTheme":
          state.name = "lightTheme";
          return;
        case "lightTheme":
          state.name = "darkTheme";
          break;
        default:
          state.name = initialState.name;
      }
    },
  },
});

export const { toogleTheme } = themeSlice.actions;
export const themeNameSelector = (state) => state.theme.name;

export default themeSlice.reducer;
