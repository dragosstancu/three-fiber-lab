import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'

import Box from './components/Box';
import Cam from './components/Cam';
import Text from './components/Text';
import Bg from './components/Bg';
import Info from './components/Info';

const GH_REPO = 'https://github.com/wswoodruff/three-fiber-lab';
// const PROGRAMMER_RED = 'rgb(255, 0, 0)';
const PROGRAMMER_GREEN = 'rgb(0, 255, 0)';
const PROGRAMMER_BLUE = 'rgb(0, 0, 255)';

const initCamConfig = {
    position: [2, 10, 10]
};

const gridHelperConfig = {
    // args: [ size, divisions, centerLineColor, gridColor ]
    args: [50, 40, PROGRAMMER_BLUE, PROGRAMMER_GREEN]
};

export default function Scene () {

    return (
      <Canvas camera={initCamConfig}>
        <directionalLight color="#ffffff" intensity={0.7} />
        <ambientLight color="#ffffff" intensity={0.2} />
        <Suspense fallback={null}>
            <Bg />
            <Cam />
            <Box position={[0, 3, 0]} />
            <Text onClick={() => window.open(GH_REPO)}>
              Yooooo!
            </Text>
            {/* <Text test /> */}
            <gridHelper {...gridHelperConfig} />
            <Info />
        </Suspense>
      </Canvas>
    );
};
