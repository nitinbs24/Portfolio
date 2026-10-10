import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Hero } from "@/components/sections/Hero";

describe("Hero", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the hero name", () => {
    const { getByText } = render(<Hero />);
    expect(getByText("Nitin")).toBeInTheDocument();
  });

  it("renders the typewriter role prefix", () => {
    const { getByText } = render(<Hero />);
    expect(getByText(">")).toBeInTheDocument();
  });
});
