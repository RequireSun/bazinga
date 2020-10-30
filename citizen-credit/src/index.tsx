import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import Store from './stores';
import { Provider } from 'mobx-react';
import reportWebVitals from './reportWebVitals';

import './index.less';

const store = new Store();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Index />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
