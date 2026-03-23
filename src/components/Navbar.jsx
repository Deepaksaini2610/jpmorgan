import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white text-[#936846] px-8 py-4 shadow-md fixed top-0 left-0 w-[100vw]">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-semibold tracking-wide cursor-pointer">J.P.Morgan</div>

        {/* Middle Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:underline hover:decoration-blue-900">
            Solutions
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-blue-900">
            Who We Serve
          </li>
          <li className=" cursor-pointer hover:underline hover:decoration-blue-900">
            Insights
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-blue-900">
            About Us
          </li>
        </ul>

        {/* Right Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-[#936846] font-normal">
          <li className="hover:underline  cursor-pointer">Careers</li>
          <li className="hover:underline  cursor-pointer">News</li>
          <li className=" cursor-pointer hover:underline">Contact Us</li>
          <li className="hover:underline cursor-pointer">Login</li>
          <li className="hover:underline  cursor-pointer">Global</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
