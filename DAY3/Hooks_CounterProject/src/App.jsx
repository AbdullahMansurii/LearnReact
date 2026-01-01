import React, { useState } from 'react'

const App = () => {

  let [counter,setCounter]=useState(10)
  let [message,setMessage]=useState('')

  const addValue=()=>{
    if (counter < 20){
      setCounter(counter+1)
      setMessage('')
    }
    else{
      setMessage('Counter value cannot exceed 20')
    } 
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
      setMessage('')
    }
    else{
      setMessage('Counter value cannot be negative')
    }
  }
  return (
    <>
      <h1>React-Hooks-CounterProject</h1>
      <h2>Counter Value:{counter}</h2>
      {message && <h3 style={{color: 'red'}}>{message}</h3>}

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>

      <footer>{counter}</footer>
    </>
  )
}

export default App
