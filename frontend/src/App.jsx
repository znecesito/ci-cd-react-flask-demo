import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    // This should be your Render backend URL
    fetch('https://flask-backend-zpmv.onrender.com/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Failed to fetch it dummy'))
  }, [])

  return <h1>{message}</h1>
}

// function App() {
//   return <h1>Hello from static React</h1>;
// }

export default App
