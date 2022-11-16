import React from "react";
import Image from "next/image";


function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-gray-50 shadow-md p-5">

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
      <div>
        <h1>Center</h1>
      </div>
      
      {/* Right */}
      <div>
        <h1>Right</h1>
      </div>
    
    </header>
  );
}

export default Header;
