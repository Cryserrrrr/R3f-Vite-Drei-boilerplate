import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import styled from "styled-components";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const CanvasScene: React.FC = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        <Box args={[1, 1, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="orange" />
        </Box>
      </Canvas>
    </CanvasContainer>
  );
};

export default CanvasScene;
