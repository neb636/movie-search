import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { useStrict } from 'mobx';


useStrict(true);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
