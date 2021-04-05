import './App.css'
import React, { useState } from 'react'
import ClientComponent from './components/ClientComponent'

function App() {
  const [loadClient, setLoadClient] = useState(true)

  return (
    <>
      <div className='App'>
        <button onClick={() => setLoadClient(prevState => !prevState)}>
          {loadClient ? 'STOP CLIENT' : 'START CLIENT'}
        </button>
        {loadClient ? <ClientComponent /> : null}
      </div>
    </>
  )
}

export default App
