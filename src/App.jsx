import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage'

function App() {


  return (
    <>

<Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
      </Routes>
      <Footer/>
</Router>

    </>
  )
}

export default App
