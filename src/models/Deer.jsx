/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Radik (https://sketchfab.com/billl90)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/low-poly-fantasy-deers-pack-daf5b7133c5d4932ac86fa70b1b90acb
Title: Low Poly Fantasy Deers Pack
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import scene from '../assets/3d/low_poly_fantasy_deers_pack.glb'

const Deer = ({ currentAnimation, ...props}) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(scene)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if(actions[currentAnimation]){
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="5f665138b40e4ef7b7ad8a8c5c728a0cfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Arm_Deer" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_48"
                      geometry={nodes.Object_48.geometry}
                      material={materials['Deer_Stag.001']}
                      skeleton={nodes.Object_48.skeleton}
                    />
                    <group name="Object_47" />
                  </group>
                </group>
                <group name="Deer_F_7" />
                
                {/* <group name="Deer_F_4" position={[2.061, 0, -2.948]} rotation={[0, -0.34, 0]}>
                  <mesh
                    name="Deer_F_4_Deer_Stag001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Deer_F_4_Deer_Stag001_0.geometry}
                    material={materials['Deer_Stag.001']}
                    skeleton={nodes.Deer_F_4_Deer_Stag001_0.skeleton}
                  />
                </group> */}
{/*          
                <group name="Deer_Moss_1" position={[2.061, 0, -2.948]} rotation={[0, -0.34, 0]}>
                  <mesh
                    name="Deer_Moss_1_Deer_Stag001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Deer_Moss_1_Deer_Stag001_0.geometry}
                    material={materials['Deer_Stag.001']}
                  />
                </group>
                <group name="Deer_Moss_2" position={[2.061, 0, -2.948]} rotation={[0, -0.34, 0]}>
                  <mesh
                    name="Deer_Moss_2_Deer_Stag001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Deer_Moss_2_Deer_Stag001_0.geometry}
                    material={materials['Deer_Stag.001']}
                  />
                </group> */}
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Deer