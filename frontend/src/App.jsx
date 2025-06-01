import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')
  const [status, setStatus] = useState('Loading...')
  const [health, setHealth] = useState('Loading...')

  useEffect(() => {
    fetch('https://flask-backend-zpmv.onrender.com/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Failed to fetch message'))

    fetch('https://flask-backend-zpmv.onrender.com/api/status')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('Failed to fetch status'))

    fetch('https://flask-backend-zpmv.onrender.com/api/health')
    .then(res => res.json())
    .then(data => setHealth(data.health))
    .catch(() => setHealth('Health check failed'))

  }, [])

  return (
    <div>
      <h1>{message}</h1>
      <h2>Status: {status}</h2>
      <h3>Health: {health}</h3>
    </div>
  )
}

export default App
