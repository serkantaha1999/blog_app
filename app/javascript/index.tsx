import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './app/App';

document.addEventListener('turbo:load', () => {
  const rootElement = document.body.appendChild(document.createElement('div'));
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
