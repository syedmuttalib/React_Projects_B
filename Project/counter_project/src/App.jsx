

import { useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(15)
  // let counter=15  Used in useState(15)
    const message="Value reached"
  // Value added function--1
  const addvalue = () => {
    // counter=counter+1 need to declare let in usestate if declare this code
    setCounter(counter + 1)
    if (counter >= 20) {
      setCounter(20)
      alert( message + " at 20" )
    }
    // console.log('Clicked' + counter)
  }

  // Value remove function
  const removeValue = () => {
    setCounter(counter - 1)
    if (counter <= 0) {
      setCounter(0)
      alert( message + " at 0")
    }
  }
  return (
    <>
      <h1>The value must not be zero or greater than twenty.</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add value{counter}</button>
      <br /><br />
      <button onClick={removeValue}>remove value {counter}</button>

    </>
  )
}

export default App
