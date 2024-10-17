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
              className="m-3 p-3 hover:bg-gray-200 rounded-lg font-semibold block"
            >
              Products
            </a>
            <a
              href="#"
              className="m-3 p-3 hover:bg-gray-200 rounded-lg font-semibold block"
            >
              Developers
            </a>
            <a
              href="#"
              className=" m-3 p-3 hover:bg-gray-200 rounded-lg font-semibold block"
            >
              Pricing
            </a>
            <a
              href="#"
              className=" m-3 p-3 hover:bg-gray-200 rounded-lg font-semibold block"
            >
              Blog
            </a>
            <a
              href="#"
              className=" m-3 p-3 hover:bg-gray-200 rounded-lg font-semibold block"
            >
              Support
            </a>
            <a
              href="#"
              className=" m-3 p-3 hover:bg-gray-200 rounded-lg font-semibold block"
            >
              Company
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
  );
}
