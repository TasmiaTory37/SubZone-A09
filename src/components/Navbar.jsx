
import { NavLink,Link } from 'react-router'
import logo from '../assets/logo.png'


const Navbar = () => {



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
                    <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''}  to='/contact'>Contact</NavLink> /</li>
                   
                    
                    
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
                    
    </ul>
  </div>
  <div className="navbar-end gap-2">
  
  <label tabIndex={0} className="relative group btn btn-ghost btn-circle avatar">
                   <button className='btn'>Login</button>
                       
               
        
            </label>
            
        </div>
        </div>
        </div >  
         );
};

export default Navbar;