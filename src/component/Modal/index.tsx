import { Component, JSX, ParentComponent } from 'solid-js';
import * as config from '@component/config';
import './index.less';
const Mask: Component<{
  style?: JSX.CSSProperties;
  onClick?: JSX.CustomEventHandlersCamelCase<HTMLDivElement>['onClick'];
}> = (props) => {
  return <div class={config.prefixClassname('mask')} onClick={props.onClick} style={props.style}></div>;
};

export const Modal: ParentComponent<{
  open?: boolean;
  title?: JSX.Element;
  closeIcon?: boolean | JSX.Element;
  onClose?(): void;
  bodyStyle?: JSX.CSSProperties;
  style?: JSX.CSSProperties;
}> = (props) => {
  if (!props.open) {
    return null;
  }
  return (
    <div class={config.prefixClassname('modal')} style={props.style}>
      <Mask onClick={props.onClose}></Mask>
      <div class={config.prefixClassname('modal_container')}>
        {props.title && <header class={config.prefixClassname('modal_header')}>{props.title}</header>}
        <section class={config.prefixClassname('modal_body')} style={props.bodyStyle}>
          {props.children}
        </section>
      </div>
    </div>
  );
};
