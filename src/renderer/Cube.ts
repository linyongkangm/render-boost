import * as THREE from 'three';
import image from '../assets/PNG_transparency_demonstration_1.png';
export const title = 'Cube';
export const icon = image;
export const renderer = (parent: HTMLElement) => {
  const renderer = new THREE.WebGLRenderer();
  parent.appendChild(renderer.domElement);

  renderer.setSize(parent.clientWidth, parent.clientHeight);
  const camera = new THREE.PerspectiveCamera(45, parent.clientWidth / parent.clientHeight, 1, 500);
  camera.position.set(30, 30, 100);
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(50, 50, 50, 1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  cube.matrixAutoUpdate = true;
  scene.add(cube);

  setInterval(() => {
    cube.rotateX(30);
    // cube.matrix.makeRotationX((100 * Math.PI) / 180);
  }, 2000);

  function requestAnimationFrameRender() {
    requestAnimationFrame(() => {
      renderer.render(scene, camera);
      requestAnimationFrameRender();
    });
  }
  requestAnimationFrameRender();
};
