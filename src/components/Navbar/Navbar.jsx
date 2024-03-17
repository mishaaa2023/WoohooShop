import React, { useState } from 'react'
import { navLinks } from '../../data/data'
import './Navbar.css'

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false);
let MenuHandler=()=>{
  setshowmenu(! showmenu)
}


  return (
   <>
  <header className="text-gray-600 body-font">
<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a className="flex title-font font-medium items-center text-red-500 mb-4 md:mb-0">
    
    <span className="ml-3 text-3xl madimi-one-regular">Wohoo Shop</span>
  </a>
  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <a className="mr-5 hover:text-red-500"href='/'>Home</a>
    <a className="mr-5 hover:text-red-500"href='/about'>About us</a>
    <a className="mr-5 hover:text-red-500"href='/shopnow'>Shop now</a>
   
  </nav>
  <button className="ml-4 inline-flex text-red-500 border-0 py-2 px-6 focus:outline-none hover:text-red-700 rounded text-lg cart">
    <ion-icon name="cart" aria-hidden="true" ></ion-icon>
  </button>
</div>
</header>
   </>
  )
}

export default Navbar