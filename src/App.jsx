import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Diabetopedia</h1> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>Hi! Welcome to !</h1>
        <p>Diabetopedia is your companion for diabetes management! Get personalized meal plans tailored to your needs, helping you maintain balanced blood sugar levels while enjoying delicious, nutritious meals. Take control of your health with smart, customized nutrition—made easy with Diabetopedia!</p>
        <h3>Before we begin please input your Name,Age and BMI below:</h3>
        <h3>User Details:</h3>
        <h4>Name:</h4>
        <h4>Height:</h4>
        <h4>Weight:</h4>
        <h4>BMI: </h4>
        <text>Click here to continue:</text>

        <button>Continue</button>
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
