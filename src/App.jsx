import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import About from './pages/About';
import Wave from './components/Wave';
import Contact from './pages/Contact';
import Skills from './pages/Skills';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      <div>
        <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="/skills"  element={<Skills />}/>
          <Route path="/projects"  element={<Home />}/>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        
      </div>

      <Wave />

    </>
  )
}

export default App;
