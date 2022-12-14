// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store';
import App from './App';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
);



// root.render(
//   <StrictMode>
//     <Provider>
//     <App />
//     </Provider>
//   </StrictMode>,
