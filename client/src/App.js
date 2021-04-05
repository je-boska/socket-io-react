import './App.css'
import React, { useState, useEffect } from 'react'
import socketIoClient from 'socket.io-client'
import moment from 'moment'

const ENDPOINT = 'http://127.0.0.1:4001'

function App() {
  const [response, setResponse] = useState('')

  useEffect(() => {
    const socket = socketIoClient(ENDPOINT)
    socket.on('FromAPI', data => {
      setResponse(data)
    })
  }, [])

  return (
    <div className='App'>
      <p>
        It's{' '}
        <time dateTime={response}>
          {moment(response).format('MMMM Do YYYY, h:mm:ss a')}
        </time>
      </p>
    </div>
  )
}

export default App
