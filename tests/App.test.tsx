import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

function TestComponent() {
  return <h1>Hello, Test!</h1>;
}

test("renders the test component", () => {
  render(<TestComponent />);
  expect(screen.getByText("Hello, Test!")).toBeInTheDocument();
});
