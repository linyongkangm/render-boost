import { Modal } from '@/component/Modal';
import { Component, createRoot, onMount } from 'solid-js';
import * as lineRenderer from '../renderer/Line';
import './App.less';

const rendererConfigs = [
  lineRenderer,
  lineRenderer,
  lineRenderer,
  lineRenderer,
  lineRenderer,
  lineRenderer,
  lineRenderer,
  lineRenderer,
];

const DrawRenderer: Component<{
  renderer: (parent: HTMLElement) => void;
}> = (props) => {
  let container: HTMLDivElement | undefined;
  onMount(() => {
    setTimeout(() => {
      container && props.renderer(container);
    }, 10);
  });
  return <div style={{ height: '500px' }} ref={container}></div>;
};

const App: Component = () => {
  let container: HTMLDivElement | undefined;

  return (
    <section class='renderer_list' ref={container}>
      {rendererConfigs.map((config) => {
        return (
          <div
            class='renderer_item'
            onClick={() => {
              Modal.info({
                title: config.title,
                content: createRoot(() => <DrawRenderer renderer={config.renderer}></DrawRenderer>),
              });
            }}
          >
            <img src={config.icon} alt='Icon' />
            <h6>{config.title}</h6>
          </div>
        );
      })}
    </section>
  );
};

export default App;
