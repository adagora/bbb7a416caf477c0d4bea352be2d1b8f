import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataDisplay } from "./DataDisplay";

describe("DataDisplay Component", () => {
  const testData = {
    id: 1,
    userId: 1,
    title: "Test Todo",
    completed: false
  };

  it('renders "No data available" when no data is provided', () => {
    const { getByText } = render(<DataDisplay data={null} />);
    expect(getByText("No data available")).toBeInTheDocument();
  });

  it("renders the provided data correctly", () => {
    const { getByText } = render(<DataDisplay data={testData} />);
    expect(getByText("Fetched Data:")).toBeInTheDocument();
  });
});
