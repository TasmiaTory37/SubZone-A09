import React, { useContext, } from 'react';
import { NavLink,Link } from 'react-router'
import logo from '../assets/logo.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut,loading}=useContext(AuthContext); 
  if (loading) {
    return <span className="loading loading-dots loading-xl flex justify-between items-center mx-auto"></span>;  // You can replace this with a spinner or skeleton loader
  }


    return (
      
        <div className=''>
            <div className="navbar w-[95%] lg:w-4/5 mx-auto pt-5 justify-between items-center">
  <div className="navbar-start justify-between lg:justify-start items-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
                    <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''}  to='/'>Home</NavLink>
                    </li>
   
                    <li>
                    <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''}  to='/about'>About</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''}  to='/faq'>FAQ</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''}  to='/contact'>Contact</NavLink>
                   
                    
                    </li>
                    {user && (
                    <li>
                        <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''} to="/my-profile">My Profile</NavLink>
                    </li>
                    )}
                </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-[50px] h-[50px]' src={logo} alt="" />
                <Link to={'/'} className="text-xl">SubZone</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                 <li>
                    <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''}  to='/'>Home</NavLink>
                    </li>
   
                    <li>
            
                    <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''}  to='/about'>About</NavLink>
               
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''}  to='/faq'>FAQ</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''}  to='/contact'>Contact</NavLink>
                    
                    
                    </li>
                    {user && (
                    <li>
                        <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''} to="/my-profile">My Profile</NavLink>
                    </li>
                    )}
    </ul>
  </div>
  <div className="navbar-end gap-2">
  
  <label tabIndex={0} className="relative group btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                       
                        {user && user?.email ? (
            <div>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 shadow hidden group-hover:block">
                  {user.displayName || 'Anonymous User'}
                </div>
            </div>
          ) : (
            ""
          )}
                    </div>
                </label>
                {user && user?.email ? (
          <button onClick={logOut} className="btn ">
            Log-Out
          </button>
        ) : (
          <Link to="/auth/register" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
            </div>
            
        </div>
        </div>
    );
};

export default Navbar;