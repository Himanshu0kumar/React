import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Hooks are use the updation of UI ;
  let [counter , setCounter] = useState(1) ;
  // let counter = 5 ;
  const addValue =()=>{
    if(counter < 20){
      setCounter(counter + 1) ;
    }else{
      setCounter(20)
    }
   
  }
  const removeValue = ()=>{
    if(counter > 0){
      setCounter(counter -1) ;
    }else{
      setCounter(0)
    }
  }
  return (
    <>
      <h1>First verision</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick = {addValue}>add value {counter}</button>
      <button onClick = {removeValue} >remove value {counter} </button>

      <p>Footer : {counter} </p>
    </>
  )
}

export default App
