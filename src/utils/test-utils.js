import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { setupStore } from "../app/store";
import { baseTheme } from "../styles/theme";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    isThemeRequired = false,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    if (isThemeRequired) {
      return (
        <Provider store={store}>
          <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
        </Provider>
      );
    }

    return <Provider store={store}>{children}</Provider>;
  }
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}