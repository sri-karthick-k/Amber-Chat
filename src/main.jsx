import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// import Router from './routes.js'
import ChatWindow from './components/chat/ChatWindow.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/chat" element={<ChatWindow />} /> 

      </Routes> 
    </Router>
    {/* <BrowserRouter>
      <Router />
    </BrowserRouter> */}
  </React.StrictMode>,
)
