import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000000] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/be4bba7d-8a02-4475-bafd-c0c6d0a89263"
        className="flex flex-col max-w[600px] w-full"
        required
      >
        <div className="pb-8 px-11">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            Contact
          </p>
          <p className="text-white py-4">Submit the form bellow.</p>
        </div>
        <input
          className="bg-[#ffffff] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ffffff]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ffffff] p-2"
          name="message"
          rows="10"
          placeholder="Message..."
          minlength="10"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};
