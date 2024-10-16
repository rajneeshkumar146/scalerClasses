import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddTask_betterVersion from './AddTask_betterVersion.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddTask_betterVersion />
  </StrictMode>,
)
