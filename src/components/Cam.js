import {
    PerspectiveCamera,
    // CubeCamera,
    OrbitControls,
    GizmoHelper,
    GizmoViewport,
    GizmoViewcube
} from '@react-three/drei';

const orbitControlsConfig = {
    autoRotate: true,
    autoRotateSpeed: 1
}

const gizmoViewportConfig = {
    axisColors: ['red', 'green', 'blue'],
    labelColor: 'black'
};

export default function Cam(props) {

    const {
        autoRotate = orbitControlsConfig.autoRotate,
        autoRotateSpeed = orbitControlsConfig.autoRotateSpeed
    } = props;

    return (
        <>
            {/* <CubeCamera makeDefault /> */}
            {/* <PerspectiveCamera makeDefault /> */}
            <OrbitControls
                autoRotate={autoRotate}
                autoRotateSpeed={autoRotateSpeed}
            />
            <GizmoHelper
                alignment="bottom-right" // widget alignment within scene
                margin={[80, 80]} // widget margins (X, Y)
                // onUpdate={ called during camera animation  }
                // onTarget={ return current camera target (e.g. from orbit controls) to center animation }
            >
                <GizmoViewport {...gizmoViewportConfig} />
            </GizmoHelper>
        </>
    );
}