import React from 'react'
import { Routes , Route } from 'react-router-dom'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NotFound from "./Pages/NotFound";
import Navbar1 from './units/Navbar1';

export default function App() {


  return (
    <div>
      <Navbar1/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
       </Routes>
    </div>
  )

}