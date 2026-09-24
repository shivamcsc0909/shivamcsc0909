'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  PerspectiveCamera,
  Stars,
  OrbitControls,
  Float,
  MeshDistortMaterial,
} from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

// 3D Skeletal Wireframe & Core Architecture Model
function SkeletalArchitectModel() {
  const coreRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state, delta) => {
    // Smooth group mouse parallax
    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        mouse.x * 0.35,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        mouse.y * 0.35,
        0.05
      );
    }

    // Inner core fluid distortion & rotation
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.15;
      coreRef.current.rotation.y += delta * 0.25;
    }

    // Outer Skeletal Wireframe Matrix rotation in opposite direction
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.2;
      wireframeRef.current.rotation.y -= delta * 0.3;
      wireframeRef.current.rotation.z += delta * 0.1;
    }

    // Orbital Gyro Rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.4;
      ring1Ref.current.rotation.y += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.3;
      ring2Ref.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Inner Luminous Core */}
      <mesh ref={coreRef} scale={1.1}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#7c5cff"
          speed={2.5}
          distort={0.45}
          emissive="#5b3ecc"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 2. Outer Geometric Skeletal Wireframe Cage */}
      <mesh ref={wireframeRef} scale={1.45}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00b4d8"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* 3. Outer High-Poly Secondary Wireframe Lattice */}
      <mesh scale={1.75}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          color="#c084fc"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* 4. Gyroscopic Orbital Ring 1 */}
      <mesh ref={ring1Ref} scale={2.1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* 5. Gyroscopic Orbital Ring 2 */}
      <mesh ref={ring2Ref} scale={2.35} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[1, 0.012, 16, 100]} />
        <meshStandardMaterial
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={0.7}
        />
      </mesh>
    </group>
  );
}

// Interactive Cosmic Star & Vertex Particle Field
function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    const count = 1200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 12;
    }

    meshRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.02;
      meshRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.035}
        color="#38bdf8"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export function HeroScene() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Canvas
      className="absolute inset-0"
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4.2]} fov={70} />
      <Stars radius={100} depth={50} count={2500} factor={3.5} fade speed={1.5} />

      {/* Atmospheric Studio Lighting */}
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#7c5cff" />
      <directionalLight position={[0, 5, 5]} intensity={0.6} color="#00f0ff" />

      {/* Interactive 3D Skeletal Mesh & Orbit Physics */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <SkeletalArchitectModel />
      </Float>

      <ParticleField />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.6}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}
