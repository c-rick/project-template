import React from 'react'
import './App.scss'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link className="App-link" to="/hello">
          Hello
        </Link>
      </header>
    </div>
  )
}

export default App
