import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';

import Island from '../models/Island';
import Sky from '../models/Sky';
// import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    if (window.innerWidth < 768) {
      return {
        scale: [1.5, 1.5, 1.5], // Increase scale for smaller screens
        position: [0, -0.5, -31.5],
        rotation: [0.1, 3.0, 0],
      };
    } else {
      return {
        scale: [10, 10, 10], // Increase scale for larger screens
        position: [0, -0.5, -31.5],
        rotation: [0.1, 3.0, 0],
      };
    }
  };

  const adjustPlaneForScreenSize = () => {
    if (window.innerWidth < 768) {
      return {
        scale: [1.5, 1.5, 1.5],
        position: [0, -1.5, 0],
        rotation: [0, 20, 0],
      };
    } else {
      return {
        scale: [6, 6, 6],
        position: [0, -4.5, -4],
        rotation: [0, 20.5, 0],
      };
    }
  };

  const { scale: islandScale, position: islandPosition, rotation: islandRotation } =
    adjustIslandForScreenSize();
  const { scale: planeScale, position: planePosition, rotation: planeRotation } =
    adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
     
     <div className="absolute top-16 left-0 right-0 z-10 flex items-center justify-center">
    {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>
     
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[1, 1, 2]} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        {/* <Bird /> */}
        <Sky isRotating={isRotating} />
        <Island
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
        <Plane
          isRotating={isRotating}
          position={planePosition}
          scale={planeScale}
          rotation={planeRotation}
        />
      </Canvas>
    </section>
  );
};

export default Home;
