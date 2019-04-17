import * as THREE from "three";
import React from "react";

const Box = ({ color = [0, 0, 0], dimensions, position }) => {
  const position3 = new THREE.Vector3(...position);

  const boxGeometry3 = new THREE.BoxGeometry(...dimensions);
  const boxMaterial3 = new THREE.MeshBasicMaterial({
    color: new THREE.Color(`rgb(${color[0]}, ${color[1]}, ${color[2]})`)
  });

  const edgesGeometry3 = new THREE.EdgesGeometry(boxGeometry3);
  const edgesMaterial3 = new THREE.LineBasicMaterial({ color: 0xffffff });

  return (
    <group position={position3}>
      <mesh
        geometry={boxGeometry3}
        material={boxMaterial3}
        onPointerOver={e => console.log("hover")}
        onPointerDown={e => console.log("down")}
      />
      <lineSegments geometry={edgesGeometry3} material={edgesMaterial3} />
    </group>
  );
};

export default Box;
