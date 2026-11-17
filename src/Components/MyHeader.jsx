import React from 'react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";


export  const MyHeader = () => {
  const [menuOpen, setmenuOpen] = useState(false)
  const navLinkClass = ({isActive }) => `transition-colors hover:text-red-300  ${isActive ? "text-red-500 font-semibold" : "text-gray-300"}`

  return (
     <div>
       <header className='bg-gray-950 p-8'>
        <nav className='px-6 max-w-7xl mx-auto'>

          <div className='flex justify-between items-center'></div>
          <div className='text-2xl font-bold'>
            Movie <span className='text-red-500'>Zone</span>
          </div>
          {/*asztali menu*/}
          <div className='hidden-min-[580px]: flex gap-8'>
            <NavLink to='/' className={navLinkClass}>Kezdőlap</NavLink>
              <NavLink to='/Movies' className={navLinkClass}>Filmek</NavLink>
                <NavLink to='/Tvshows' className={navLinkClass}>Sorozatok</NavLink>
                  <NavLink to='/SearchMedia' className={navLinkClass}>Keresés</NavLink>
                    

          </div>
          {/*hembörger menü*/}
          <button   className="hidden-min-[581px]: text-3xl flex " onClick={()=>setmenuOpen(!menuOpen)}>
{menuOpen ? <IoMdClose/> : <GiHamburgerMenu/> }
          </button>
          {menuOpen && (
            <div className=' flex flex-col hidden-min-[581px]   gap-4'>
            <NavLink to='/' className={navLinkClass}>Kezdőlap</NavLink>
              <NavLink to='/Movies' className={navLinkClass}>Filmek</NavLink>
                <NavLink to='/tv' className={navLinkClass}>Sorozatok</NavLink>
                  <NavLink to='/SearchMedia' className={navLinkClass}>Keresés</NavLink>
                    

          </div>
          ) }
        </nav>
       </header>
       <main> 
        <Outlet/>
       </main>
    </div>
  )
}


