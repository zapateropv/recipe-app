import { Link, Route, Routes } from 'react-router-dom'
import Recipes from "./Recipes"
import About from "./About"
import Contact from "./Contact"
import Modal from './Modal'

function Home() {
  return <div className='flex flex-col justify-center items-center gap-5 '>
    <h1 className='text-5xl font-jetbrains mt-40'>Welcome to Test Bite</h1>
    <p className='text-xl font-sans'>Discover delicious recipes from around the world.</p>
    <Link to='/recipes'><button className='bg-gray-700 text-white p-3 text-md rounded-md hover:bg-gray-900 cursor-pointer'>Explore Recipes</button></Link>
  </div>
}

function App() {
  return (
    <>
      <div className='flex justify-between items-center p-6 text-xl font-jetbrains bg-gray-800 text-white'>
        <ul><li><Link to="/">Test Bite</Link></li></ul>
        <nav >
          <ul className='flex justify-between gap-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Modal></Modal>
    </>
  )
}

export default App
