import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Guidelines from './pages/Guidelines';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/guidelines',
        element: <Guidelines />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);

