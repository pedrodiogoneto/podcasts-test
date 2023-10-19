/* React imports */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* Third-party imports */
import { RouterProvider } from 'react-router-dom';

/* Local imports */
import reportWebVitals from './reportWebVitals';
import { router } from './routes/router';

/* CSS imports */
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
