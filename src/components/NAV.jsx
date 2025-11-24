import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const NAV = ({ position, rotation, targetSceneId, setCurrentSceneId }) => {
  const { scene } = useLoader(GLTFLoader, '/models/Arrow.glb');
  const model = scene.clone();
  const arrowRef = useRef();

  model.traverse((child) => {
    if (child.isMesh) {
      if (Array.isArray(child.material)) {
        child.material.forEach(mat => {
          if (mat.color) mat.color.set('red');
        });
      } else {
        if (child.material.color) child.material.color.set('red');
      }
    }
  });

  const handleClick = () => {
    setCurrentSceneId(targetSceneId);
  };

  return (
    <primitive
      ref={arrowRef}
      object={model}
      position={position}
      rotation={rotation}
      scale={4}
      onClick={handleClick}
      onPointerEnter={() => (document.body.style.cursor = 'pointer')}
      onPointerLeave={() => (document.body.style.cursor = 'default')}
    />
  );
};

export default NAV;
