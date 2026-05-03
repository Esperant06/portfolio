import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { APP_CONFIG } from './config/constants'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={APP_CONFIG.BASE_PATH}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
