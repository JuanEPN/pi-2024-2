import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const Beachtown = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/fishing_town.glb')
  return (
    
    <group {...props} dispose={null}>
      <group position={[1.946, 1.53, 3.993]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.lpb_gradient} receiveShadow={true}/>
        <mesh 
          geometry={nodes.Object_6.geometry}
          material={materials.lpb_gradient}
          position={[0, 1.49, 0]}
          scale={[0.99, 1, 0.969]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.lpb_gradient}
          position={[0.018, 0.332, 0.744]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.lpb_gradient}
          position={[-0.008, 0.896, 0.827]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.lpb_gradient}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.lpb_gradient}
          position={[0.833, 0.896, 0.016]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.lpb_gradient}
          position={[-0.832, 0.896, -0.021]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.lpb_gradient}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.lpb_gradient_metal}
          position={[0, 2.436, 0.343]}
          scale={0.536}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.lpb_gradient}
          position={[-0.499, 1.233, 0.66]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.471}
        />
      </group>
      <group position={[4.027, 1.53, -1.34]}>
        <mesh geometry={nodes.Object_24.geometry} material={materials.lpb_gradient} />
        <group position={[0.694, -0.017, -0.77]} rotation={[0, Math.PI / 2, 0]}>
          <mesh geometry={nodes.Object_36.geometry} material={materials.lpb_gradient} />
          <mesh
            geometry={nodes.Object_38.geometry}
            material={materials.lpb_gradient}
            position={[0, 1.49, 0]}
            scale={[0.99, 1, 0.969]}
          />
        </group>
        <group position={[0.709, 1.937, -0.188]} rotation={[-0.03, -0.653, 0.215]} scale={0.845}>
          <mesh geometry={nodes.Object_52.geometry} material={materials.lpb_gradient_metal} />
          <mesh geometry={nodes.Object_53.geometry} material={materials.lpb_gradient} />
        </group>
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.lpb_gradient}
          position={[1.004, 0.896, -0.042]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.lpb_gradient}
          position={[1.025, 0, -0.781]}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.lpb_gradient}
          position={[0, 1.49, 0]}
          scale={[0.99, 1, 0.969]}
        />
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials.lpb_gradient}
          position={[0.018, 0.332, 0.744]}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials.lpb_gradient}
          position={[-0.008, 0.896, 0.827]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials.lpb_gradient}
          position={[-0.832, 0.896, -0.021]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_42.geometry}
          material={materials.lpb_gradient}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_44.geometry}
          material={materials.lpb_gradient}
          position={[1.517, 0.896, -0.758]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_46.geometry}
          material={materials.lpb_gradient}
          position={[0.685, 0, -0.779]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_48.geometry}
          material={materials.lpb_gradient}
          position={[0.731, 0.896, -1.593]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_50.geometry}
          material={materials.lpb_gradient}
          position={[0.71, 0, -0.761]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.Object_55.geometry}
          material={materials.lpb_gradient}
          position={[-0.38, 1.235, 0.66]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-1.257, 1.53, -1.125]}>
        <mesh geometry={nodes.Object_61.geometry} material={materials.lpb_gradient} />
        <group position={[0.694, -0.017, -0.77]} rotation={[0, Math.PI / 2, 0]}>
          <mesh geometry={nodes.Object_73.geometry} material={materials.lpb_gradient} />
          <mesh
            geometry={nodes.Object_75.geometry}
            material={materials.lpb_gradient}
            position={[0, 1.49, 0]}
            scale={[0.99, 1, 0.969]}
          />
        </group>
        <group position={[-0.286, 1.209, -1.022]}>
          <mesh geometry={nodes.Object_101.geometry} material={materials.lpb_gradient} />
          <mesh
            geometry={nodes.Object_103.geometry}
            material={materials.lpb_gradient}
            position={[0, 1.49, 0]}
            scale={[0.99, 1, 0.969]}
          />
        </group>
        <mesh
          geometry={nodes.Object_63.geometry}
          material={materials.lpb_gradient}
          position={[0, 1.49, 0]}
          scale={[0.99, 1, 0.969]}
        />
        <mesh
          geometry={nodes.Object_65.geometry}
          material={materials.lpb_gradient}
          position={[0.018, 0.332, 0.744]}
        />
        <mesh
          geometry={nodes.Object_67.geometry}
          material={materials.lpb_gradient}
          position={[-0.008, 0.896, 0.827]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_69.geometry}
          material={materials.lpb_gradient}
          position={[-0.832, 0.896, -0.021]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_71.geometry}
          material={materials.lpb_gradient}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_77.geometry}
          material={materials.lpb_gradient}
          position={[1.517, 0.896, -0.758]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_79.geometry}
          material={materials.lpb_gradient}
          position={[0.685, 0, -0.779]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_81.geometry}
          material={materials.lpb_gradient}
          position={[0.731, 0.896, -1.593]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_83.geometry}
          material={materials.lpb_gradient}
          position={[0.71, 0, -0.761]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.Object_85.geometry}
          material={materials.lpb_gradient}
          position={[1.004, 0.896, -0.042]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_87.geometry}
          material={materials.lpb_gradient}
          position={[1.025, 0, -0.781]}
        />
        <mesh
          geometry={nodes.Object_89.geometry}
          material={materials.lpb_gradient}
          position={[-1.104, 1.88, -1.03]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_91.geometry}
          material={materials.lpb_gradient}
          position={[-0.272, 0.983, -1.009]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_93.geometry}
          material={materials.lpb_gradient}
          position={[-0.268, 1.47, -1.852]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_95.geometry}
          material={materials.lpb_gradient}
          position={[-0.289, 0.574, -1.02]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.Object_97.geometry}
          material={materials.lpb_gradient}
          position={[0, 2.136, 0.147]}
          rotation={[-0.012, 0.012, -0.785]}
          scale={[0.046, 0.131, 0.046]}
        />
        <mesh
          geometry={nodes.Object_99.geometry}
          material={materials.lpb_gradient}
          position={[0, 2.136, 0.256]}
          rotation={[-3.129, -0.012, 2.356]}
          scale={[0.046, 0.131, 0.046]}
        />
        <mesh
          geometry={nodes.Object_105.geometry}
          material={materials.lpb_gradient}
          position={[-0.53, 1.223, 0.652]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-4.106, 1.53, 1.944]}>
        <mesh geometry={nodes.Object_107.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_109.geometry}
          material={materials.lpb_gradient}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_111.geometry}
          material={materials.lpb_gradient}
          position={[0, 1.49, 0]}
          scale={[0.99, 1, 0.969]}
        />
        <mesh
          geometry={nodes.Object_113.geometry}
          material={materials.lpb_gradient}
          position={[0.018, 0.332, 0.744]}
        />
        <mesh
          geometry={nodes.Object_115.geometry}
          material={materials.lpb_gradient}
          position={[-0.008, 0.896, 0.827]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_117.geometry}
          material={materials.lpb_gradient}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_119.geometry}
          material={materials.lpb_gradient}
          position={[0.833, 0.896, 0.016]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_121.geometry}
          material={materials.lpb_gradient}
          position={[-0.832, 0.896, -0.021]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.562, 0.507, 0.649]}
        />
      </group>
      <group position={[-9.082, 1.53, -1.731]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Object_123.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_125.geometry}
          material={materials.lpb_gradient}
          position={[0, 1.49, 0]}
          scale={[0.99, 1, 0.969]}
        />
        <mesh
          geometry={nodes.Object_127.geometry}
          material={materials.lpb_gradient}
          position={[0.018, 0.332, 0.744]}
        />
        <mesh
          geometry={nodes.Object_129.geometry}
          material={materials.lpb_gradient}
          position={[-0.008, 0.896, 0.827]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_131.geometry}
          material={materials.lpb_gradient}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_133.geometry}
          material={materials.lpb_gradient}
          position={[0.833, 0.896, 0.016]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_135.geometry}
          material={materials.lpb_gradient}
          position={[-0.832, 0.896, -0.021]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_137.geometry}
          material={materials.lpb_gradient}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
      <group position={[-9.273, 1.53, 3.163]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Object_139.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_141.geometry}
          material={materials.lpb_gradient}
          position={[0, 1.49, 0]}
          scale={[0.99, 1, 0.969]}
        />
        <mesh
          geometry={nodes.Object_143.geometry}
          material={materials.lpb_gradient}
          position={[0.018, 0.332, 0.744]}
        />
        <mesh
          geometry={nodes.Object_145.geometry}
          material={materials.lpb_gradient}
          position={[-0.008, 0.896, 0.827]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_147.geometry}
          material={materials.lpb_gradient}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_149.geometry}
          material={materials.lpb_gradient}
          position={[0.833, 0.896, 0.016]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_151.geometry}
          material={materials.lpb_gradient}
          position={[-0.832, 0.896, -0.021]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_153.geometry}
          material={materials.lpb_gradient}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
      <group position={[2.007, 1.53, -6.224]}>
        <mesh geometry={nodes.Object_155.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_157.geometry}
          material={materials.lpb_gradient}
          position={[0, 1.49, 0]}
          scale={[0.99, 1, 0.969]}
        />
        <mesh
          geometry={nodes.Object_159.geometry}
          material={materials.lpb_gradient}
          position={[0.018, 0.332, 0.744]}
        />
        <mesh
          geometry={nodes.Object_161.geometry}
          material={materials.lpb_gradient}
          position={[-0.008, 0.896, 0.827]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_163.geometry}
          material={materials.lpb_gradient}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Object_165.geometry}
          material={materials.lpb_gradient}
          position={[0.833, 0.896, 0.016]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_167.geometry}
          material={materials.lpb_gradient}
          position={[-0.832, 0.896, -0.021]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.562, 0.507, 0.649]}
        />
        <mesh
          geometry={nodes.Object_169.geometry}
          material={materials.lpb_gradient}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
      <group position={[-4.106, 0.467, 1.944]}>
        <mesh geometry={nodes.Object_171.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_173.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
        />
        <mesh
          geometry={nodes.Object_175.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 4, 0, 0.334]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_177.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-2.356, 0, -2.808]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_179.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 1.905]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_181.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, -1.237]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_183.geometry}
          material={materials.lpb_gradient}
          position={[0, -0.453, 0]}
          scale={[0.988, 0.683, 0.992]}
        />
      </group>
      <group position={[1.935, 0.467, 3.993]}>
        <mesh geometry={nodes.Object_185.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_187.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
        />
        <mesh
          geometry={nodes.Object_189.geometry}
          material={materials.lpb_gradient}
          position={[0, -0.453, 0]}
          scale={[0.988, 0.683, 0.992]}
        />
        <mesh
          geometry={nodes.Object_191.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 4, 0, 0.334]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_193.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-2.356, 0, -2.808]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_195.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 1.905]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_197.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, -1.237]}
          scale={[0.125, 0.167, 0.058]}
        />
      </group>
      <group position={[8.896, 0.467, -1.078]}>
        <mesh geometry={nodes.Object_199.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_201.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
        />
        <mesh
          geometry={nodes.Object_203.geometry}
          material={materials.lpb_gradient}
          position={[0, -0.453, 0]}
          scale={[0.988, 0.683, 0.992]}
        />
        <mesh
          geometry={nodes.Object_205.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, -0.923]}
          rotation={[-Math.PI / 4, 0, 0.334]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_207.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-2.356, 0, -2.808]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_209.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 1.905]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_211.geometry}
          material={materials.lpb_gradient}
          position={[0.964, 0.961, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, -1.237]}
          scale={[0.125, 0.167, 0.058]}
        />
      </group>
      <group position={[-1.475, 0.467, -1.095]}>
        <mesh geometry={nodes.Object_213.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_215.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
        />
        <mesh
          geometry={nodes.Object_217.geometry}
          material={materials.lpb_gradient}
          position={[0, -0.453, 0]}
          scale={[0.988, 0.683, 0.992]}
        />
        <mesh
          geometry={nodes.Object_219.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, -0.923]}
          rotation={[-Math.PI / 4, 0, 0.334]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_221.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-2.356, 0, -2.808]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_223.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 1.905]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_225.geometry}
          material={materials.lpb_gradient}
          position={[0.964, 0.961, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, -1.237]}
          scale={[0.125, 0.167, 0.058]}
        />
      </group>
      <group position={[-8.983, 0.467, -1.036]}>
        <mesh geometry={nodes.Object_227.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_229.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
        />
        <mesh
          geometry={nodes.Object_231.geometry}
          material={materials.lpb_gradient}
          position={[0, -0.453, 0]}
          scale={[0.988, 0.683, 0.992]}
        />
        <mesh
          geometry={nodes.Object_233.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, -0.923]}
          rotation={[-Math.PI / 4, 0, 0.334]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_235.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-2.356, 0, -2.808]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_237.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 1.905]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_239.geometry}
          material={materials.lpb_gradient}
          position={[0.964, 0.961, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, -1.237]}
          scale={[0.125, 0.167, 0.058]}
        />
      </group>
      <group position={[-9.091, 0.467, 3.965]}>
        <mesh geometry={nodes.Object_241.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_243.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
        />
        <mesh
          geometry={nodes.Object_245.geometry}
          material={materials.lpb_gradient}
          position={[0, -0.453, 0]}
          scale={[0.988, 0.683, 0.992]}
        />
        <mesh
          geometry={nodes.Object_247.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, -0.923]}
          rotation={[-Math.PI / 4, 0, 0.334]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_249.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-2.356, 0, -2.808]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_251.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 1.905]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_253.geometry}
          material={materials.lpb_gradient}
          position={[0.964, 0.961, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, -1.237]}
          scale={[0.125, 0.167, 0.058]}
        />
      </group>
      <group position={[1.986, 0.467, -6.133]}>
        <mesh geometry={nodes.Object_255.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_257.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
        />
        <mesh
          geometry={nodes.Object_259.geometry}
          material={materials.lpb_gradient}
          position={[0, -0.453, 0]}
          scale={[0.988, 0.683, 0.992]}
        />
        <mesh
          geometry={nodes.Object_261.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 4, 0, 0.334]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_263.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-2.356, 0, -2.808]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_265.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 1.905]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_267.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, -1.237]}
          scale={[0.125, 0.167, 0.058]}
        />
      </group>
      <group position={[-4.081, 0.467, -5.021]}>
        <mesh geometry={nodes.Object_269.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_271.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
        />
        <mesh
          geometry={nodes.Object_273.geometry}
          material={materials.lpb_gradient}
          position={[0, -0.453, 0]}
          scale={[0.988, 0.683, 0.992]}
        />
        <mesh
          geometry={nodes.Object_275.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 4, 0, 0.334]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_277.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-2.356, 0, -2.808]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_279.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 1.905]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_281.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, -1.237]}
          scale={[0.125, 0.167, 0.058]}
        />
      </group>
      <group position={[3.984, 0.467, -1.078]}>
        <mesh geometry={nodes.Object_283.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_285.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
        />
        <mesh
          geometry={nodes.Object_287.geometry}
          material={materials.lpb_gradient}
          position={[0, -0.453, 0]}
          scale={[0.988, 0.683, 0.992]}
        />
        <mesh
          geometry={nodes.Object_289.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, -0.923]}
          rotation={[-Math.PI / 4, 0, 0.334]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_291.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-2.356, 0, -2.808]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_293.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 1.905]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_295.geometry}
          material={materials.lpb_gradient}
          position={[0.964, 0.961, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, -1.237]}
          scale={[0.125, 0.167, 0.058]}
        />
      </group>
      <group position={[7.902, 0.467, 2.973]}>
        <mesh geometry={nodes.Object_297.geometry} material={materials.lpb_gradient} />
        <mesh
          geometry={nodes.Object_299.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
        />
        <mesh
          geometry={nodes.Object_301.geometry}
          material={materials.lpb_gradient}
          position={[0, -0.453, 0]}
          scale={[0.988, 0.683, 0.992]}
        />
        <mesh
          geometry={nodes.Object_303.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 4, 0, 0.334]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_305.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-2.356, 0, -2.808]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_307.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, 1.905]}
          scale={[0.125, 0.167, 0.058]}
        />
        <mesh
          geometry={nodes.Object_309.geometry}
          material={materials.lpb_gradient}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, -1.237]}
          scale={[0.125, 0.167, 0.058]}
        />
      </group>
      <mesh
        geometry={nodes.Object_57.geometry}
        material={materials.material}
        position={[0.29, -0.029, 0.356]}
        scale={12.986}
      />
      <mesh
        geometry={nodes.Object_59.geometry}
        material={materials.lpb_gradient}
        position={[0.29, -1.935, 0.356]}
        scale={12.986}
      />
      <mesh
        geometry={nodes.Object_311.geometry}
        material={materials.lpb_gradient}
        position={[9.117, 1.48, -1.575]}
        scale={0.863}
      />
      <mesh
        geometry={nodes.Object_313.geometry}
        material={materials.lpb_gradient}
        position={[8.389, 1.48, -2.49]}
        rotation={[0, 0.576, 0]}
        scale={1.331}
      />
      <mesh
        geometry={nodes.Object_315.geometry}
        material={materials.lpb_gradient}
        position={[10.419, 1.48, -2.49]}
        rotation={[0, 0.576, 0]}
        scale={1.141}
      />
      <mesh
        geometry={nodes.Object_317.geometry}
        material={materials.lpb_gradient}
        position={[-4.439, 1.48, -5.34]}
        rotation={[0, 0.576, 0]}
        scale={1.509}
      />
      <mesh
        geometry={nodes.Object_319.geometry}
        material={materials.lpb_gradient}
        position={[-3.437, 1.48, -5.136]}
        rotation={[0, 1.482, 0]}
        scale={0.855}
      />
      <mesh
        geometry={nodes.Object_321.geometry}
        material={materials.lpb_gradient}
        position={[8.166, 1.48, 2.326]}
        scale={0.863}
      />
      <mesh
        geometry={nodes.Object_323.geometry}
        material={materials.lpb_gradient}
        position={[8.644, 1.48, 3.027]}
        scale={0.702}
      />
      <mesh
        geometry={nodes.Object_325.geometry}
        material={materials.lpb_gradient}
        position={[-9.689, 1.48, 4.565]}
        scale={1.083}
      />
      <mesh
        geometry={nodes.Object_327.geometry}
        material={materials.lpb_gradient}
        position={[-7.927, 1.48, -2.649]}
        rotation={[0, 0.335, 0]}
        scale={1.154}
      />
      <mesh
        geometry={nodes.Object_329.geometry}
        material={materials.lpb_gradient}
        position={[-8.319, 1.48, -0.524]}
        rotation={[0, 0.335, 0]}
        scale={0.511}
      />
      <mesh
        geometry={nodes.Object_331.geometry}
        material={materials.lpb_gradient}
        position={[-9.722, 1.48, -0.325]}
        rotation={[0, 0.335, 0]}
        scale={1.143}
      />
      <mesh
        geometry={nodes.Object_333.geometry}
        material={materials.lpb_gradient}
        position={[0.148, 1.48, -0.504]}
        rotation={[0, 0.335, 0]}
      />
      <mesh
        geometry={nodes.Object_335.geometry}
        material={materials.lpb_gradient}
        position={[3.456, 1.48, -2.625]}
        rotation={[0, 0.335, 0]}
        scale={1.138}
      />
      <mesh
        geometry={nodes.Object_337.geometry}
        material={materials.lpb_gradient}
        position={[5.547, 1.48, -0.897]}
        rotation={[0, 0.335, 0]}
        scale={0.839}
      />
      <mesh
        geometry={nodes.Object_339.geometry}
        material={materials.lpb_gradient}
        position={[7.502, -0.288, 4.484]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_341.geometry}
        material={materials.lpb_gradient}
        position={[2.498, -0.288, 6.499]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_343.geometry}
        material={materials.lpb_gradient}
        position={[6.487, -0.288, 0.444]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_345.geometry}
        material={materials.lpb_gradient}
        position={[7.482, -0.288, 1.457]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_347.geometry}
        material={materials.lpb_gradient}
        position={[-0.508, -0.288, 1.419]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_349.geometry}
        material={materials.lpb_gradient}
        position={[-6.592, -0.288, 4.45]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_351.geometry}
        material={materials.lpb_gradient}
        position={[-6.499, -0.288, -2.486]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_353.geometry}
        material={materials.lpb_gradient}
        position={[-4.506, -0.288, -3.502]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_355.geometry}
        material={materials.lpb_gradient}
        position={[-2.535, -0.288, -4.509]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_357.geometry}
        material={materials.lpb_gradient}
        position={[-0.538, -0.288, -3.504]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_359.geometry}
        material={materials.lpb_gradient}
        position={[-0.545, -0.288, -5.505]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_361.geometry}
        material={materials.lpb_gradient}
        position={[0.469, -0.288, -6.497]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_363.geometry}
        material={materials.lpb_gradient}
        position={[2.509, -0.288, 5.48]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_365.geometry}
        material={materials.lpb_gradient}
        position={[-0.507, -0.288, 0.413]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_367.geometry}
        material={materials.lpb_gradient}
        position={[3.498, -0.288, 0.413]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_369.geometry}
        material={materials.lpb_gradient}
        position={[5.474, -0.288, 0.437]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_371.geometry}
        material={materials.lpb_gradient}
        position={[8.49, -0.288, 0.437]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_373.geometry}
        material={materials.lpb_gradient}
        position={[-4.587, -0.288, 3.449]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_375.geometry}
        material={materials.lpb_gradient}
        position={[-0.513, -0.557, 2.436]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.051, 1.937, 0.051]}
      />
      <mesh
        geometry={nodes.Object_377.geometry}
        material={materials.lpb_gradient}
        position={[-0.516, -1.257, 3.453]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_379.geometry}
        material={materials.lpb_gradient}
        position={[-4.599, -0.557, 5.474]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.051, 1.937, 0.051]}
      />
      <mesh
        geometry={nodes.Object_381.geometry}
        material={materials.lpb_gradient}
        position={[-4.599, -1.257, 6.492]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.051, 1.717, 0.051]}
      />
      <mesh
        geometry={nodes.Object_383.geometry}
        material={materials.lpb_gradient}
        position={[3.506, -0.557, -5.639]}
        scale={[0.051, 1.937, 0.051]}
      />
      <mesh
        geometry={nodes.Object_385.geometry}
        material={materials.lpb_gradient}
        position={[4.523, -1.257, -5.636]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.051, 1.717, 0.051]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/fishing_town.glb'); 

export default Beachtown; 