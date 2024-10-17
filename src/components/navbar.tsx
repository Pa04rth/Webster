"use client";
import React from "react";

export function Navbar() {


  function handleMenu() {
    const navDialog = document.getElementById("nav-dialog");
    if (navDialog) {
      navDialog.classList.toggle("hidden");
    }
  }
  return (

    <div>
      {/* <nav className="h-20 border-2 border-black"> */}
      {/* <h1>This is Navbar </h1> */}
      {/* </nav> */}



      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
     <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
     </a>
     <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
     </button>
     <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg></button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
     </div>
      </div>
      </nav>





       <div className="w-full h-40 ">
      <nav className="p-3 flex border-b-2 border-gray-300 justify-between items-center h-20 ">
        <a href="./" id="brand1" className="flex gap-2 items-center">
          <img
            src="../images/logo2.png"
            className="max-h-20 max-w-40 object-cover"
            alt="logo"
          />
        </a>
        <div id="nav-menu" className="hidden lg:flex gap-12">
          <a href="#" className="relative group text-black font-semibold ">
            Products
            <span className="ml-2 inline-block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500 transition-all duration-300 ease-in-out  group-hover:-translate-y-2"></span>
          </a>
          <a href="#" className="text-black relative group font-semibold ">
            Developers
            <span className="ml-2 inline-block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500 transition-all duration-300 ease-in-out  group-hover:-translate-y-2"></span>
          </a>
          <a href="#" className="text-black relative group font-semibold ">
            Pricing
            <span className="ml-2 inline-block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500 transition-all duration-300 ease-in-out  group-hover:-translate-y-2"></span>
          </a>
          <a href="#" className="text-black font-semibold ">
            Blog
          </a>
          <a href="#" className="text-black font-semibold ">
            Support
          </a>
          <a href="#" className="text-black relative group font-semibold ">
            Company
            <span className="ml-2 inline-block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500 transition-all duration-300 ease-in-out  group-hover:-translate-y-2"></span>
          </a>
        </div>
        <div className="hidden lg:flex gap-2 flex-row">
          <button className="rounded-lg py-2 px-4 font-semibold text-lg font-poppins border border-gray-400 hover:bg-slate-100">
            Sign In
          </button>
          <button className="rounded-lg p-3 font-bold text-lg bg-blue-600 text-white hover:bg-blue-900">
            Get Started
          </button>
        </div>

        <button className="p-2 lg:hidden" onClick={handleMenu}>
          <img src="../images/menu.png" className="h-6 w-6" alt="menu" />
        </button>

        <div
          id="nav-dialog"
          className="hidden fixed z-10 md:hidden bg-white inset-0 p-3"
        >
          <div
            id="nav-bar"
            className="flex border-b-2 h-18 border-gray-300 justify-between gap-96"
          >
            <a href="./" id="brand" className="flex gap-2 items-center">
              <img
                src="../images/logo2.png"
                className="max-h-20 max-w-40 object-cover"
                alt="logo"
              />
            </a>
            <button className="p-2 lg:hidden" onClick={handleMenu}>
              <img src="../images/close.png" className="h-10 w-20" alt="menu" />
            </button>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="m-3 p-3 hover:bg-gray-200 rounded-lg relative group font-semibold block"
            >
              Products
              <span className="ml-2 inline-block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500 transition-all duration-300 ease-in-out  group-hover:-translate-y-2"></span>
            </a>
            <a
              href="#"
              className="m-3 p-3 hover:bg-gray-200  relative group rounded-lg font-semibold block"
            >
              Developers
              <span className="ml-2 inline-block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500 transition-all duration-300 ease-in-out  group-hover:-translate-y-2"></span>
            </a>
            <a
              href="#"
              className=" m-3 p-3 hover:bg-gray-200 relative group rounded-lg font-semibold block"
            >
              Pricing
              <span className="ml-2 inline-block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500 transition-all duration-300 ease-in-out  group-hover:-translate-y-2"></span>
            </a>
            <a
              href="#"
              className=" m-3 p-3 hover:bg-gray-200  rounded-lg font-semibold block"
            >
              Blog
            </a>
            <a
              href="#"
              className=" m-3 p-3 hover:bg-gray-200  rounded-lg font-semibold block"
            >
              Support
            </a>
            <a
              href="#"
              className=" m-3 p-3 hover:bg-gray-200 relative group rounded-lg font-semibold block"
            >
              Company
              <span className="ml-2 inline-block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500 transition-all duration-300 ease-in-out  group-hover:-translate-y-2"></span>
            </a>
          </div>
          <div className="h-[1px] bg-gray-300"></div>
          <button className="w-full mt-6 rounded-lg py-2.5 px-3 font-bold text-lg font-poppins border border-gray-400 hover:bg-slate-100">
            Sign In
          </button>
          <button className="w-full mt-1 rounded-lg p-3 font-bold text-lg bg-blue-600 text-white hover:bg-blue-900">
            Get Started
          </button>
        </div>
      </nav>

     </div>
  )
  }

