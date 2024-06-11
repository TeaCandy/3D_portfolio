// import { useRef, useEffect } from 'react'

// import birdScene from '../assets/3d/bird.glb';
// import { useAnimations, useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// const Bird = () => {
//   const birdRef = useRef(); 
//   const { scene, animations } = useGLTF(birdScene);
//   const { actions } = useAnimations(animations, birdRef);
    

//     useEffect(() => {
//       actions['Take 001'].play();
//     }, []);
  
//     useFrame(({ clock, camera }) => {
//       // simulates bird flying in sin-wave motion
//       birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

//       // check if bird reached point relative to camera
//       if(birdRef.current.position.x > camera.position.x + 10) {
//         // if yes, bird "turns around, 180 on Y axis"
//         birdRef.current.rotation.y = Math.PI;
//         //otherwise, we go onward 
//       } else if(birdRef.current.position.x < camera.position.x - 10) {
//         birdRef.current.rotation.y = 0;
//       }
      
//       if(birdRef.current.rotation.y === 0) {
//         birdRef.current.position.x += 0.01;
//         birdRef.current.position.z -= 0.01;
//       } else {
//         birdRef.current.position.x -= 0.01;
//         birdRef.current.position.z += 0.01;
//       }
//     })

//     return (
//     <mesh 
//     position={[-5, 2, 1]} 
//     scale={[0.003, 0.003, 0.003]} 
//     ref={birdRef}>
//         <primitive object={scene} />

//     </mesh>
//   )
// }

// export default Bird