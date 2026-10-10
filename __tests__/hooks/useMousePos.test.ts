import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useMousePos } from "@/hooks/useMousePos";

describe("useMousePos", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns initial mouse position as {x: 0, y: 0}", () => {
    const { result } = renderHook(() => useMousePos());
    expect(result.current).toEqual({ x: 0, y: 0 });
  });

  it("updates mouse position on mousemove", () => {
    const { result } = renderHook(() => useMousePos());
    
    act(() => {
      const event = new MouseEvent("mousemove", {
        clientX: 100,
        clientY: 200,
      });
      window.dispatchEvent(event);
    });

    expect(result.current).toEqual({ x: 100, y: 200 });
  });
});
