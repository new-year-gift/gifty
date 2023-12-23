import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Routing from './components/Routing/Routing'
import persistStore from 'redux-persist/es/persistStore';
import { store } from './components/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CodeProvider from './components/Provider/CodeProvider';

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CodeProvider>
          <Routing />
        </CodeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
