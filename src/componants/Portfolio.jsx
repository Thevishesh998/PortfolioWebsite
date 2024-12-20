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
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "Reactjs",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Nodejs",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <div name="Portfolio" className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Project</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-8">
          {cardItem.map((data) => (
            <div
              className="md:w-[250px] md:h-[290px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 ml-3"
              key={data.id}
            >
              <img
                src={data.logo}
                className="w-[90px] h-[90px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className=" px-2 font-bold text-xl mb-3">{data.name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="px-2 py-2 space-x-3 gap-3 flex mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold px-3 py-1  rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
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
