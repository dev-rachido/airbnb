import React from "react";
import Image from "next/image";
import {GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon,SearchIcon} from '@heroicons/react/solid'


function Header() {
  return (
    <header className="sticky  top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">

      {/* Left */}
      <div className=" relative flex items-center h-10 cursor-pointer my-auto">
        <Image 
        src='https://links.papareact.com/qd3'
        layout='fill'
        objectFit="contain"
        objectPosition='left'
        /> 
      </div>
      
      {/* center */}
      
    <div className="flex items-center md:border-2
    rounded-full py-2 md:shadow-sm text-sm text-gray-500">
      <input type="text" placeholder="Search"
       className="pl-5 bg-transparent outline-none flex-grow "/>
       <SearchIcon className="h-7 hidden md:inline-flex bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2"/>
    </div>
      
      
      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer" >Become a host</p>
          <GlobeAltIcon className="h-7 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-7 cursor-pointer"/>
          <UserCircleIcon className="h-7 cursor-pointer"/>
        </div>
      </div>
    
    </header>
  );
}

export default Header;
