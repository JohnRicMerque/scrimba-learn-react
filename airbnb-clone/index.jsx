import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import NavBar from './components/NavBar'
import Preface from './components/Preface'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Preface />
    <App />
  </React.StrictMode>,
)
