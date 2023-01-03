import { useState } from 'react'
import './App.css';
import {
 Routes, Route,
} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AllNews from "../pages/AllNews"


function App() {

  return (

    <div className="App">
<AllNews/>
    </div>
  )
}

export default App
