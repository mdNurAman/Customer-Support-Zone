import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-sm py-4">
      <div className="container mx-auto">
        <div className="navbar flex justify-between items-center">
          <h1 className="font-semibold md:text-2xl md:font-bold">
            CS — Ticket System
          </h1>
          <div className="flex items-center gap-1 md:gap-4">
            <div className="md:hidden">
              <div className="flex gap-1 md:gap-4">
                <select name="" id="">
                  <option>
                    <button>Home</button>
                  </option>
                  <option>
                    <button>FAQ</button>
                  </option>
                  <option>
                    <button>Changelog</button>
                  </option>
                  <option>
                    <button>Blog</button>
                  </option>
                  <option>
                    <button>Download</button>
                  </option>
                  <option>
                    <button>Contact</button>
                  </option>
                </select>
              </div>
            </div>
            <div className="hidden md:flex gap-1 md:gap-4">
              <button>Home</button>
              <button>FAQ</button>
              <button>Changelog</button>
              <button>Blog</button>
              <button>Download</button>
              <button>Contact</button>
            </div>
            <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-1 md:px-4 py-2 rounded-md text-white  md:font-bold">
              + New Ticket
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
