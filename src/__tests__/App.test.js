import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  snapshotWithProviders,
} from "../utils/test-utils";
import App from "../App";

describe("component App", () => {
  it("should render github link", () => {
    renderWithProviders(<App />);

    expect(screen.getByText(/rawjrk/i)).toBeInTheDocument();
    expect(screen.getByText(/github/i)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = snapshotWithProviders(<App />);
    expect(tree).toMatchSnapshot();
  });
});
