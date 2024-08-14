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
import Email from './pages/Email';
import Wireframe from './pages/Wireframe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="main-container">
        <div className="outline">
          <Navbar/>
        </div>
        
        <div className="content-pusher">
          <Routes>        
            <Route path="/"  element={<Home />} />
            <Route path="/skills"  element={<Skills />}/>
            <Route path="/projects"  element={<Projects />}/>
            <Route path="/about" element={<About />}></Route> 
            <Route path="/email" element={<Email />}></Route>
            <Route path="/wireframe" element={<Wireframe />}></Route>
          </Routes>
          
        </div>

        <Wave />
      </div>
    </>
  )
}

export default App;
