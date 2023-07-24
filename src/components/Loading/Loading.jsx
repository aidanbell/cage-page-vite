import { useState, useEffect } from 'react';

export default function Loading() {
  let timer
  const [dots, setDots] = useState('')
  useEffect(() => {
    timer = setInterval(() => {
      setDots(dots => dots.length < 3 ? dots + '.' : '')
    }, 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="loading">
      <h1>Loading {dots}</h1>
    </div>
  )
}