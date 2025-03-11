import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

// Définition du type pour le modèle GLTF
type GLTFResult = {
  nodes: { [key: string]: THREE.Mesh };
  materials: { [key: string]: THREE.Material };
  animations: THREE.AnimationClip[];
};

const Model = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/models/360_sphere_robot.glb") as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);

  // Déclencher une animation s'il y en a
  if (actions) {
    Object.values(actions).forEach((action) => action?.play());
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.017}>
          <group name="8cfcbf279e5145b29fef01b31cc1d658fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="sphere_body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  {/* BODY PRIMARY COLOR */}
                  <mesh
                    name="sphere_body_glossy_paint_white_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sphere_body_glossy_paint_white_0.geometry}
                    material={materials.blue_glossy_paint}
                  />
                  {/* BODY SECONDARY COLOR */}
                  <mesh
                    name="sphere_body_black_matte_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sphere_body_black_matte_0.geometry}
                    material={materials.black_matte}
                  />
                  <mesh
                    name="sphere_body_metal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sphere_body_metal_0.geometry}
                    material={materials.metal}
                  />
                  <mesh
                    name="sphere_body_eyes_light_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sphere_body_eyes_light_0.geometry}
                    material={materials.eyes_light}
                  />
                  <mesh
                    name="sphere_body_dark_glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sphere_body_dark_glass_0.geometry}
                    material={materials.dark_glass}
                  />
                  <mesh
                    name="sphere_body_black_matter_blender_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sphere_body_black_matter_blender_0.geometry}
                    material={materials.black_matter_blender}
                  />
                  <mesh
                    name="sphere_body_thruster_light_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sphere_body_thruster_light_0.geometry}
                    material={materials.thruster_light}
                  />
                  <mesh
                    name="sphere_body_blender_glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sphere_body_blender_glass_0.geometry}
                    material={materials.blender_glass}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
};

// 🎯 Gestion de la réinitialisation
const ResetOrbitControls = ({ controls }: { controls: any }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      controls.reset(); // Remet la caméra à sa position initiale
    }, 3000); // Réinitialisation toutes les 3 sec (modifiable)

    return () => clearInterval(interval);
  }, [controls]);

  return null;
};

const Scene = ({ canvaHeight, canvaWidth, canvaCameraPosition, canvaZoom }: { canvaHeight: string, canvaWidth: string, canvaCameraPosition: [number, number, number], canvaZoom: number }) => {
  const controlsRef = useRef<any>(null);

  return (
    <Canvas
      camera={{ position: canvaCameraPosition, fov: canvaZoom }}
      style={{ height: canvaHeight, width: canvaWidth }}
    >
      {/* OrbitControls avec ref */}
      <OrbitControls ref={controlsRef} minDistance={2} maxDistance={2} />

      {/* Lumières */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, 5, 5]} intensity={1} castShadow />

      {/* Modèle 3D */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>

      {/* Reset automatique des contrôles */}
      {controlsRef.current && <ResetOrbitControls controls={controlsRef.current} />}
    </Canvas>
  );
};

useGLTF.preload('/models/360_sphere_robot.glb')
export default Scene;
