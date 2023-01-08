import { Modal } from '@/component/Modal';
import { Component } from 'solid-js';
import * as lineRenderer from '../renderer/Line';
import './App.less';

const renderers = [
  lineRenderer,
  lineRenderer,
  lineRenderer,
  lineRenderer,
  lineRenderer,
  lineRenderer,
  lineRenderer,
  lineRenderer,
];

const App: Component = () => {
  let container: HTMLDivElement | undefined;
  return (
    <section class='renderer_list' ref={container}>
      {renderers.map((renderer) => {
        return (
          <div
            class='renderer_item'
            onClick={() => {
              console.log(renderer);
            }}
          >
            <img src={renderer.icon} alt='Icon' />
            <h6>{renderer.title}</h6>
          </div>
        );
      })}
      <Modal open={true} title='标题'>
        1111
      </Modal>
    </section>
  );
};

export default App;
