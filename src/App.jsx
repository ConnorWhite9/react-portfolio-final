import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class="flex flex-row bg-indigo-500 header gap-x-96" >
        <a class="flex ">Logo</a>
        <nav class="flex justify-end gap-40 ">
          <a href="/">Uno </a>
          <a href="/"> Dos</a>
          <a href="/"> Tres</a>
        </nav>
      </header>
    </>
  )
}

export default App;
