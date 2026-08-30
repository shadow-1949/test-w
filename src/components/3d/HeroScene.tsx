"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, RoundedBox } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

function usePageScroll() {
  const progress = useRef(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? window.scrollY / max : 0;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return progress;
}

function CodeScreen() {
  return (
    <Html transform position={[0, 0.8, 0.08]} distanceFactor={3.15} occlude>
      <div className="h-[170px] w-[285px] overflow-hidden rounded-[10px] border border-blue-400/30 bg-[#090d20] p-3 font-mono text-[9px] leading-[1.55] text-slate-300 shadow-[0_0_35px_rgba(77,104,255,0.28)]">
        <div className="mb-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" /><span className="ml-auto text-[8px] text-slate-600">project.tsx</span></div>
        <div className="space-y-0.5 whitespace-nowrap">
          <div><span className="text-[#c792ea]">import</span> <span className="text-[#89ddff]">&#123;</span> build <span className="text-[#89ddff]">&#125;</span> <span className="text-[#c792ea]">from</span> <span className="text-[#c3e88d]">&apos;@nextgen/core&apos;</span>;</div>
          <div><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">future</span> = <span className="text-[#c792ea]">await</span> <span className="text-[#82aaff]">build</span><span className="text-[#89ddff]">(</span><span className="text-[#c3e88d]">&quot;your-idea&quot;</span><span className="text-[#89ddff]">)</span>;</div>
          <div className="pl-3 text-[#676e95]">// learn by building</div>
          <div><span className="text-[#c792ea]">export default</span> <span className="text-[#82aaff]">function</span> <span className="text-[#ffcb6b]">Innovation</span><span className="text-[#89ddff]">()</span> <span className="text-[#89ddff]">&#123;</span></div>
          <div className="pl-3"><span className="text-[#c792ea]">return</span> <span className="text-[#89ddff]">&#123;</span></div>
          <div className="pl-6 text-[#c3e88d]">&quot;projects&quot;: 100,</div>
          <div className="pl-6 text-[#c3e88d]">&quot;students&quot;: &quot;growing&quot;</div>
          <div className="pl-3"><span className="text-[#89ddff]">&#125;</span>;</div><div><span className="text-[#89ddff]">&#125;</span></div>
        </div>
      </div>
    </Html>
  );
}

function Laptop() {
  const group = useRef<THREE.Group>(null);
  const scroll = usePageScroll();
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, -0.32 + scroll.current * 0.9, 4, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -0.18 + scroll.current * 0.18, 4, delta);
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, scroll.current * -0.55, 4, delta);
  });
  return (
    <group ref={group}>
      <RoundedBox args={[3.25, 2, 0.12]} radius={0.08} smoothness={5} position={[0, 0.82, 0]}><meshPhysicalMaterial color="#151a3b" metalness={0.72} roughness={0.2} clearcoat={1} emissive="#101747" emissiveIntensity={0.45} /></RoundedBox>
      <mesh position={[0, 0.82, 0.07]}><planeGeometry args={[3.02, 1.78]} /><meshBasicMaterial color="#0b102b" /></mesh>
      <CodeScreen />
      <RoundedBox args={[3.65, 0.13, 2.25]} radius={0.07} smoothness={5} position={[0, -0.34, 0.05]} rotation={[-0.12, 0, 0]}><meshPhysicalMaterial color="#252b54" metalness={0.8} roughness={0.19} clearcoat={1} /></RoundedBox>
      <mesh position={[0, -0.255, 0.15]} rotation={[-0.12, 0, 0]}><planeGeometry args={[1.05, 0.52]} /><meshBasicMaterial color="#151a3b" transparent opacity={0.75} /></mesh>
      <mesh position={[0, -0.29, 1.12]} rotation={[-0.12, 0, 0]}><boxGeometry args={[2.3, 0.025, 0.025]} /><meshBasicMaterial color="#778cff" /></mesh>
    </group>
  );
}

function OrbitPlatform() {
  const ring = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ring.current) ring.current.rotation.z += delta * 0.12; });
  return <group ref={ring} position={[0, -1.35, 0]}>
    <mesh><cylinderGeometry args={[2.25, 2.7, 0.18, 96]} /><meshPhysicalMaterial color="#101533" metalness={0.8} roughness={0.2} emissive="#20286b" emissiveIntensity={0.4} /></mesh>
    <mesh position={[0, 0.1, 0]}><torusGeometry args={[2.35, 0.035, 12, 96]} /><meshBasicMaterial color="#6958ff" toneMapped={false} /></mesh>
    <mesh position={[0, 0.12, 0]}><torusGeometry args={[2.03, 0.018, 12, 96]} /><meshBasicMaterial color="#27c7ff" toneMapped={false} /></mesh>
  </group>;
}

function Badge({ children, position, color }: { children: string; position: [number, number, number]; color: string }) {
  return <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.45}><Html position={position} center distanceFactor={5}><div style={{ borderColor: `${color}88`, boxShadow: `0 0 24px ${color}55`, color }} className="flex h-12 w-12 items-center justify-center rounded-xl border bg-[#111638]/90 font-mono text-xl font-bold backdrop-blur-md">{children}</div></Html></Float>;
}

function Scene() {
  const scroll = usePageScroll();
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (group.current) group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, scroll.current * 0.35, 3, delta); });
  return <group ref={group}><Laptop /><OrbitPlatform /><Badge position={[-2.25, 1.7, -0.5]} color="#777cff">&lt;/&gt;</Badge><Badge position={[2.25, 1.15, -0.4]} color="#d6b4ff">&#123;...&#125;</Badge><Badge position={[2.55, -0.55, 0.3]} color="#ffd35a">JS</Badge><Badge position={[-2.4, -0.5, 0.3]} color="#43c9ff">TS</Badge></group>;
}

export function HeroScene() {
  return <Canvas camera={{ position: [0, 0.1, 6.5], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }} className="!h-full !w-full"><Suspense fallback={null}><ambientLight intensity={0.6} color="#6571ff" /><pointLight position={[3, 3, 4]} intensity={12} distance={9} color="#555dff" /><pointLight position={[-4, -2, 2]} intensity={8} distance={8} color="#21c7ff" /><spotLight position={[0, 5, 3]} angle={0.4} penumbra={1} intensity={14} color="#7c62ff" /><Scene /><Environment preset="night" /></Suspense></Canvas>;
}
