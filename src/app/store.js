import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { converterReducer } from "../features/converter";
import { themeReducer } from "../features/theme";

const rootReducer = combineReducers({
  converter: converterReducer,
  theme: themeReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
