import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { Converter } from "../features/converter";

describe("component Converter", () => {
  it("all labels in place", () => {
    renderWithProviders(<Converter />);

    expect(screen.getByText(/Number/i)).toBeInTheDocument();
    expect(screen.getByText(/From/i)).toBeInTheDocument();
    expect(screen.getByText(/To/i)).toBeInTheDocument();
    expect(screen.getByText(/Result/i)).toBeInTheDocument();
  });

  it("displays correct result", () => {
    renderWithProviders(<Converter />, {
      preloadedState: {
        converter: { number: "13", fromBase: 10, toBase: 2 },
      },
    });

    expect(screen.getByDisplayValue("1101")).toBeInTheDocument();
  });
});
