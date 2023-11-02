import React, { useState } from 'react'
import "./App.css"

const App = () => {
const [color, setColor]=useState("olive")
return (
  <>

     <h1 style={{color:"white",  backgroundColor:"black", textAlign:"center"}}>
     Click to change the color property
     </h1>
    <div className='frame' style={{backgroundColor: color}}>

      <div className="btn1_setion">
           <button  onClick={()=>{setColor("red")}}
           style={{backgroundColor:"red"}}>Red</button>
      </div>
      <div className="btn1_setion">
           <button onClick={()=>{setColor("green")}}
           style={{backgroundColor:"green"}}>green</button>
      </div>
      <div className="btn1_setion">
           <button onClick={()=>{setColor("blue")}}
           style={{backgroundColor:"blue"}}>blue</button>
      </div>
      <div className="btn1_setion">
           <button onClick={()=>{setColor("black")}}
           style={{backgroundColor:"black", color:"white"}}>black</button>
      </div>  
      <div className="btn1_setion">
           <button onClick={()=>{setColor("pink")}}
           style={{backgroundColor:"pink"}}>pink</button>
      </div>
      <div className="btn1_setion">
           <button onClick={()=>{setColor("brown")}}
           style={{backgroundColor:"brown"}}>brown</button>
      </div>
    </div>
    </>
  )
}

export default App