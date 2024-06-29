import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/userContextProvider'
function App() {
  

  return (
    <UserContextProvider>
        <h1>use the context Api </h1>
        <Login></Login>
        <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
