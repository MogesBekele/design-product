import React from "react";
import image2 from "../assets/image2.avif";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const About = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-row gap-4 w-full md:w-1/3 hover:scale-105 transform transition-all duration-300">
          <div className="w-24 h-24">
            <img src={image3} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold  text-red-400 ">01</h2>
            <h4 className="text-md font-bold">Reviving Retro PCs</h4>
            <p className="text-sm text-gray-600">What happens when old PCs get modern updates</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full md:w-1/3  hover:scale-105 transform transition-all duration-300">
          <div className="w-24 h-24">
            <img src={image2} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold  text-red-400">02</h2>
            <h4 className="text-md font-bold">Reviving Retro PCs</h4>
            <p className="text-sm text-gray-600">What happens when old PCs get modern updates</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full md:pl-8 md:w-1/3 hover:scale-105 transform transition-all duration-300">
          <div className="w-24 h-24">
            <img src={image4} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold  text-red-400">03</h2>
            <h4 className="text-md font-bold">Reviving Retro PCs</h4>
            <p className="text-sm text-gray-600">What happens when old PCs get modern updates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
