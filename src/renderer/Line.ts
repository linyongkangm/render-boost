import * as THREE from 'three';
import image from '../assets/PNG_transparency_demonstration_1.png';
export const title = 'Line';
export const icon = image;
export const renderer = (parent: HTMLElement) => {
  const renderer = new THREE.WebGLRenderer();
  parent.appendChild(renderer.domElement);

  renderer.setSize(parent.clientWidth, parent.clientHeight);
  const camera = new THREE.PerspectiveCamera(45, parent.clientWidth / parent.clientHeight, 1, 500);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();

  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line(geometry, material);

  scene.add(line);
  renderer.render(scene, camera);
};
