import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-2xl {color} px-3 py-4 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}
            onClick={()=>{setColor("red")}}
            >red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}
            onClick={()=>{setColor("green")}}
            >green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}
            onClick={()=>{setColor("blue")}}
            >blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}
            onClick={()=>{setColor("white")}}
            >white</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}
            onClick={()=>{setColor("yellow")}}
            >yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}
            onClick={()=>{setColor("orange")}}
            >orange</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}
            onClick={()=>{setColor("peachpuff")}}
            >peachpuff</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}
            onClick={()=>{setColor("black")}}
            >Black</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
