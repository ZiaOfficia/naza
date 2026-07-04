"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ── Particles ─────────────────────────────────────────────────── */
function ParticleField() {
  const count = 800;
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, []);

  const points = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        color="#60A5FA"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Laptop ─────────────────────────────────────────────────────── */
function Laptop({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* keyboard base */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.8, 0.07, 1.1]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* screen body */}
      <mesh position={[0, 0.56, -0.45]} rotation={[-0.22, 0, 0]}>
        <boxGeometry args={[1.8, 1.1, 0.055]} />
        <meshStandardMaterial color="#0f172a" metalness={0.85} roughness={0.12} />
      </mesh>
      {/* screen display */}
      <mesh position={[0, 0.56, -0.422]} rotation={[-0.22, 0, 0]}>
        <boxGeometry args={[1.64, 0.95, 0.01]} />
        <meshStandardMaterial
          color="#1e3a8a"
          emissive="#2563EB"
          emissiveIntensity={1.2}
          roughness={0.4}
        />
      </mesh>
      {/* trackpad */}
      <mesh position={[0, 0.038, 0.2]}>
        <boxGeometry args={[0.5, 0.005, 0.35]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}

/* ── CPU ────────────────────────────────────────────────────────── */
function CPU({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={[0.75, 0.09, 0.75]} />
        <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.08} />
      </mesh>
      {/* IHS */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[0.6, 0.015, 0.6]} />
        <meshStandardMaterial
          color="#94a3b8"
          metalness={1}
          roughness={0.05}
          emissive="#60A5FA"
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* corner dots */}
      {[[-0.28, -0.28], [0.28, -0.28], [-0.28, 0.28], [0.28, 0.28]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.05, z]}>
          <cylinderGeometry args={[0.018, 0.018, 0.03, 8]} />
          <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

/* ── SSD ────────────────────────────────────────────────────────── */
function SSD({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={[1.05, 0.055, 0.55]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.12} />
      </mesh>
      {/* label area */}
      <mesh position={[0, 0.03, 0]}>
        <boxGeometry args={[0.88, 0.01, 0.4]} />
        <meshStandardMaterial
          color="#1e3a8a"
          emissive="#2563EB"
          emissiveIntensity={0.6}
          roughness={0.5}
        />
      </mesh>
      {/* connector */}
      <mesh position={[0.45, 0, 0]}>
        <boxGeometry args={[0.14, 0.04, 0.35]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

/* ── GPU ────────────────────────────────────────────────────────── */
function GPU({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* PCB */}
      <mesh castShadow>
        <boxGeometry args={[1.9, 0.28, 0.09]} />
        <meshStandardMaterial color="#0f172a" metalness={0.85} roughness={0.15} />
      </mesh>
      {/* heatsink */}
      <mesh position={[0.05, 0.15, 0]}>
        <boxGeometry args={[1.55, 0.15, 0.16]} />
        <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.08} />
      </mesh>
      {/* fans */}
      {[-0.4, 0.45].map((x, i) => (
        <mesh key={i} position={[x, 0.15, 0.09]}>
          <cylinderGeometry args={[0.15, 0.15, 0.04, 20]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#2563EB"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
      {/* power connectors */}
      <mesh position={[0.7, 0.08, -0.07]}>
        <boxGeometry args={[0.22, 0.12, 0.06]} />
        <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

/* ── Keyboard ───────────────────────────────────────────────────── */
function Keyboard({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={[1.55, 0.055, 0.52]} />
        <meshStandardMaterial color="#0f172a" metalness={0.85} roughness={0.2} />
      </mesh>
      {/* key rows */}
      {[-0.14, -0.01, 0.12].map((z, ri) =>
        Array.from({ length: 12 }, (_, ci) => (
          <mesh key={`${ri}-${ci}`} position={[-0.63 + ci * 0.115, 0.032, z]}>
            <boxGeometry args={[0.09, 0.01, 0.085]} />
            <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
          </mesh>
        ))
      )}
    </group>
  );
}

/* ── Floor Grid ─────────────────────────────────────────────────── */
function FloorGrid() {
  const grid = useMemo(
    () => new THREE.GridHelper(30, 30, "#0f3460", "#0c2340"),
    []
  );
  return <primitive object={grid} position={[0, -2.4, 0]} />;
}

/* ── Camera Parallax ─────────────────────────────────────────────── */
function CameraRig() {
  const { camera } = useThree();
  useFrame((state) => {
    const { mouse } = state;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.8, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.5 + 1.5, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ── Scene ───────────────────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <fog attach="fog" args={["#030B1A", 8, 28]} />
      <ambientLight intensity={0.25} color="#1e40af" />
      <pointLight position={[8, 6, 4]} intensity={4} color="#2563EB" />
      <pointLight position={[-6, 4, -3]} intensity={2.5} color="#60A5FA" />
      <pointLight position={[0, 2, 8]} intensity={1.5} color="#93c5fd" />
      <pointLight position={[3, -1, 2]} intensity={1} color="#facc15" />

      <ParticleField />
      <FloorGrid />
      <CameraRig />

      <Float speed={0.8} rotationIntensity={0.25} floatIntensity={0.5}>
        <Laptop position={[0, 0, 0]} />
      </Float>

      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.65}>
        <GPU position={[2.4, -0.1, -0.4]} />
      </Float>

      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.55}>
        <CPU position={[-1.9, 0.3, 0]} />
      </Float>

      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.7}>
        <SSD position={[1.8, 0.8, 0.2]} />
      </Float>

      <Float speed={0.9} rotationIntensity={0.35} floatIntensity={0.45}>
        <Keyboard position={[-1.6, -0.8, 0.4]} />
      </Float>

      <Sparkles
        count={60}
        scale={6}
        size={1.2}
        speed={0.25}
        color="#60A5FA"
        opacity={0.7}
      />
      <Sparkles
        count={30}
        scale={4}
        size={0.8}
        speed={0.15}
        color="#facc15"
        opacity={0.3}
      />
    </>
  );
}

/* ── Export ──────────────────────────────────────────────────────── */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5.5], fov: 50 }}
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
