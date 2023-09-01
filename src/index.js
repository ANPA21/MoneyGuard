import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { Provider } from 'react-redux';
import { peristor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={peristor}>
        <BrowserRouter basename="/MoneyGuard">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
