import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import aws from "../assets/aws.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import { Fade } from "react-awesome-reveal";
import { FaDocker, FaLinux, FaNetworkWired, FaMicrochip, FaInfinity, FaChartLine, FaBrain } from "react-icons/fa";
import { TbRobot, TbApi } from "react-icons/tb";
import { MdPrecisionManufacturing } from "react-icons/md";

export const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 pt-28 flex flex-col w-full">
        <div className="px-12">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-6">Some of the Technologies that I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <Fade direction="left" cascade damping={0.2}>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={html} alt="HTML" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={css} alt="HTML" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={javascript} alt="HTML" />
              <p className="my-4">javaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={react} alt="HTML" />
              <p className="my-4">React</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={node} alt="HTML" />
              <p className="my-4">NODE</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={aws} alt="HTML" />
              <p className="my-4">AWS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={github} alt="HTML" />
              <p className="my-4">GitHub</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={tailwind} alt="HTML" />
              <p className="my-4">tailwind</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <FaDocker className="w-20 h-20 mx-auto" />
              <p className="my-4">Docker</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <FaLinux className="w-20 h-20 mx-auto" />
              <p className="my-4">Linux</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <TbRobot className="w-20 h-20 mx-auto" />
              <p className="my-4">Robotics</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <MdPrecisionManufacturing className="w-20 h-20 mx-auto" />
              <p className="my-4">Industrial Automation</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <FaBrain className="w-20 h-20 mx-auto" />
              <p className="my-4">AI / Computer Vision</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <FaNetworkWired className="w-20 h-20 mx-auto" />
              <p className="my-4">Distributed Systems</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <TbApi className="w-20 h-20 mx-auto" />
              <p className="my-4">REST APIs</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <FaMicrochip className="w-20 h-20 mx-auto" />
              <p className="my-4">I2C / Hardware</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <FaChartLine className="w-20 h-20 mx-auto" />
              <p className="my-4">Observability</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <FaInfinity className="w-20 h-20 mx-auto" />
              <p className="my-4">CI/CD</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
