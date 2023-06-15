import { screen, fireEvent } from "@testing-library/react";
import {
  renderWithProviders,
  snapshotWithProviders,
} from "../utils/test-utils";
import { ThemeToogler } from "../features/theme";

const setupOptions = {
  includeTheme: true,
  preloadedState: { theme: { name: "lightTheme" } },
};

const setup = () => {
  return renderWithProviders(<ThemeToogler />, setupOptions);
};

describe("component ThemeToogler", () => {
  it("should render successfully", () => {
    renderWithProviders(<ThemeToogler />, setupOptions);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render and switch to propper text", () => {
    const { store } = setup();

    expect(store.getState().theme.name).toBe("lightTheme");
    expect(screen.queryByText(/to dark/i)).toBeInTheDocument();
    expect(screen.queryByText(/to light/i)).not.toBeInTheDocument();

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(store.getState().theme.name).toBe("darkTheme");
    expect(screen.queryByText(/to light/i)).toBeInTheDocument();
    expect(screen.queryByText(/to dark/i)).not.toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = snapshotWithProviders(<ThemeToogler />, setupOptions);
    expect(tree).toMatchSnapshot();
  });
});
