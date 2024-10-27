import { useGLTF } from "@react-three/drei"


const Tree = (props) => {
     const {nodes, materials}= useGLTF("modelos-3d/tree.glb");
        
  
     return (
        <group {...props} dispose={null}>
          <mesh 
            receiveShadow
            geometry={nodes.high_poly.geometry}
            material={materials.Material_0}    
            scale={5.000}
          />
        </group>
     )

};

export default Tree;

useGLTF.preload("modelos-3d/tree.glb");
