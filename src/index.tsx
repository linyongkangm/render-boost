/* @refresh reload */
import { render } from 'solid-js/web';
import 'normalize.css';
import './index.less';
import App from './page/App';

render(() => <App />, document.getElementById('root') as HTMLElement);
