import React from "react";
import {Link, NavLink} from 'react-router-dom';
import Theme from './Theme'
import './active.css'

function Navbar() {
  return (
    <div className='dark:bg-green-800 gap-4 bg-white text-gray-500 dark:text-gray-900 font-bold flex justify-center items-center border-b-[.01em] dark:border-gray-900 border-gray-200 w-full h-[3.5em]'>
     <div className="absolute left-4 sm:text-3xl flex items-center h-[3.5em] font-extrabold">
     <span className="selection:text-white dark:selection:text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-[#f8ff1d]">
      AGEGE
     </span>
    </div>
      <div className='flex gap-4'>

     <NavLink to='/'>Game</NavLink>
     <NavLink to='/howto'>How To</NavLink>
     <NavLink to='/about'>About</NavLink>
    </div>

     <div className='absolute right-4 flex justify-center items-center'>
     <Theme/>
     </div>
    </div>
  );
}

export default Navbar;
