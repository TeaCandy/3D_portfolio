import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Chimera from '../models/Chimera';

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    POPUP
</div> */}
const Home = () => {
    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition =[0, -2.5, -43]; 
        let rotation = [.5, 3.5, 0];

        if(window.innerWidth < 768) {
            screenScale = [1.8, 1.8, 1.8];
        } else {
            screenScale = [10, 10, 10];
        }
        return [screenScale, screenPosition, rotation]; //rotation
    }

    const [islandScale, islandPosition, islandRotation]  = adjustIslandForScreenSize();
//islandRotation
  return (
    <section className="w-full h-screen relative">
        <Canvas 
        className="w-full h-screen bg-trasnparent"
        camera={{ near: 0.1, far: 1000  }}
        >
           <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 2]} intensity={2} />
            <ambientLight intensity= {1} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />


                <Bird />
                <Sky />
                <Island 
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                />
                <Chimera />
            </Suspense> 
        </Canvas>
    </section>
  )
}

export default Home