"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import type { Group } from "three";
import { useMousePos } from "@/hooks/useMousePos";

function StarRotation() {
  const tilt = useRef<Group>(null);
  const spin = useRef<Group>(null);
  // Window-level listener: the canvas wrapper is pointer-events-none, so R3F's own pointer never updates
  const mouse = useMousePos();

  useFrame((_, delta) => {
    if (spin.current) {
      spin.current.rotation.y += delta * 0.02;
      spin.current.rotation.x += delta * 0.01;
    }
    if (tilt.current) {
      const targetX = (mouse.y / window.innerHeight - 0.5) * 0.2;
      const targetY = (mouse.x / window.innerWidth - 0.5) * 0.2;
      const ease = Math.min(1, delta * 2);
      tilt.current.rotation.x += (targetX - tilt.current.rotation.x) * ease;
      tilt.current.rotation.y += (targetY - tilt.current.rotation.y) * ease;
    }
  });

  return (
    <group ref={tilt}>
      <group ref={spin}>
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      </group>
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarRotation />
    </Canvas>
  );
}
