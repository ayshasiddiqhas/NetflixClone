import React from 'react'
import logo from '../../logo.png';
import {Link} from 'react-router-dom';
import {BiSearchAlt2} from "react-icons/bi";

const Header = () => {
    // console.log(logo);
  return (
    <nav className="header">
        <img src={logo} alt="logo"/>
        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recent">Recently Added</Link>
            <Link to="/mylist">My List</Link>
        </div>
        <BiSearchAlt2/>
    </nav>
  )
}

export default Header