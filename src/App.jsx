import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Contact from './pages/Contact'
import Session from './pages/Sessions'
import About from './pages/About'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import Therapies from './pages/Therapies'

const App=() => {

  return (
    <div >

            
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/chat' element={<Chat/>}/>
        <Route exact path='/session' element={<Session/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path='/therapies' element={<Therapies/>}/>
      </Routes>
    </div>
  )
}

export default App
