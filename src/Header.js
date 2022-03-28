import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./context/UserContext";
import userService from "./Services/userService";
import ShouldRender from "./utils/ShouldRender";
import { useNavigate } from "react-router-dom";

// after adding this nav-bar 
function Header()
{
    const { isLoggedIn, setLogIn} = useContext(UserContext);
    const navigate = useNavigate();

    const onLogout = () =>{
        userService.logout();
        setLogIn(false);
        navigate('/login');
    } 

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
            <ShouldRender cond ={!isLoggedIn}>
            <div>
                <Link to="/register" className="btn btn-danger">Register</Link>
                </div>  
                <div>
                    <Link to="/login" className="btn btn-danger">Login</Link>
                </div>
                </ShouldRender>
                <ShouldRender cond = {isLoggedIn}>
                <button onClick={ onLogout} className="btn btn-danger">Logout</button>
                </ShouldRender>
           </div>
    
    </nav>
}

export default Header;