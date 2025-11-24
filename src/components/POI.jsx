import React, { useState, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const POI = ({ position, onClick }) => {
  const { scene } = useLoader(GLTFLoader, '/models/6 sided dice.glb');
  const model = scene.clone();
  const diceRef = useRef();

  useFrame(() => {
    if (diceRef.current) {
      diceRef.current.rotation.y += 0.01;
      diceRef.current.rotation.x += 0.005;
    }
  });

  return (
    <primitive
      ref={diceRef}
      object={model}
      position={position}
      scale={3}
      onClick={onClick}
      onPointerEnter={() => (document.body.style.cursor = "pointer")}
      onPointerLeave={() => (document.body.style.cursor = "default")}
    />
  );
};

export default POI;
