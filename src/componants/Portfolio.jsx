import React from "react";
import python from "../../public/python.webp";
import java from "../../public/java.png";
import mongoDB from "../../public/mongoDB.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      description: "A NoSQL database for modern apps.",
      videoLink: "https://www.mongodb.com/video",
      sourceCodeLink: "https://github.com/mongodb/examples",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      description: "A minimal Node.js framework for web apps.",
      videoLink: "https://www.youtube.com/expressjs",
      sourceCodeLink: "https://github.com/expressjs",
    },
    {
      id: 3,
      logo: reactjs,
      name: "Reactjs",
      description: "A JavaScript library for building UIs.",
      videoLink: "https://reactjs.org/docs/getting-started.html",
      sourceCodeLink: "https://github.com/facebook/react",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Nodejs",
      description: "A JavaScript runtime for scalable apps.",
      videoLink: "https://nodejs.org/en/about/",
      sourceCodeLink: "https://github.com/nodejs",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      description: "A versatile programming language for all.",
      videoLink: "https://www.python.org/doc/",
      sourceCodeLink: "https://github.com/python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      description: "A robust object-oriented programming language.",
      videoLink: "https://www.oracle.com/java/",
      sourceCodeLink: "https://github.com/java",
    },
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Project</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
          {cardItem.map((data) => (
            <div
              className="md:w-[250px] md:h-[290px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={data.id}
            >
              <img
                src={data.logo}
                className="w-[90px] h-[90px] p-1 rounded-full border-[2px]"
                alt={`${data.name} logo`}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-3">{data.name}</div>
                <p className="px-2 text-gray-700">{data.description}</p>
              </div>
              <div className="px-2 py-2 space-x-3 flex mt-2">
                <button
                  onClick={() => window.open(data.videoLink, "_blank")}
                  className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold px-3 py-1 rounded"
                >
                  Video
                </button>
                <button
                  onClick={() => window.open(data.sourceCodeLink, "_blank")}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
