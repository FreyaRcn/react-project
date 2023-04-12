import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './components/App.css'
import { Link } from "react-router-dom";




function App() {


  return (
    <div className="app-home">
      <Navbar/>
      <div className="card">
      <h1>Welcome!</h1>
      <h3>What do you feel like cooking today?</h3>
      </div>
      <div className="card-links">
      <Link to="Asian"><img src="../images/asian1.jpg" alt="" /></Link>
      <span className='title'>Asian Recipes</span></div>
      <div className='card-links'>
      <Link to="Western"><img src="../images/western.jpg" alt="" /></Link>
      <span className='title'>Western Recipes</span>
      </div>
      <Footer/>
    </div>
  )
}

export default App
