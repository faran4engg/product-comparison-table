import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'app/domains/Common/components/error-boundary';
import 'assets/css/tailwind.css';
import AppMain from 'app/app-main';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <ErrorBoundary>
        <AppMain />
      </ErrorBoundary>
    </React.StrictMode>
  </HelmetProvider>,
  MOUNT_NODE,
);
