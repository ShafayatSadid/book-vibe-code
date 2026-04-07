import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {

    const links = <>
        <NavLink className='btn btn-ghost' to={'/'}>Home</NavLink>
        <NavLink className='btn btn-ghost' to={'/books'}>Listed Books</NavLink>
        <NavLink className='btn btn-ghost' to={'/hum'}>Pages To Read</NavLink>
    </>
    
    
    return (
        <div className="navbar bg-base-100 max-w-299.5 mx-auto mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <nav
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        
                        {links}
                    </nav>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <nav className="menu menu-horizontal px-1">
                    {links}
                </nav>
            </div>
            <div className="navbar-end flex gap-4">
                <a className="btn btn-ghost button1">Sign in</a>
                <a className="btn btn-ghost button2">Sign up</a>
            </div>
        </div>
    );
};

export default NavBar;