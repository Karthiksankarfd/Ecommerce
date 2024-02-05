import React from "react";
import Video from "./Video.mp4"
const Hero = () => {
  return (
    <>
      <div className=" px-10 h-72 bg-gradient-to-t from-black to-black flex flex-row   bg">
        <div className="text_and_btn w-1/2 h-auto flex flex-col gap-y-2 items-start justify-center sm:w-full ">
          {/* <img className="h-44" src="https://i.pinimg.com/originals/c7/e9/48/c7e948d145620182b07dd4c9cba1178c.png" alt="" /> */}
          <h5 className=" text-3xl sm:text-2xl text-neutral-500">
            Let's Explore All New Arraivals
          </h5>

          <h1 className="text-white text-6xl  sm:text-3xl">New Collections </h1>
          <h1 className="text-white text-6xl  sm:text-3xl">For EveryOne</h1>

          {/* <p className="font-thin ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis porro architecto debitis unde quis praesentium maiores, eum voluptatum, sint nihil laborum delectus blanditiis adipisci distinctio
            </p> */}

          <button className="text-xl bg-white-500 px-10 py-2 rounded-3xl text-neutral-500 border-2 border-neutral-500">
            Shop Now
          </button>
        </div>
      </div>
        
      {/* hero fashion banner */}
      <div className="w-full h-96 sm:h-fit overflow-hidden  lg:flex lg:flex-row sm:flex-col ">
     
          <div className="w-1/2  object-cover sm:w-full md:w-full">
            <img
              src="https://assets.materialup.com/uploads/5dab2841-80f7-486f-8897-36f1a86a5f0b/preview.jpg"
              alt="" 
              className="object-cover md:w-full"
            />
          </div>
        <div className="w-1/2 sm:w-full bg-black p-10 flex flex-col gap-y-3 object-fill">
          <div className=" flex flex-col gap-y-2" >
            <h3 className="text-white text-9xl  sm:text-3xl font-extrabold">
              Redefine The{" "}
            </h3>
            <h3 className="text-white text-xl font-thin">The </h3>
            <div className="flex gap-x-2 items-center">
              <h3 className="text-white text-9xl  sm:text-3xl font-extrabold">
                FASHION
              </h3>
              <div className="bg-white w-1 h-10"></div>
            </div>
          </div>

          <div>
            <button className="text-xl bg-white-500 px-10 py-2 rounded-3xl text-neutral-500 border-2 border-neutral-500">
              Shop Now
            </button>
          </div>
          {/* <video src={Video} autoplay muted loop className="w-full "></video> */}
        </div>
      </div>

      

       
    </>
  );
};

export default Hero;
