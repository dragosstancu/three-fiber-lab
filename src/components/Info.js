import { Stats, useDetectGPU } from '@react-three/drei';

export default function Info() {

    const gpuInfo = useDetectGPU();

    console.log(`GPU INFO:`, gpuInfo);

    return <Stats />;
};
