import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Enter } from './pages/Enter'
import { Room } from './pages/Room'
import { AdminRoom } from './pages/AdminRoom'
import { User } from './pages/User'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path="/room" element={ <Room /> }/>
        <Route path="/room/admin" element={ <AdminRoom /> }/>
        <Route path="/register" element={ <Register /> } />  
        <Route path="/user" element={ <User /> } />  
        <Route path="/enter" element={ <Enter /> } />  
      </Routes>
    </BrowserRouter>
  )
}

export default App
