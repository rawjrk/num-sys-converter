import { configureStore } from "@reduxjs/toolkit";
import converterReducer from "../feature/converter/converterSlice";
import themeReducer from "../feature/theme/themeSlice";

export default configureStore({
  reducer: {
    converter: converterReducer,
    theme: themeReducer,
  },
});
