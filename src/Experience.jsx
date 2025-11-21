import { Perf } from "r3f-perf";
import { Environment } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import { scenes } from "./data/data.js";
import POI from "./components/POI.jsx";
import NAV from "./components/NAV.jsx";
import HELP from "./components/HELP.jsx";

export default function Experience({ setSelectedPOI }) {
  const [currentSceneId, setCurrentSceneId] = useState(1);
  const scene = scenes.find(s => s.id === currentSceneId);

  const { camera, gl } = useThree();

  const yawRef = useRef(0);
  const pitchRef = useRef(0);
  const draggingRef = useRef(false);
  const lastPosRef = useRef([0, 0]);

  const initialFov = 100;
  const minFov = 20;
  const maxFov = 100;

  useEffect(() => {
    camera.fov = initialFov;
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(() => {
    camera.position.set(-0.45, 4.83, 0.04);
    camera.rotation.set(pitchRef.current, yawRef.current, 0, "YXZ");
  });

  useEffect(() => {
    const el = gl.domElement;

    const onWheel = (e) => {
      camera.fov += e.deltaY * 0.02;
      camera.fov = Math.min(maxFov, Math.max(minFov, camera.fov));
      camera.updateProjectionMatrix();
      e.preventDefault();
    };

    const onPointerDown = (e) => {
      draggingRef.current = true;
      lastPosRef.current = [e.clientX, e.clientY];
      e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      const [lx, ly] = lastPosRef.current;
      const dx = lx - e.clientX;
      const dy = ly - e.clientY;

      yawRef.current -= dx * 0.0025;
      pitchRef.current -= dy * 0.0025;

      const maxPitch = Math.PI / 2 - 0.01;
      pitchRef.current = Math.max(-maxPitch, Math.min(maxPitch, pitchRef.current));

      lastPosRef.current = [e.clientX, e.clientY];
      e.preventDefault();
    };

    const onPointerUp = () => {
      draggingRef.current = false;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [gl.domElement, camera]);

  return (
    <>
      <Perf position="top-left" />
      <Environment
        files={scene.env}
        background
        ground={{
          height: 7,
          radius: 28,
          scale: 100,
        }}
      />

      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 2]} intensity={0.7} castShadow />

      {/* POIs - call setSelectedPOI on click */}
      {scene.pois.map((poi) => (
        <POI
          key={poi.id}
          position={poi.position}
          title={poi.title}
          description={poi.description}
          onClick={() => setSelectedPOI(poi)}
        />
      ))}

      {/* NAVs */}
      {scene.navs.map((nav) => (
        <NAV
          key={nav.id}
          position={nav.position}
          targetSceneId={nav.targetSceneId}
          setCurrentSceneId={setCurrentSceneId}
        />
      ))}

      <HELP />
    </>
  );
}
