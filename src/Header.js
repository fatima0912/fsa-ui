import { Link } from "react-router-dom";
// after adding this nav-bar 
function Header()
{
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container-fluid">
    <a className = "navbar-brand" href= "#" > Fsa jobs </a>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to = "/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to= "/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link> 
                </li>
            </ul>
            <div>
                <Link to="/register" class="btn btn-danger">Register</Link>
                </div>  
                <div>
                    <Link to="/login" class="btn btn-danger">Login</Link>
                </div>
           </div>
    
    </nav>
}

export default Header;