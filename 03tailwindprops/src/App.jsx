import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-lime-200 text-black p-3 rounded-xl'>Tailwind Test</h1> 
      <Card username="Shivam Srivastava" btnText="click me"/>
      <Card username="Prakash Kumar" btnText='Hello'/>
    </>
  )
}

export default App
