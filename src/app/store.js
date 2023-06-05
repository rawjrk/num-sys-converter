import { configureStore } from "@reduxjs/toolkit";
import { converterReducer } from "../feature/converter";
import { themeReducer } from "../feature/theme";

export default configureStore({
  reducer: {
    converter: converterReducer,
    theme: themeReducer,
  },
});
