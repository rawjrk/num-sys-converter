import { screen, fireEvent } from "@testing-library/react";
import {
  renderWithProviders,
  snapshotWithProviders,
} from "../utils/test-utils";
import { Converter } from "../features/converter";

const setupOptions = {
  includeTheme: true,
  preloadedState: {
    converter: { number: "13", fromBase: 10, toBase: 2 },
  },
};

const setup = () => {
  const { store } = renderWithProviders(<Converter />, setupOptions);

  const numberInput = screen.getByLabelText("Number");
  const fromSelect = screen.getByLabelText("From");
  const toSelect = screen.getByLabelText("To");
  const resultBox = screen.getByLabelText("Result");

  return { store, numberInput, fromSelect, toSelect, resultBox };
};

describe("component Converter", () => {
  it("should have all labels in place", () => {
    setup();

    expect(screen.getByText(/Number/i)).toBeInTheDocument();
    expect(screen.getByText(/From/i)).toBeInTheDocument();
    expect(screen.getByText(/To/i)).toBeInTheDocument();
    expect(screen.getByText(/Result/i)).toBeInTheDocument();
  });
});

describe("storage state and form inputs", () => {
  it("should match initial values", () => {
    const { numberInput, fromSelect, toSelect, resultBox } = setup();

    expect(numberInput).toHaveValue("13");
    expect(fromSelect).toHaveDisplayValue(/decimal/i);
    expect(toSelect).toHaveDisplayValue(/binary/i);
    expect(resultBox).toHaveValue("1101");
  });

  it("should amend on change", () => {
    const { store, numberInput, fromSelect, toSelect, resultBox } = setup();

    fireEvent.change(numberInput, { target: { value: "57" } });
    fireEvent.change(fromSelect, { target: { value: "8" } });
    fireEvent.change(toSelect, { target: { value: "16" } });

    expect(numberInput).toHaveValue("57");
    expect(fromSelect).toHaveDisplayValue(/octal/i);
    expect(toSelect).toHaveDisplayValue(/hex/i);
    expect(resultBox).toHaveValue("2f");
  });

  it("matches snapshot", () => {
    const tree = snapshotWithProviders(<Converter />, setupOptions);
    expect(tree).toMatchSnapshot();
  });
});
