import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 flex justify-center items-center p-7 md:p-20"
    >
      <form
        method="POST"
        action="https://getform.io/f/be4bba7d-8a02-4475-bafd-c0c6d0a89263"
        className="flex flex-col max-w[500px] w-full md:w-3/5"
        required
      >
        <div className="pb-8 px-11">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            Contact
          </p>
          <p className="text-white py-4">Submit the form bellow.</p>
        </div>

        <input
          className="bg-[#ffffff] p-2 rounded-sm"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ffffff] rounded-sm"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ffffff] p-2 rounded-sm"
          name="message"
          rows="10"
          placeholder="Message..."
          minlength="10"
          required
        ></textarea>
        <button className="text-white border-2 rounded-md hover:bg-red-800 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};
