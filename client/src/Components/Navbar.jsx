import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div>
             <span className='font-bold text-xl'>VehiCheck</span>
        </div>

        <div>
          <input type="text" className='bg-gray-400 w-[30vw] px-3 py-1 rounded-2xl' placeholder='search'/>
        </div>
        
        <ul className='flex gap-5'>

            <NavLink className={(element)=>{return element.isActive? "NavActive" : "" }} to='/'><li className='hover:bg-gray-700 p-2 rounded-4xl' >HOME</li></NavLink>
            
            <NavLink className={(element)=>{return element.isActive? "NavActive" : "" }} to='/about'><li className='hover:bg-gray-700 p-2 rounded-4xl' >ABOUT</li></NavLink>
            
            <NavLink className={(element)=>{return element.isActive? "NavActive" : "" }} to='/contact'><li className='hover:bg-gray-700 p-2 rounded-4xl' >CONTACT</li></NavLink>
        
        </ul>
    </nav>
    
  )
}

export default Navbar
