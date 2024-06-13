import {useEffect, useRef } from 'react'
import logo from '/public/Netflix_Logo_RGB.png'
import './Navbar.css'
import { logout } from '../../FireBase';

function Navbar() {

  const navref = useRef()

  useEffect(()=>{
     window.addEventListener('scroll',()=>{
 
      if(window.scrollY >= 80){
        navref.current.classList.add('nav-Dark')
    }else{
        navref.current.classList.remove('nav-Dark')
    }

     });
   
  },[]);

  return (
    <div ref={navref} className="flex justify-between w-screen h-20 
     lg:pl-20 lg:pr-20 text-white fixed z-50">

      <div  className="right flex items-center">

       <img  className=" w-25 h-11 mr-10" src={logo} alt="" />
       <ul className="flex gap-5 cursor-pointer">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
       </ul>

      </div>

      <div className="left flex items-center gap-4 ">

      <i className="fa-solid fa-magnifying-glass cursor-pointer text-xl"></i>
      <span>Children</span>
      <i className="fa-regular fa-bell cursor-pointer text-xl"></i>
      <img className="w-10" src="public\UserAvatar.png" alt="" />
      <div className="dropdown">
      <i className="fa-solid fa-caret-down cursor-pointer text-lg "></i>
      <p onClick={()=>logout()} className='hidden-content'><i className="fa-solid fa-arrow-right-from-bracket mr-2 ml-2"></i> Sign out of netflix</p>
      </div>  
      </div>

    </div>
  )
}

export default Navbar
