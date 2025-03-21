"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useState, useEffect, useCallback, Suspense, useRef } from "react";
import { cn } from "@/lib/utils";
import { Mouse } from "lucide-react";
import * as THREE from "three";

function Model() {
  const { scene, animations } = useGLTF("/3d/msi_geforce_rtx_3080_gaming_x_trio__now_free.glb");
  const mixer = useRef<THREE.AnimationMixer>(null);

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip: THREE.AnimationClip) => {
        const action = mixer.current!.clipAction(clip);
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.play();
      });
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current.uncacheRoot(scene);
        mixer.current = null;
      }
    };
  }, [animations, scene]);


  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <primitive
      object={scene}
      scale={0.75}
      position={[0, 0, 0]}
      rotation={[0, 0, 2.4]}
    />
  );
}

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [showText, setShowText] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const { offsetHeight } = sectionRef.current;
    setShowText(window.scrollY < offsetHeight - window.innerHeight);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setIsMounted(false);
    };
  }, [handleScroll]);

  if (!isMounted) return null;

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="fixed top-0 left-0 w-full h-screen">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }} gl={{ antialias: true }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <pointLight position={[5, 10, 5]} intensity={2} />
            <directionalLight position={[10, 20, 10]} intensity={3} />

            <Model />

            {/* @ts-expect-error: OrbitControls type mismatch in @react-three/drei */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              dampingFactor={0.05}
              autoRotate={true}
              autoRotateSpeed={0.2}
            />
          </Suspense>
        </Canvas>
      </div>

      <div
        className={cn(
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-300",
          showText ? "opacity-100" : "opacity-0"
        )}
      >
        <h1 className="text-8xl font-bold mb-4 dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] drop-shadow-[0_4px_8px_rgba(255,255,255,0.4)]">
          Build Your PC
        </h1>
        <p className="text-4xl mb-8 dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] drop-shadow-[0_4px_8px_rgba(255,255,255,0.4)]">
          Scroll to Begin Customization
        </p>
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-gray-400 w-12 h-12 rounded-full dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] drop-shadow-[0_4px_8px_rgba(255,255,255,0.4)]">
          <Mouse className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}