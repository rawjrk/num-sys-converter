import { render, screen } from "@testing-library/react";
import { Options } from "..";

describe("component Options", () => {
  it("renders successfully", () => {
    const options = [
      { title: "Opt. 1", value: 1 },
      { title: "Opt. 2", value: 2 },
      { title: "Opt. 3", value: 3 },
    ];

    render(<Options options={options} />);

    expect(screen.getByText(/Opt. 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Opt. 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Opt. 3/i)).toBeInTheDocument();
  });
});
