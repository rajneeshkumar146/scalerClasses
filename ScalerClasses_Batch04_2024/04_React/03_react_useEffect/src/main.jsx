import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Form from './components/form/Form.jsx'
import HandleAllToDo from './components/todo/HandleAllToDo.jsx'
import GetData from './components/useEffect/GetData.jsx'
import UseEffectCleanupExamples from './components/useEffect/UseEffectCleanupExamples.jsx'
import UseEffectExamples from './components/useEffect/UseEffectExamples.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <HandleAllToDo /> */}
    {/* <Form/> */}
    {/* <GetData/> */}
    {/* <UseEffectExamples/> */}
    <UseEffectCleanupExamples />
  </StrictMode>,
)
