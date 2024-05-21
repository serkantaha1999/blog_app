import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './app/App';
import {BrowserRouter} from 'react-router-dom';

// @ts-ignore
document.addEventListener('turbo:load', () => {
  // @ts-ignore
    const rootElement = document.body.appendChild(document.createElement('div'));
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
});
