// Entry point for the build script in your package.json
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
  // <React.StrictMode>
  // <Provider>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Provider>
  // </React.StrictMode>,
);
