import {
  children,
  Component,
  createRoot,
  createSignal,
  JSX,
  onCleanup,
  ParentComponent,
  Show,
  splitProps,
} from 'solid-js';
import { Portal, render } from 'solid-js/web';
import * as config from '@component/config';
import './index.less';
const Mask: Component<{
  style?: JSX.CSSProperties;
  onClick?: JSX.CustomEventHandlersCamelCase<HTMLDivElement>['onClick'];
}> = (props) => {
  return <div class={config.prefixClassname('mask')} onClick={props.onClick} style={props.style}></div>;
};

interface ModalProps {
  open?: boolean;
  title?: JSX.Element;
  closeIcon?: boolean | JSX.Element;
  onClose?(): void;
  onCloseAfter?(): void;
  bodyStyle?: JSX.CSSProperties;
  style?: JSX.CSSProperties;
}
const ModalPortal: ParentComponent<ModalProps> = (props) => {
  const c = children(() => props.children);
  onCleanup(() => {
    props.onCloseAfter?.();
  });
  return (
    <Portal>
      <div class={config.prefixClassname('modal')} style={props.style}>
        <Mask onClick={props.onClose}></Mask>
        <div class={config.prefixClassname('modal_container')}>
          {props.title && <header class={config.prefixClassname('modal_header')}>{props.title}</header>}
          <section class={config.prefixClassname('modal_body')} style={props.bodyStyle}>
            {c()}
          </section>
        </div>
      </div>
    </Portal>
  );
};

const ModalNormal: typeof ModalPortal = (props) => {
  return (
    <Show when={props.open}>
      <ModalPortal {...props}></ModalPortal>
    </Show>
  );
};

type ModalMethodProps = Omit<ModalProps, 'open'> & {
  content?: JSX.Element;
};
const ModalWithOpen: Component<ModalMethodProps> = (props) => {
  const [_, others] = splitProps(props, []);
  const [open, setOpen] = createSignal(true);
  return (
    <ModalNormal
      {...others}
      open={open()}
      onClose={() => {
        setOpen(false);
        props.onClose?.();
      }}
    >
      {props.content}
    </ModalNormal>
  );
};

function info(props: ModalMethodProps) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  render(
    () => (
      <ModalWithOpen
        {...props}
        onCloseAfter={() => {
          props.onCloseAfter?.();
          div.remove();
        }}
      />
    ),
    div
  );
}

export const Modal = Object.assign(ModalNormal, { info });
