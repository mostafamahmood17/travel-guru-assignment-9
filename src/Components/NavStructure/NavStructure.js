import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TravelContext } from '../../App';
import logo from "../../Logo.png"

const NavStructure = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(TravelContext)
    return (
        <div>
             <nav className="navbar navbar-expand-lg transparent container fluid">
                <Link to="/"><div className="navbar-brand ml-5 rounded"><img src={logo} width="100px" alt="Travel Guru"/></div></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="ml-5">
                         <form className="form-inline my-2 my-lg-0">
                           <input className="form-control " type="search" placeholder="Destination Search" aria-label="Search"/>
                         </form>
                        </li>
                        <li className="nav-item active ml-3">
                            <a className="nav-link text-dark" href="#">News<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link text-dark" href="#">Destination</a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link text-dark" href="#">Blog</a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link text-dark" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            {
                            loggedInUser.name? loggedInUser.name : <Link to="/login"><button className="ml-5 btn btn-warning text-dark" href="#">Log In</button></Link>
                            }
                            {/* <Link to="/login"><button className="ml-5 btn btn-warning text-dark" href="#">Log In</button></Link> */}
                        </li> 
                        <li className="nav-item">
                        <button className="ml-5 btn btn-warning text-dark" onClick={()=>setLoggedInUser({})}>Sign Out</button>
                        </li>
                    </ul>
                </div> 
            </nav>
            
        </div>
    );
};

export default NavStructure;