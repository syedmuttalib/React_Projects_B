import React, { useState } from 'react'

const App = () => {
  const [count, setCount]=useState(0)
function start(){
  setInterval(()=>{,1000})
}
  return (
    <div>
    <h1>Stop Watch!</h1>
    <section>
      <h2>{count}</h2>
    </section>
    <div className='controller'>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    </div>
    </div>
  )
}

export default App