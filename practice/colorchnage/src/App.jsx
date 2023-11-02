import React, { useState } from 'react'

const App = () => {
  const [color,setcolor]=useState('blue')
  return (
    <div id="container" style={{backgroundColor:color}} >
       <div id="color_holder">
          <button 
          onClick={()=>setcolor("red")}
          style={{backgroundColor:"red"}}>Red</button>
          <button 
            onClick={()=>setcolor("green")}
          style={{backgroundColor:"green"}}>Green</button>
          <button 
          onClick={()=>setcolor("Blue")}  
          style={{backgroundColor:"blue"}}>Blue</button>
          <button
          onClick={()=>setcolor("pink")}
           style={{backgroundColor:"pink"}}>Pink</button>
          <button
          onClick={()=>setcolor("grey")}
           style={{backgroundColor:"grey"}}>Grey</button>
          <button
          onClick={()=>setcolor("black")}
           style={{backgroundColor:"black" , color:'white'}}>Blck</button>
       </div>
    </div>
  )
}

export default App