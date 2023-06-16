import { screen, fireEvent } from "@testing-library/react";
import ThemeToogler from "../features/theme/ThemeToogler";

const setupOptions = {
  includeTheme: true,
  preloadedState: { theme: { name: "lightTheme" } },
};

const setup = () => {
  return renderWithProviders(<ThemeToogler />, setupOptions);
};

test("renders successfully", () => {
  renderWithProviders(<ThemeToogler />, setupOptions);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("renders propper text on init", () => {
  const { store } = setup();

  expect(store.getState().theme.name).toBe("lightTheme");
  expect(screen.queryByText(/to dark/i)).toBeInTheDocument();
  expect(screen.queryByText(/to light/i)).not.toBeInTheDocument();
});

test("renders propper text on switch", () => {
  const { store } = setup();

  expect(store.getState().theme.name).toBe("lightTheme");

  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect(store.getState().theme.name).toBe("darkTheme");
  expect(screen.queryByText(/to light/i)).toBeInTheDocument();
  expect(screen.queryByText(/to dark/i)).not.toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = snapshotWithProviders(<ThemeToogler />, setupOptions);
  expect(tree).toMatchSnapshot();
});
