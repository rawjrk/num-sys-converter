import { screen } from "@testing-library/react";
import App from "../App";

test("should render github link", () => {
  renderWithProviders(<App />);

  expect(screen.getByText(/rawjrk/i)).toBeInTheDocument();
  expect(screen.getByText(/github/i)).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = snapshotWithProviders(<App />);
  expect(tree).toMatchSnapshot();
});
