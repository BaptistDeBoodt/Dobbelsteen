import { useControls } from "leva";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const HELP = () => {
      const helpPos = useControls("HELP cube", {
        x: { value: 0, min: -50, max: 50, step: 0.1 },
        y: { value: 2, min: -10, max: 20, step: 0.1 },
        z: { value: 5, min: -50, max: 50, step: 0.1 }
      });

      const cubeRef = useRef();
      
          useFrame(() => {
              if (cubeRef.current) {
              cubeRef.current.rotation.y += 0.01;
              cubeRef.current.rotation.x += 0.005;
              }
          });
    return (
        <mesh
            castShadow
            position={[helpPos.x, helpPos.y, helpPos.z]}
            ref={cubeRef}
        >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    );
};

export default HELP;