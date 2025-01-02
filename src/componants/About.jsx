import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="mt-4">Currently, I’m sharpening my skills in :</p>
        <ul className="list-disc list-inside ml-5">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
        </ul>
        <p className="mt-4">
          Working on:
          <ul className="list-disc list-inside ml-5">
            <li>Personal websites</li>
            <li>Complex web applications</li>
          </ul>
        </p>
        <p className="mt-4">
          Goal: To design responsive and interactive user-friendly interfaces.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <ul className="list-disc list-inside ml-5">
          <li>Bachelor of Computer Applications, School of Management Sciences, Varanasi, [2021-2024]</li>
          <li>Master of Computer Applications, ABES Engineering College, Ghaziabad, [Persuing]</li>
          
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ul className="list-disc list-inside ml-5">
          <li>Web Designing & Web Development/Aradhya technologies [2022]</li>
          <li>Graphics & Multimedia/Sri IT Solutions [2022]</li>
          <li>Python Programming/Techup Technologies [2022]</li>
        </ul>
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Achievement & Awards
        </h1>
        <ul className="list-disc list-inside ml-5">
          <li>Cricket/Man of the match and Tournament Final Winner [2022]</li>
          <li>Tug of War/ Final Winner [2023]</li>
          </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <span>
          I am dedicated to using my skills in web development to create
          solutions that make the digital world more accessible, engaging, and
          user-friendly. My mission is to contribute to projects that bring a
          positive impact to users while constantly improving my skills and
          knowledge in the field!
        </span>
      </div>
    </div>
  );
}

export default About;
