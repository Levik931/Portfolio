import React, { useState } from "react";
import lev1 from "../assets/png_image1.PNG";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-700

    text-gray-300 z-10"
    >
      <div className="ml-4 mt-2">
        <Link to="home" smooth={true} duration={500}>
          <img
            className="mt-2 ml-2"
            src={lev1}
            alt="Logo"
            style={{ width: "95px", cursor: "pointer" }}
          />
        </Link>
      </div>
      {/* menu */}

      <ul className="hidden md:flex ">
        <li className="bg-clip-text font-bold hover:text-transparent hover:bg-amber-400">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="bg-clip-text font-bold hover:text-transparent hover:bg-amber-400">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="bg-clip-text font-bold hover:text-transparent hover:bg-amber-400">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="bg-clip-text font-bold hover:text-transparent hover:bg-amber-400">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="bg-clip-text font-bold hover:text-transparent hover:bg-amber-400">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 mr-6 mt-4"
        style={{ cursor: "pointer" }}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#5D5E6B] to-[#354052] flex flex-col justify-center items-center"
        }
      >
        <li className="py-3 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social */}
      <div className="flex fixed flex-col top-[15%] left-0">
        <ul>
          <li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/levik-kh/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Levik931"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:Levik.khachadoorian@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://www.icloud.com/iclouddrive/0ccimpFYimh2I0NL-0RaPbyjw#levik_resume"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
