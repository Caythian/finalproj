import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Gamedesign from './Gamedesign';
import Escapism from './Escapism';
import More from './More';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
reportWebVitals();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/gamedesign",
    element: <Gamedesign/>,
  },
  {
    path: "/escapism",
    element: <Escapism/>,
  },
  {
    path: "/more",
    element: <More/>,
  }
]);
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
