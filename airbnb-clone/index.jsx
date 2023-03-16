import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import NavBar from './components/NavBar'
import Preface from './components/Preface'
import Card from './components/Card'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Preface />
    <Card img="../images/katie-zaferes.png" rating="5.0" reviewCount={6} country="Philippines" title="Life Lessons with Katie Zaferes" price={136}/>
    <App />
  </React.StrictMode>,
)
