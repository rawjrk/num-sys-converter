import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { setupStore } from "../app/store";
import { baseTheme } from "../styles/theme";

function Providers({ children, store, includeTheme }) {
  return includeTheme ? (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
    </Provider>
  ) : (
    <Provider store={store}>{children}</Provider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.any.isRequired, // eslint-disable-line
  includeTheme: PropTypes.bool,
};

Providers.defaultProps = {
  includeTheme: false,
};

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    includeTheme = false,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Providers store={store} includeTheme={includeTheme}>
        {children}
      </Providers>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function snapshotWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    includeTheme = false,
  } = {}
) {
  return renderer
    .create(
      <Providers store={store} includeTheme={includeTheme}>
        {ui}
      </Providers>
    )
    .toJSON();
}
