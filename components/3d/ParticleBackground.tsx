"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function StarRotation() {
  const group = useRef<any>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.02;
      group.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <group ref={group}>
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
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
