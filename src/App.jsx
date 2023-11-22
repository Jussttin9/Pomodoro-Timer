import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [minutesLeft, setMinutesLeft] = useState(25)
  const [pomoCount, setPomoCount] = useState(0)
  let secLeft = 0
  let minLeft = 25

  useEffect(() => {
    const interval = setInterval(() => {
      getTimeRemaining()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  function getTimeRemaining() {
    if(secLeft !== 0) {
      secLeft -= 1
    } else {
      secLeft = 59
      minLeft -= 1
      setMinutes((minutes) => minutes+1)
      setMinutesLeft(minLeft)
      setSeconds(0)
    }

    setSeconds((seconds) => seconds+1)
    setSecondsLeft(secLeft)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          minutes is {minutes} <br></br>
          seconds is {seconds} 
        </button>

        <button>
          minutes left is {minutesLeft}<br></br>
          seconds left is {secondsLeft}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
