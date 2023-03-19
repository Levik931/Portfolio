import React from "react";
import random from "../assets/random.jpeg";

export const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-white bg-gradient-to-r from-[#5D5E6B] to-[#354052]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
        <div className="pb-8 px-11 md:mt-40">
          <p className="text-4xl font-bold inline border-b-4 text-white border-pink-600 p">
            Work
          </p>
          <p className="py-6">Check out my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${random})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                React JS Quote Machine
              </span>

              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://levik-random-quote-machine-7.netlify.app"
                >
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Levik931/random-quote-machine"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
