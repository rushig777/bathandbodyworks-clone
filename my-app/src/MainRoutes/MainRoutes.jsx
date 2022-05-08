

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'
import { Profile } from '../pages/Profile'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
        </Routes>
    </div>
  )
}
