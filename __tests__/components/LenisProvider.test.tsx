import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LenisProvider } from "@/components/LenisProvider";

vi.mock("lenis", () => {
  return {
    default: class MockLenis {
      raf() {}
      destroy() {}
    },
  };
});

describe("LenisProvider", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <LenisProvider>
        <div>Test Child</div>
      </LenisProvider>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });
});
