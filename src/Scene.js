import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei';

import Box from './components/Box';
import Cam from './components/Cam';
import Text from './components/Text';
import Bg from './components/Bg';
import Info from './components/Info';

import Curiosity from './models/Curiosity';

const GH_REPO = 'https://github.com/wswoodruff/three-fiber-lab';
// const PROGRAMMER_RED = 'rgb(255, 0, 0)';
const PROGRAMMER_GREEN = 'rgb(0, 255, 0)';
const PROGRAMMER_BLUE = 'rgb(0, 0, 255)';

const gridHelperConfig = {
    // args: [ size, divisions, centerLineColor, gridColor ]
    args: [50, 40, PROGRAMMER_BLUE, PROGRAMMER_GREEN]
};

export default function Scene () {

    // const Curiosity = useGLTF('models/glb/curiosity.glb');

    // console.log("Curiosity", Curiosity);
    // const curiosity = ModelManager('/models/glb/curiosity.glb', {
    //     //
    // });

    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <directionalLight color="#ffffff" intensity={0.7} />
                    <ambientLight color="#ffffff" intensity={0.2} />
                    <Bg />
                    <Cam />
                    {/* <Box position={[0, 3, 0]} /> */}
                    <Text
                        onClick={() => window.open(GH_REPO)}
                        position={[0, 1, -10]}
                    >
                        Zill's Lab
                    </Text>
                    <Curiosity scale={2.4} />
                    <gridHelper {...gridHelperConfig} />
                    <Info />
                </Suspense>
            </Canvas>
            {/* Supposedly loads the scene w/ a progress bar but
              * I haven't seen it yet cuz the scene is light right now */}
            <Loader />
        </>
    );
};
