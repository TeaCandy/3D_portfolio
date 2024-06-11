import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import planeScene from '../assets/3d/leafbird.glb';

const Plane = ({ isRotating, ...props }) => {
  const gltf = useGLTF(planeScene);
  const { scene, animations } = gltf;
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play(); // Adjust animation name based on your specific GLTF file
    } else {
      actions['Take 001'].stop(); // Adjust animation name based on your specific GLTF file
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
