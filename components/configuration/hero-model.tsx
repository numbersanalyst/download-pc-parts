import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type ModelProps = {
  path: string;
};

function Model({ path }: ModelProps) {
  const { scene, animations } = useGLTF(path);
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

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <primitive object={scene} scale={0.25} position={[-1.5, 1.5, 0]} rotation={[-0.5, 0, 0]} />;
}

function HeroModel() {
  return (
    <Canvas gl={{ antialias: true, toneMapping: THREE.NoToneMapping }} linear>
      <ambientLight intensity={3} />
      <directionalLight position={[0, 10, 5]} intensity={3} />
      <Suspense fallback={null}>
        <Model path="/3d/dream_computer_setup.glb" />
      </Suspense>
      {/* @ts-expect-error: OrbitControls type mismatch in @react-three/drei */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.2}
        enableDamping={true}
      />
    </Canvas>
  );
}

export { HeroModel };

useGLTF.preload("/3d/dream_computer_setup.glb");
