import { configureStore } from "@reduxjs/toolkit";
import { converterReducer } from "../features/converter";
import { themeReducer } from "../features/appearance";

export default configureStore({
  reducer: {
    converter: converterReducer,
    theme: themeReducer,
  },
});
