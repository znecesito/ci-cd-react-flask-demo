import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error fetching data'))
  }, [])

  return <h1>{message}</h1>
}

export default App
