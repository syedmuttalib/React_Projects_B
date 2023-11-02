import React, { useCallback, useEffect, useState, useRef } from 'react'

function App ()  {
  const [length, setlength]=useState(18)
  const[numberallowed, setnumberallowed]=useState(false)
  const[charAllowed,setcharallowed]=useState(false)
  const[password,setpassword]=useState("")
// refhook
const Passwordref=useRef(null)
  const passwordgenarator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) {str +="0123456789"}  else {console.log( ' number_false:',+ str)}
    if(charAllowed) {str +="!@#$%^&*{}[]+-_~`"}  else {console.log( 'char_false:',+ str)}
    

    for(let i=1; i<=length;i++)
    {
      let char=Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setpassword(pass)
    console.log('loop pass=>',pass)

  },
    [length,numberallowed,charAllowed,setpassword])
  

  useEffect(()=>{
    passwordgenarator()
  },[length,numberallowed,charAllowed,passwordgenarator])  
  


  // const clk=onclick(()=>{
  //   alert(!Coped)
  // })
  // useref hook
 
  const copyPasswordToClipboard=useCallback(()=>{
    Passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div>
      <div id='container'>
         <h1 id='h1'>Password Genarator</h1>
        <div id="input_box">
          <input 
          type="text" 
          value={password} 
          id='input' 
          placeholder='Password' 
          readOnly 
          ref={Passwordref}
          />
          <button 
          onClick={copyPasswordToClipboard}
          id='copy'>Copy</button>
        </div>
        <div id="length">
          <div id="container1">
           <input 
           type='range' 
           min={6} 
           max={100} 
           value={length}
           onChange={(e)=>{setlength(e.target.value)}}
            /> <label>Length:{length}</label>
          </div>
          <div id="checks">
            <input 
            type="checkbox" 
            defaultChecked={numberallowed} 
            id='checkinp' 
            onChange={()=>{
              setnumberallowed((prev)=>!prev)}} /> <label>Number</label>
          </div>

          <div id="checks">
            <input type="checkbox" defaultChecked={charAllowed} id='checkinp' onChange={()=>{setcharallowed((prev)=>!prev)}} /> <label>Charector</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App