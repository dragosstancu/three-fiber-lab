
import { Text } from '@react-three/drei';

const TEST_TEXT = `
    ONE TIME A REALLY LONG TIME AGO SOMETHING CRAZY HAPPENED. AND IT WAS IN SPACE TOO.
    AND THEN THE LIZARDS SHOWED UP AS YOU ALREADY KNOW THEY ARE ALWAYS WATCHING WITH THEIR LIZARD EYES.
    PEOPLE WERE GASPING FOR AIR AS THEY REALIZED IT WAS ME.
`;

export default function AppText(props) {

    return (
        <Text
            color={'#EC2D2D'}
            fontSize={3}
            maxWidth={20}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle"
            {...props}
        >
            {props.children}
        </Text>
    );
};
