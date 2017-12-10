import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import { Store } from './common/store';

useStrict(true);

const store = new Store();

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root') as HTMLElement);
