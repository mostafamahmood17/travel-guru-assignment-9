import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TravelContext } from '../../App';
import logo from "../../Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

const NavStructure = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(TravelContext)
    return (
        // nav component
        <div>
             <nav className="navbar navbar-expand-lg transparent container">
                <Link to="/"><div className="navbar-brand ml-5 rounded"><img src={logo} width="100px" alt="Travel Guru"/></div></Link>
                <button className="bg-dark navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"><FontAwesomeIcon icon={faArrowAltCircleDown}/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="ml-5">
                         <form className="form-inline my-2 my-lg-0">
                           <input className="form-control " type="search" placeholder="Destination Search" aria-label="Search"/>
                         </form>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link text-dark">Destination</Link>
                        </li>
                        <li className="nav-item ml-5">
                           <Link to="/" className="nav-link text-dark">Contact</Link>
                        </li>
                        <li className="nav-item float-left">
                            {
                            loggedInUser.email? <h5 className="nav-link text-dark">{loggedInUser.name}</h5> : <Link to="/login"><button className="ml-5 btn btn-warning text-dark" href="#">Log In</button></Link>
                            }

                            
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