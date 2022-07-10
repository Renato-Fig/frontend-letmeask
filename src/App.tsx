import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
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
        <Route path="/new-room" element={ <NewRoom /> }/>
        <Route path="/register" element={ <Register /> } />  
        <Route path="/user" element={ <User /> } />  
        <Route path="/home" element={ <Home /> } />  
      </Routes>
    </BrowserRouter>
  )
}

export default App
