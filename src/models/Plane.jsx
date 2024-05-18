import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import planeScene from '../assets/3d/da_vinci_flying_airplane.glb';

const Plane = ({ isRotating, ...props }) => {
  const gltf = useGLTF(planeScene);
  const { scene, animations } = gltf;
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Armature|speed03'].play(); // Adjust animation name based on your specific GLTF file
    } else {
      actions['Armature|speed03'].stop(); // Adjust animation name based on your specific GLTF file
    }
  }, [actions, isRotating]);

  return (
    <group {...props} ref={ref}>
      <primitive object={scene} />
    </group>
  );
};

export default Plane;
