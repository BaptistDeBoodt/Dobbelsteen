import { useControls } from "leva";
import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const HELPARROW = () => {
  const { scene } = useLoader(GLTFLoader, '/models/Arrow.glb');
  const model = scene.clone();
  const arrowRef = useRef();

  const helpPos = useControls("HELP arrow", {
    x: { value: 0, min: -50, max: 50, step: 0.1 },
    y: { value: 2, min: -10, max: 20, step: 0.1 },
    z: { value: 0, min: -50, max: 50, step: 0.1 },

    rotX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  });

  return (
    <primitive
      ref={arrowRef}
      object={model}
      position={[helpPos.x, helpPos.y, helpPos.z]}
      rotation={[helpPos.rotX, helpPos.rotY, helpPos.rotZ]}  // <-- added rotation here
      scale={4}
    />
  );
};

export default HELPARROW;
