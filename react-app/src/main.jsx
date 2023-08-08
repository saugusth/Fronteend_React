import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const greeting = <h1>Hello, World</h1>

//const greeting = React.createElement('h1', null, "Hello, World");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    {greeting}
  </React.StrictMode>,
)
