import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//how is index.css being served here?
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/root.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
