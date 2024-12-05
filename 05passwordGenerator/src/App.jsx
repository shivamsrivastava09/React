import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  let passRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)str+="0123456789"
    if(charAllowed)str+="!@#$%^&*+"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str[char]
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const copyPasswordToClipBoard = useCallback(()=>{
    passRef.current?.select();
    //passRef.current?.setSelectionRange(0,21);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-red-300 text-4xl px-5 py-10 text-center'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder='generated password'
          readOnly
          ref={passRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg'
          onClick={copyPasswordToClipBoard}
          >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={1}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{setNumberAllowed((prev)=>!prev)}} 
          />
          <label>Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={()=>{setCharAllowed((prev)=>!prev)}} 
          />
          <label>Character</label>
        </div>

      </div>
      </div>
    </>
  )
}

export default App
