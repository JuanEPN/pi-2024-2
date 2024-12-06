import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Trashcan = ({ onBottleInside, ...props }) => {
  const { nodes, materials } = useGLTF("/models-3d/trash_can.glb");
  const trashcanRef = useRef();

  const handleCollisionEnter = (event) => {
    if (event.other.rigidBody.name === "bottle") { // Si el objeto es la botella
      onBottleInside(); // Ejecutar el callback para mostrar el mensaje
    }
  };

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.5} ref={trashcanRef}>
        <RigidBody onCollisionEnter={handleCollisionEnter} type="fixed"> {/* Uso de RigidBody */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_0.geometry}
            material={materials["Material.002"]}
            position={[-0.035, -0.077, 2.77]}
            rotation={[-0.002, 0.004, -0.025]}
            scale={[2.022, 2.022, 2.695]}
          />
        </RigidBody>
      </group>
    </group>
  );
};

useGLTF.preload("/models-3d/trash_can.glb");
export default Trashcan;