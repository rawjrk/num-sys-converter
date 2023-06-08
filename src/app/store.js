import { configureStore } from "@reduxjs/toolkit";
import { converterReducer } from "../features/converter";
import { themeReducer } from "../features/theme";

export default configureStore({
  reducer: {
    converter: converterReducer,
    theme: themeReducer,
  },
});
