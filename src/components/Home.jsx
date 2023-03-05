import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000000]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto sm:ml-10 px-14 flex flex-col justify-center h-full">
        <p className="text-pink-600 font-bold">Hi, My name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[white]">
          Levik Khachadoorian
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#c9cdd9]">
          I'm a Computer Information Systems Student
        </h2>
        <p className="text-[#acb2c5] py-10 max-w-[700px]">
          Creating solutions to complex problems and empowering people to
          achieve their full potential through technology
        </p>
        <div>
          <button className="text-white border-2 group px-5 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link
              onClick={Navbar.handleClick}
              to="work"
              smooth={true}
              duration={500}
            >
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
