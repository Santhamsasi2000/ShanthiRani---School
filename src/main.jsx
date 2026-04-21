import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Foundation from './Components/Home/Foundation.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
        <App />
        {/* <Foundation /> */}
    </StrictMode>
   </BrowserRouter>,
)
