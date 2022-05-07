import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Description from '../components/Description'
import Products from '../components/Products'

const MainRoutes = () => {

  return (
    <div>
         <Routes>
             <Route path='/' element={<Products/>}/>
             <Route path='/Products/:id' element={<Description/>}/>
         </Routes>
    </div>
  )
}

export default MainRoutes