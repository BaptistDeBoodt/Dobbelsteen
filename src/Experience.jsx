import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {

  const x = -0.45;
  const y = 4.83;
  const z = 0.04;
  const sensitivity = 0.0025;
  const initialYaw = 0;
  const initialPitch = 0;

  const { camera, gl } = useThree();

  const yawRef = useRef(initialYaw);
  const pitchRef = useRef(initialPitch);
  const draggingRef = useRef(false);
  const lastPosRef = useRef([0, 0]);
  const cubeRef = useRef();

  // update camera each frame
  useFrame(() => {
    camera.position.set(x, y, z);
    camera.rotation.set(pitchRef.current, yawRef.current, 0, "YXZ");
  });

  // rotate cube
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01;
      cubeRef.current.rotation.x += 0.005;
    }
  });

  useEffect(() => {
    const el = gl.domElement;

    // SCROLL-ZOOM (mouse wheel)
    const onWheel = (e) => {
      camera.fov += e.deltaY * 0.02;   // scroll down → zoom in
      camera.fov = Math.min(100, Math.max(20, camera.fov));
      camera.updateProjectionMatrix();
    };

    // pointer down
    const onPointerDown = (e) => {
      draggingRef.current = true;
      const sx = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      const sy = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
      lastPosRef.current = [sx, sy];
      e.preventDefault();
    };

    // pointer move (INVERTED DRAG)
    const onPointerMove = (e) => {
      if (!draggingRef.current) return;

      const sx = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      const sy = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
      const [lx, ly] = lastPosRef.current;

      // INVERT drag direction
      const dx = lx - sx;  // ← swapped
      const dy = ly - sy;  // ← swapped

      // rotation
      yawRef.current -= dx * sensitivity;
      pitchRef.current -= dy * sensitivity;

      // clamp pitch
      const maxPitch = Math.PI / 2 - 0.01;
      const minPitch = -maxPitch;
      pitchRef.current = Math.max(minPitch, Math.min(maxPitch, pitchRef.current));

      lastPosRef.current = [sx, sy];
      e.preventDefault();
    };

    const onPointerUp = (e) => {
      draggingRef.current = false;
      e.preventDefault();
    };

    // attach listeners
    el.addEventListener("wheel", onWheel, { passive: false });

    el.addEventListener("pointerdown", onPointerDown, { passive: false });
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp, { passive: false });

    el.addEventListener("touchstart", onPointerDown, { passive: false });
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerUp, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);

      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      el.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, [gl.domElement, sensitivity]);

  return (
    <>
      <Perf position="top-left" />

      <Environment
        files="/environmentMaps/playground.jpg"
        background
        ground={{
          height: 7,
          radius: 28,
          scale: 100
        }}
      />
      
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 2]} intensity={0.6} />

      <mesh ref={cubeRef} position={[-30, 1, 7]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}
