import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//how is index.css being served here?
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import router from './routes/reactrouter'

import { RouterProvider } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
