import { Link } from "react-router-dom"
import "../css/Navbar.css"

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar_brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar_links">
                <Link to="/" className="nav_link">Home</Link>
                <Link to="/favorites" className="nav_link">Favorites</Link>
                <Link to="/watched" className="nav_link">Watched</Link>
            </div>
            </nav>
    )
}

export default Navbar