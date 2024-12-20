import React from "react";

const Contact = () => {
  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to Contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form action="https://api.web3forms.com/submit" method="POST" className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h1 className="text-xl font-semibold mb-4 ">Send Your Message</h1>
            <div className="flex flex-col mb-4">
            <input type="hidden" name="access_key" value="d31edd54-633d-403e-83ce-a7399da2f0ae"/>
              <label className="block text-gray-700">FullName</label>
              <input
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="fullname"
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                 id="message"
                name="message"
                type="text"
                placeholder="Enter your fullname"
                required
              />
            </div>
            <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
