"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ShowcaseGPU() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group} scale={1.4}>
      {/* Main PCB */}
      <mesh castShadow>
        <boxGeometry args={[2.2, 0.35, 0.1]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.12} />
      </mesh>

      {/* Heatsink */}
      <mesh position={[0, 0.18, 0]}>
        <boxGeometry args={[1.8, 0.18, 0.22]} />
        <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.06} />
      </mesh>

      {/* Heatsink fins */}
      {Array.from({ length: 12 }, (_, i) => (
        <mesh key={i} position={[-0.77 + i * 0.14, 0.18, 0]}>
          <boxGeometry args={[0.06, 0.26, 0.28]} />
          <meshStandardMaterial
            color="#334155"
            metalness={0.98}
            roughness={0.04}
            emissive="#2563EB"
            emissiveIntensity={0.08}
          />
        </mesh>
      ))}

      {/* Fans */}
      {[-0.52, 0.52].map((x, i) => (
        <group key={i} position={[x, 0.18, 0.12]}>
          <mesh>
            <cylinderGeometry args={[0.2, 0.2, 0.05, 24]} />
            <meshStandardMaterial
              color="#0f172a"
              emissive="#2563EB"
              emissiveIntensity={0.6}
              metalness={0.8}
              roughness={0.15}
            />
          </mesh>
          {/* blades */}
          {Array.from({ length: 7 }, (_, b) => (
            <mesh
              key={b}
              position={[
                Math.cos((b / 7) * Math.PI * 2) * 0.1,
                0,
                Math.sin((b / 7) * Math.PI * 2) * 0.1,
              ]}
              rotation={[0, (b / 7) * Math.PI * 2, 0]}
            >
              <boxGeometry args={[0.04, 0.035, 0.1]} />
              <meshStandardMaterial color="#1e40af" metalness={0.9} roughness={0.1} />
            </mesh>
          ))}
        </group>
      ))}

      {/* LED strip */}
      <mesh position={[0, -0.1, 0.065]}>
        <boxGeometry args={[1.8, 0.025, 0.01]} />
        <meshStandardMaterial
          color="#60A5FA"
          emissive="#60A5FA"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Power connector */}
      <mesh position={[0.85, 0.1, -0.08]}>
        <boxGeometry args={[0.24, 0.14, 0.07]} />
        <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={0.6} />
      </mesh>

      {/* Display outputs */}
      {[-0.55, -0.3, -0.05, 0.2].map((x, i) => (
        <mesh key={i} position={[x, -0.15, -0.065]}>
          <boxGeometry args={[0.14, 0.08, 0.04]} />
          <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function ParticleRing() {
  const count = 300;
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 2 + (Math.random() - 0.5) * 1.5;
      arr[i * 3] = Math.cos(angle) * r;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 2.5;
      arr[i * 3 + 2] = Math.sin(angle) * r;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, []);

  const pts = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (pts.current) pts.current.rotation.y += delta * 0.08;
  });

  return (
    <points ref={pts} geometry={geometry}>
      <pointsMaterial size={0.028} color="#60A5FA" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={["#030B1A", 6, 20]} />
      <ambientLight intensity={0.2} color="#1e40af" />
      <pointLight position={[5, 5, 5]} intensity={5} color="#2563EB" />
      <pointLight position={[-5, -3, -3]} intensity={3} color="#60A5FA" />
      <pointLight position={[0, 0, 4]} intensity={2} color="#93c5fd" />
      <pointLight position={[2, -2, 0]} intensity={1.5} color="#facc15" />

      <ParticleRing />
      <ShowcaseGPU />

      <Sparkles
        count={80}
        scale={5}
        size={1.5}
        speed={0.3}
        color="#60A5FA"
        opacity={0.6}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI * 0.3}
        maxPolarAngle={Math.PI * 0.7}
        autoRotate={false}
        makeDefault
      />
    </>
  );
}

export default function ShowcaseScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 50 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      style={{ background: "#030B1A" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
