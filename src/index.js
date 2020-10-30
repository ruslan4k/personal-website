import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  environment: process.env.REACT_APP_ENV,
});

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
