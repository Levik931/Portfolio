import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar } from "./Navbar";
import { Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-700">
      {/* container */}
      <div className="max-w-[1000px] mx-auto sm:ml-10 px-14 flex flex-col justify-center h-full">
        <Fade direction="down">
          <p className="text-yellow-500 font-bold">Hi, My name is</p>
        </Fade>
        <Fade>
          <h1 className="text-4xl sm:text-6xl font-bold text-amber-400">
            Levik K.
          </h1>
        </Fade>
        <Fade direction="right">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-400">
            I'm a Computer{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Information Systems
            </span>{" "}
            Student
          </h2>
        </Fade>
        <Fade direction="up">
          <p className="text-[#acb2c5] py-10 max-w-[700px]">
            Creating solutions to complex problems and empowering people to
            achieve their full potential through technology
          </p>
        </Fade>
        <div>
          <button className="text-white border p-1 rounded-lg group px-5 my-2 flex items-center hover:bg-amber-500 hover:border-">
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
