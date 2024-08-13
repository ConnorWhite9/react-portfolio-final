import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import About from './pages/About';
import Wave from './components/Wave';
import Contact from './components/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="outline">
        <Navbar/>
      </div>
      
      <div>
        <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="/skills"  element={<Skills />}/>
          <Route path="/projects"  element={<Projects />}/>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        
      </div>

      <Wave />

    </>
  )
}

export default App;
