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
                Full-Stack Software Engineer with 3+ years of experience designing and delivering scalable, cloud-native web applications. Skilled in React,
                Node.js, MongoDB, Azure, AWS, and Kafka. Known for improving engineering efficiency through automation, clean architecture, and cross-team
                collaboration. Fast learner and strong problem-solver who contributes to system design, mentors junior developers, and thrives in dynamic,
                fast-paced environments.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
