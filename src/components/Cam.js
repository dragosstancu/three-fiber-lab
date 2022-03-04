import {
    PerspectiveCamera,
    // CubeCamera,
    OrbitControls,
    GizmoHelper as AxisGizmoHelper,
    GizmoViewport as AxisGizmoViewport,
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
            {/* <PerspectiveCamera args={[2, 10, 4]} /> */}
            <OrbitControls
                autoRotate={autoRotate}
                autoRotateSpeed={autoRotateSpeed}
            />
            <AxisGizmoHelper
                alignment="bottom-right" // widget alignment within scene
                margin={[80, 80]} // widget margins (X, Y)
                // onUpdate={ called during camera animation  }
                // onTarget={ return current camera target (e.g. from orbit controls) to center animation }
            >
                <AxisGizmoViewport {...gizmoViewportConfig} />
            </AxisGizmoHelper>
        </>
    );
}
