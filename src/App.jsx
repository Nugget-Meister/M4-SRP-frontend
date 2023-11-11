import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './common/Navbar.jsx'
import './App.css'
import Home from './Home/Home.jsx'
import ItemDetails from './ItemDetails/ItemDetails.jsx'
import EditItem from './Item/EditItem.jsx'
import NewItem from './Item/NewItem.jsx'


function App() {

  return (
    <>
      <NavBar/>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<ItemDetails/>}/>
            <Route path='/:id/edit' element={<EditItem/>}/>
            <Route path='/new' element={<NewItem/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
