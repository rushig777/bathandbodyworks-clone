import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Shampoo, Shampooone} from './Component/Shampoo'
// import Upperimg from './Component/upperimg'


function App() {
 

  return (
    <div className="App">
      <Shampooone/>
 {/* <Upperimg/> */}
      <Shampoo/>

    </div>
  )
}

export default App
