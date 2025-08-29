import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './Components/Header'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Clans from './pages/Clans'
import SingleCharacter from './pages/SingleCharacter'

function App() {

  return (
    <main className="bg-gray-900">
      <Header />

      <Routes>
        {/* <Route path='/users/:page' element={<ListOfUsers />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/clans' element={<Clans />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/character/:id' element={<SingleCharacter />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
