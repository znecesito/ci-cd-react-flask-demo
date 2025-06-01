import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')
  const [status, setStatus] = useState('Loading...')

  useEffect(() => {
    fetch('https://flask-backend-zpmv.onrender.com/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Failed to fetch message'))

    fetch('https://flask-backend-zpmv.onrender.com/api/status')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('Failed to fetch status'))
  }, [])

  return (
    <div>
      <h1>{message}</h1>
      <h2>Status: {status}</h2>
    </div>
  )
}

export default App
