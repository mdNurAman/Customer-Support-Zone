import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 justify-between px-10 md:px-0 py-14">
        <div>
          <h1 className="font-bold text-2xl">CS — Ticket System</h1>
          <p className="text-[#A1A1AA] py-2">
            Your one-stop solution for managing customer support tickets. We are
            here to help you! You will be satisfied with our service.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Company</h1>
          <ul>
            <li className="text-[#A1A1AA] py-2">About Us</li>
            <li className="text-[#A1A1AA] py-2">Our Mission</li>
            <li className="text-[#A1A1AA] py-2">Contact Sales</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Services</h1>
          <ul>
            <li className="text-[#A1A1AA] py-2">Products & Services</li>
            <li className="text-[#A1A1AA] py-2">Customer Stories</li>
            <li className="text-[#A1A1AA] py-2">Download Apps</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Information</h1>
          <ul>
            <li className="text-[#A1A1AA] py-2">Privacy Policy</li>
            <li className="text-[#A1A1AA] py-2">Terms & Conditions</li>
            <li className="text-[#A1A1AA] py-2">Join Us</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl pb-2">Social Links</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <i class="fa-brands fa-twitter"></i>
              <span className="text-[#A1A1AA] py-2"> @CS — Ticket System</span>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
              <span className="text-[#A1A1AA] py-2"> @CS — Ticket System</span>
            </li>
            <li>
              <i class="fa-brands fa-facebook"></i>
              <span className="text-[#A1A1AA] py-2"> @CS — Ticket System</span>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <span className="text-[#A1A1AA] py-2"> support@cst.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-10 md:px-0 pb-10">
        <hr className="border-[#2f2f30]" />
        <p className="text-center text-[#A1A1AA] py-4">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
