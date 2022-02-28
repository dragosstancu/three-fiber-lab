import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'

import Box from './components/Box';
import Cam from './components/Cam';
import Text from './components/Text';
import Bg from './components/Bg';

// const PROGRAMMER_RED = 'rgb(255, 0, 0)';
const PROGRAMMER_GREEN = 'rgb(0, 255, 0)';
const PROGRAMMER_BLUE = 'rgb(0, 0, 255)';

const gridHelperConfig = {
    // args: [ size, divisions, centerLineColor, gridColor ]
    args: [50, 40, PROGRAMMER_BLUE, PROGRAMMER_GREEN]
};

export default function Scene () {

    return (
      <Canvas camera={{
          position: [2, 9, 8]
      }}>
        <directionalLight color="#ffffff" intensity={0.7} />
        <ambientLight color="#ffffff" intensity={0.2} />
        <Suspense fallback={null}>
            <Bg />
            <Cam />
            <Box position={[0, 3, 0]} />
            <Text />
            <gridHelper {...gridHelperConfig} />
        </Suspense>
      </Canvas>
    );
};
