import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar } from "./Navbar";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import aws from "../assets/aws.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-700">
      {/* container */}
      <div className="max-w-[1000px] mx-auto sm:ml-0 flex flex-col justify-center h-full">
        <div className="pl-20">
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
        </div>
        <div className="pl-20">
          <button className="text-white border p-1 rounded-lg group px-14 my-2 flex items-center hover:bg-amber-500 hover:border-">
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
          <div />
        </div>
        <div className="pt-40 max-h-4 w-screen">
          <Marquee pauseOnHover speed={100} autoFill>
            <div className="w-16 mx-14 mt-18">
              <img src={html} alt="html" />
            </div>
            <div className="w-16 mx-14 mt-18">
              <img src={css} alt="css" />
            </div>
            <div className="w-16 mx-14 mt-18">
              <img src={javascript} alt="java" />
            </div>
            <div className="w-16 mx-14 mt-18">
              <img src={react} alt="react" />
            </div>
            <div className="w-16 mx-14 mt-18">
              <img src={node} alt="node" />
            </div>
            <div className="w-16 mx-14 mt-18">
              <img src={aws} alt="aws" />
            </div>
            <div className="w-16 mx-14 mt-18">
              <img src={github} alt="github" />
            </div>
            <div className="w-16 mx-14 mt-18">
              <img src={tailwind} alt="tailwind" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Home;
