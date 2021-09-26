import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [shows,setShows]=useState(false)
 
  useEffect(()=>{
      window.addEventListener('scroll',()=>{
          if(window.scrollY > 50){
              setShows(true)
          }
          else{
              setShows(false)
          }
      })
     return ()=>{
         window.removeEventListener('scroll',()=>{
             if(window.scrollY > 50){
                 setShows(true)
             }
             else{
                 setShows(false)
             }
         })
     }
  },[])
  return (
    <div className="sticky z-50 top-0 bg-indigo-500">
      <div
        className={`grid  text-white sticky top-0  w-fullz-50 grid-cols-3 px-8 py-2 items-center   shadow-lg ${
          shows && " bg-indigo-800  z-50 text-white"
        }  `}
      >
        <div className="relative flex items-center">
          <img className="h-10 mr-2" src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-star-birthday-and-party-wanicon-flat-wanicon.png" />
          <h1 className="whitespace-nowrap font-bold">Star Marking</h1>
        </div>
        <div className="hidden md:inline-flex">
          <ul className="flex font-bold items-center space-x-10">
            <li className="px-3 py-1">
              <a href="/">Home</a>
            </li>

            <li className="px-3 py-1">
              <a href="/">About</a>
            </li>
            <li className="px-3 py-1">
              <a href="/">Portfolio</a>
            </li>
            <li className="px-3 py-1">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="relative flex items-center justify-self-end">
          <div className="bg-gray-200 flex items-center p-2 space-x-2 rounded-full">
            <input
              className=" w-full  hidden md:inline-flex px-4 bg-transparent text-gray-500 border-none outline-none pl-2 text-sm"
              type="text"
              placeholder="Search"
            />
            <img
              className="h-6 pr-2"
              src="https://img.icons8.com/ios/50/000000/search--v3.png"
            />
          </div>
        </div>
        <div
          onClick={() => setShow(!show)}
          className="flex justify-self-end md:hidden lg:hidden xl:hidden"
        >
          <img
            className="cursor-pointer"
            src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
          />
        </div>
        {show && <Items />}
      </div>
    </div>
  );
};

export default NavBar;

const Items = () => {
  return (
    <div className=" md:hidden lg:hidden  z-50 xl:hidden">
      <ul className="flex z-50  flex-col items-center left-0 space-y-5">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};
