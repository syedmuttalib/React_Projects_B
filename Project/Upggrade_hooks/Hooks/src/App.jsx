import React, { useState } from 'react'
import To_dolist from './component/To_dolist'
import To_dobody from './component/To_dobody'
const App = () => {
  const [listTodo,setListTodo]=useState([])
  let addList=(input)=>{
    setListTodo([...listTodo,input])
  } 
  return (
     <>
     <To_dolist addList={addList} / >
     <To_dobody/>
     </>
  )
}

export default App