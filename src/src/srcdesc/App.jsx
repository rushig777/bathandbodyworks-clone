import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import Pro from './Components/Pro'


// import Anand from './Components/Ac'
// import Accordian from './Accordian/Accordian'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
     <Pro/>
     
     {/* <Anand/>
     <Accordian/> */}
    </div>
  )
}

export default App
