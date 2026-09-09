import React from "react";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-r from-[#5D5E6B] to-[#354052] text-white">
      <div className="flex px-14 flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <Fade direction="left">
              <p
                className="
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-purple-500
                via-pink-500
                to-red-500
                "
              >
                Get to know me:
              </p>
            </Fade>
          </div>
          <div>
            <Fade>
              <p>
                Software Engineer with 4+ years building production systems for industrial automation, robotics, and cloud-connected warehouse operations.
                Designed and delivered an end-to-end robotic inspection platform orchestrating Boston Dynamics Spot missions, PLC and dock signals, AI
                verification, and warehouse workflows. Builds distributed backend services, stateful orchestration, APIs, and containerized Linux workloads,
                with hands-on experience integrating and troubleshooting Spot camera and I2C sensor payloads at the hardware/software boundary. Strong
                background in observability, production debugging, CI/CD, and cross-functional system integration.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
