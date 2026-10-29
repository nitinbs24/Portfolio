import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ParticleBackground from "@/components/3d/ParticleBackground";

// Mock R3F and Drei
vi.mock("@react-three/fiber", () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="r3f-canvas">{children}</div>,
  useFrame: () => {},
}));

vi.mock("@react-three/drei", () => ({
  Stars: () => <div data-testid="drei-stars" />,
}));

describe("ParticleBackground", () => {
  it("renders the canvas and stars", () => {
    const { getByTestId } = render(<ParticleBackground />);
    expect(getByTestId("r3f-canvas")).toBeInTheDocument();
    expect(getByTestId("drei-stars")).toBeInTheDocument();
  });
});
