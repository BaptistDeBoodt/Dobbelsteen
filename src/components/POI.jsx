import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const POI = ({ position, title, description, image, onClick }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      castShadow
      receiveShadow
      onClick={onClick}  // <-- Add this so clicks work
      onPointerEnter={(e) => (document.body.style.cursor = "pointer")}
      onPointerLeave={(e) => (document.body.style.cursor = "default")}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="orange"
        roughness={0.3}
        metalness={0.6}
        envMapIntensity={0.8}
      />
    </mesh>
  );
};

export default POI;
