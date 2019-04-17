import React from "react";
import Box from "../Box";

const Grid = () => {
  return (
    <group>
      <Box color={[50, 160, 70]} position={[0, 0, 0]} dimensions={[2, 3, 4]} />
      <Box color={[250, 160, 70]} position={[4, 0, 0]} dimensions={[2, 3, 4]} />
    </group>
  );
};

export default Grid;
