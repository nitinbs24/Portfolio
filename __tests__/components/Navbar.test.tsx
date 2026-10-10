import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Navbar } from "@/components/layout/Navbar";

vi.mock("lenis", () => ({
  default: class MockLenis {
    raf() {}
    destroy() {}
    scrollTo() {}
  },
}));

describe("Navbar", () => {
  it("renders navigation links", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Projects")).toBeInTheDocument();
    expect(getByText("Skills")).toBeInTheDocument();
  });
});
