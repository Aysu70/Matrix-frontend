import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assests/scss/style.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
