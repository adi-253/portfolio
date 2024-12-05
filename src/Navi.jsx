import Home from "src/Home_page";
import About from "src/About_page";
import Projects from "src/Projects";
import Contact from "src/Contact";
import {Outlet, Link} from "react-router-dom";  

const Navigation=()=>{
    return(

        <ul class="nav justify-content-end">
            <li class="nav-item" id="home">
                <Link to="/" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/about" class="nav-link">About</Link>
            </li>
            <li class="nav-item">
                <Link to="/projects" class="nav-link">Projects</Link>
            </li>
            <li class="nav-item">
                <Link to="/contact" class="nav-link">Contact</Link>
            </li>
        </ul>
       
    )
}

export default Navigation;