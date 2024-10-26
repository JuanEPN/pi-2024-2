import { Canvas } from '@react-three/fiber';
import React from 'react';
import Staging from '../staging/Staging';
import Controls from '../../controls/Controls';




const Watershortages = () => {
  const cameraSettings ={
    position: [-18,5,12],
    fov: 60,
  };
  return (

    <Canvas camera={cameraSettings}>
      <Controls/>
       
      <Staging/>
    </Canvas>

  );
}

export default Watershortages;