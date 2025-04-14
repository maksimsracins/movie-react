import './css/App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import Watched from './pages/Watched.jsx'
import Navbar from './components/Navbar.jsx'
import {MovieProvider} from './contexts/MovieContext.jsx'


function App() {


  return (
    <MovieProvider>

    <div>
      <Navbar />
    <main className='main_content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/watched" element={<Watched />}/>
      </Routes>
    </main>
    </div>
    </MovieProvider>
  )
}

export default App
