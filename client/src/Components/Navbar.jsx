import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='text-white bg-gray-800 flex justify-between items-center px-4 py-2 relative'>
        <div>
             <span className='font-bold text-xl'>VehiCheck</span>
        </div>
        
        <ul className='flex gap-5'>
            <NavLink className={(element)=>{return element.isActive? "body" : "" }} to='/'><li className='hover:bg-gray-700 p-2 rounded-2xl' >HOME</li></NavLink>
            <NavLink className={(element)=>{return element.isActive? "body" : "" }} to='/about'><li className='hover:bg-gray-700 p-2 rounded-2xl' >ABOUT</li></NavLink>
            <NavLink className={(element)=>{return element.isActive? "body" : "" }} to='/contact'><li className='hover:bg-gray-700 p-2 rounded-2xl' >CONTACT</li></NavLink>
        </ul>
    </nav>
    
  )
}

export default Navbar
