import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { setupStore } from "./app/store";

const root = createRoot(document.getElementById("root"));
const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
