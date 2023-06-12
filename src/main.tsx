import React from 'react';
import '@/common/scripts/rem';
import '@/common/styles/index.scss';
import { env } from './utils';
import ReactDOM from 'react-dom/client';
import './App.init';
import App from './App';
import VConsole from 'vconsole';

if (!env.isProd) {
  new VConsole();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
