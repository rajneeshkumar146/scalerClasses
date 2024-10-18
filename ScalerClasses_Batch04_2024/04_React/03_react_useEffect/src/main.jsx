import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HandleAllToDo from './components/todo/HandleAllToDo.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HandleAllToDo />
  </StrictMode>,
)
