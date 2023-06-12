import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { ThemeToogler } from "../features/theme";

describe("component ThemeToogler", () => {
  it("should render successfully", () => {
    renderWithProviders(<ThemeToogler />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
