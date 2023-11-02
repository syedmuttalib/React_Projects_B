import React, { useState } from 'react'

const To_dolist = (props) => {
  const [input,setinput]=useState([])

  return (
    <>
      <div id="container">
        <div id="center_container">
          <h1 >TO DO LIST </h1>
          <hr />
          <input type="text" placeholder='Enter your todo' 
          value={input}
            onChange={(e)=>{
              setinput(e.target.value)
            }}
          /> 
          <span onClick={()=>{
            props.addList(input)
            setinput('')
          }} >
          <i class="fa-regular fa-comment"></i>
          </span>
        </div>
      </div>
    </>
  )
}

export default To_dolist