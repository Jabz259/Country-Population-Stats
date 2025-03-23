import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//how is index.css being served here?
import './index.css'
import App from './pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
