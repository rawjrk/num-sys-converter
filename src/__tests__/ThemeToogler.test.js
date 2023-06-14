import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders, TestThemeProvider } from "../utils/test-utils";
import { ThemeToogler } from "../features/theme";

beforeEach(() => {
  renderWithProviders(<ThemeToogler />, { isThemeRequired: true });
});

describe("component ThemeToogler", () => {
  it("should render successfully", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render and switch to propper text", () => {
    /* assuming state initialized with "lightTheme" */

    expect(screen.queryByText(/switch to dark theme/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/switch to light theme/i)
    ).not.toBeInTheDocument();

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.queryByText(/switch to light theme/i)).toBeInTheDocument();
    expect(screen.queryByText(/switch to dark theme/i)).not.toBeInTheDocument();
  });
});
