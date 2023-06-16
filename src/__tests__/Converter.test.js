import { screen, fireEvent } from "@testing-library/react";
import Converter from "../features/converter/Converter";

const setupOptions = {
  includeTheme: true,
  preloadedState: {
    converter: { number: "13", fromBase: 10, toBase: 2 },
  },
};

const setup = () => {
  const render = renderWithProviders(<Converter />, setupOptions);

  const numberInput = screen.getByLabelText("Number");
  const fromSelect = screen.getByLabelText("From");
  const toSelect = screen.getByLabelText("To");
  const resultBox = screen.getByLabelText("Result");

  return { ...render, numberInput, fromSelect, toSelect, resultBox };
};

test("all labels in place", () => {
  setup();

  expect(screen.getByText(/Number/i)).toBeInTheDocument();
  expect(screen.getByText(/From/i)).toBeInTheDocument();
  expect(screen.getByText(/To/i)).toBeInTheDocument();
  expect(screen.getByText(/Result/i)).toBeInTheDocument();
});

describe("storage state and form inputs", () => {
  test("match initial values", () => {
    const { store, numberInput, fromSelect, toSelect, resultBox } = setup();
    const { converter } = store.getState();

    expect(numberInput).toHaveValue("13");
    expect(converter.number).toBe("13");
    expect(fromSelect).toHaveDisplayValue(/decimal/i);
    expect(converter.fromBase).toBe(10);
    expect(toSelect).toHaveDisplayValue(/binary/i);
    expect(converter.toBase).toBe(2);
    expect(resultBox).toHaveValue("1101");
  });

  test("amend on change", () => {
    const { store, numberInput, fromSelect, toSelect, resultBox } = setup();

    fireEvent.change(numberInput, { target: { value: "57" } });
    fireEvent.change(fromSelect, { target: { value: "8" } });
    fireEvent.change(toSelect, { target: { value: "16" } });

    const { converter } = store.getState();

    expect(numberInput).toHaveValue("57");
    expect(converter.number).toBe("57");
    expect(fromSelect).toHaveDisplayValue(/octal/i);
    expect(converter.fromBase).toBe(8);
    expect(toSelect).toHaveDisplayValue(/hex/i);
    expect(converter.toBase).toBe(16);
    expect(resultBox).toHaveValue("2f");
  });
});

test("matches snapshot", () => {
  const tree = snapshotWithProviders(<Converter />, setupOptions);
  expect(tree).toMatchSnapshot();
});
