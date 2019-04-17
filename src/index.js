import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import Grid from "./threeComponents/Grid";
import * as THREE from "three";
import "./styles.css";

const { degToRad } = THREE.Math;

ReactDOM.render(
  <Canvas>
    <group rotation={new THREE.Euler(degToRad(45), degToRad(-45), degToRad(0))}>
      <Grid />
    </group>
  </Canvas>,
  document.getElementById("root")
);
