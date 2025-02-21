import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

function TestComponent() {
  const title: string = "Hello, Test!";
  return <h1>{title}</h1>;
}

test("renders the test component", () => {
  render(<TestComponent />);
  expect(screen.getByText("Hello, Test!")).toBeInTheDocument();
});

test("should create the component", () => {
  const { container } = render(<TestComponent />);
  expect(container).toBeTruthy();
});

test("should have the correct title", () => {
  render(<TestComponent />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hello, Test!");
});

test("should render title in the DOM", () => {
  render(<TestComponent />);
  const compiled = screen.getByRole("heading", { level: 1 });
  expect(compiled.textContent).toContain("Hello, Test!");
});
