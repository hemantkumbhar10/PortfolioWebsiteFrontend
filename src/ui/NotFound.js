import { NavLink } from "react-router-dom";


import './styles/NotFound.css'


const NotFound = () =>{
    return(
        <div className='NotFound'>
            <div className="notfoundimg">
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="error 404" />
            </div>
                <div className="notfoundtitles">
                <h1>404</h1>
                <h4>Either I broke something or you cannot type! too bad!</h4>
                <NavLink to="/">Return to happiness! </NavLink>
                </div>
        </div>
    )
};

export default NotFound;