import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './common/Navbar.jsx'
import './App.css'
import Home from './Home/Home.jsx'


function App() {

  return (
    <>
      <NavBar/>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
