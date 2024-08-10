import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Navbar from './components/Navbar'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div>
        <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="/skills"  element={<Layout />}/>
          <Route path="/projects"  element={<Home />}/>
          <Route path="/about" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
