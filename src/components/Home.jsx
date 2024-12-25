import React from "react";
import image from "../assets/images.jfif"

const Home = () => {
  return (
    <div className=" mt-10 flex flex-col md:flex-row">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="max-w-3/4  ">
          <img
            src={image}
            alt="Web 3.0"
            className="w-full h-48"
          />
         <div className="mt-6 flex flex-col md:flex-row justify-between">
  {/* Heading Section */}
  <div className="text-gray-950 font-bold text-5xl md:w-1/2">
    <h3>The Bright</h3>
    <h3>Future Of</h3>
    <h3>Web 3.0?</h3>
  </div>

  {/* Paragraph and Button Section */}
  <div className="mt-4 md:mt-0 md:w-1/2 ">
    <p className="text-gray-600 text-base leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
      eget felis in sapien vehicula egestas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nobis mollitia tempora quo at! Culpa aut molestiae ut ab deleniti?
    </p>
    <button className="mt-4 px-8 py-2 bg-red-500 text-black font-semibold hover:bg-red-600 transition-all">
      Read More
    </button>
  </div>
</div>

        </div>

        {/* Right Section */}
        <div className="bg-gray-950 text-white p-4 md:w-3/4">
          <h1 className="text-3xl font-bold mb-6 text-yellow-200">New</h1>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold">Hydrogen vs Electric Cars</h4>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem, harum.
              </p>
              <hr className="border-gray-600 my-4" />
            </div>
            <div>
            <h4 className="text-lg font-semibold">Hydrogen vs Electric Cars</h4>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             
              </p>
              <hr className="border-gray-600 my-4" />
            </div>
            <div>
            <h4 className="text-lg font-semibold">Hydrogen vs Electric Cars</h4>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
