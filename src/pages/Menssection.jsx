import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Shopcontext } from "../context/Shopcontextvar";
const Menssection = () => {

  const {addTocart} =useContext(Shopcontext)
  return (
    <div className="mens_main_container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        loop={true}
        stopOnHover={true}
        interval={1000}
        transitionEffect="scroll"
        showIndicators={true}
      >
        <div>
          {/* hero fashion banner */}
          <div className="w-full h-96 sm:h-fit overflow-hidden  lg:flex lg:flex-row sm:flex-col ">
            <div className="w-1/2  object-cover sm:w-full md:w-full">
              <img
                // src="https://assets.materialup.com/uploads/5dab2841-80f7-486f-8897-36f1a86a5f0b/preview.jpg"
                // src="https://i.ytimg.com/vi/D22y1MuvwdY/maxresdefault.jpg"
                src="https://th.bing.com/th/id/R.81db8ef06525bd5a90e6caf84d874293?rik=iD%2fVuSrY%2bP67hw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-l1nKQM_wZwU%2fVi96EmmjzeI%2fAAAAAAAAuYY%2fXaVqcTpZouQ%2fs1600%2fWinter1.jpg&ehk=Bg5L2VUYEgSiRHtTx51%2br0w%2fJ0oNiRPg%2bDLw2HhY0eo%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="object-cover md:w-full "
              />
            </div>
            <div className="w-1/2 sm:w-full  bg-black p-10 flex flex-col lg:gap-y-3 sm:gapy items-start">
               <h1 className="lg:text-2xl sm:text-xl text-white font-bold">Men's Fashion </h1>
               <h1 className="lg:text-6xl sm:text-xl text-white ">Re-Defined</h1>
               <button className="text-xl bg-white-500 px-10 py-2 rounded-3xl text-neutral-500 border-2 border-neutral-500">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="h-96">
          {/* hero fashion banner */}
          <div className="w-full h-fit sm:h-fit overflow-hidden  lg:flex lg:flex-row sm:flex-col ">
            <div className="w-1/2  object-cover sm:w-full md:w-full">
              <img
                src="https://th.bing.com/th/id/R.81db8ef06525bd5a90e6caf84d874293?rik=iD%2fVuSrY%2bP67hw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-l1nKQM_wZwU%2fVi96EmmjzeI%2fAAAAAAAAuYY%2fXaVqcTpZouQ%2fs1600%2fWinter1.jpg&ehk=Bg5L2VUYEgSiRHtTx51%2br0w%2fJ0oNiRPg%2bDLw2HhY0eo%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="object-cover md:w-full"
              />
            </div>
            <div className="w-1/2 sm:w-full  bg-black p-10 flex flex-col lg:gap-y-3 sm:gapy items-start">
               <h1 className="lg:text-2xl sm:text-xl text-white font-bold">Men's Fashion </h1>
               <h1 className="lg:text-6xl sm:text-xl text-white ">Re-Defined</h1>
               <button className="text-xl bg-white-500 px-10 py-2 rounded-3xl text-neutral-500 border-2 border-neutral-500">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div>
          {/* hero fashion banner */}
          <div className="w-full h-fit sm:h-fit overflow-hidden  lg:flex lg:flex-row sm:flex-col ">
            <div className="w-1/2  object-cover sm:w-full md:w-full">
              <img
                src="https://th.bing.com/th/id/R.81db8ef06525bd5a90e6caf84d874293?rik=iD%2fVuSrY%2bP67hw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-l1nKQM_wZwU%2fVi96EmmjzeI%2fAAAAAAAAuYY%2fXaVqcTpZouQ%2fs1600%2fWinter1.jpg&ehk=Bg5L2VUYEgSiRHtTx51%2br0w%2fJ0oNiRPg%2bDLw2HhY0eo%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="object-cover md:w-full"
              />
            </div>
            <div className="w-1/2 sm:w-full  bg-black p-10 flex flex-col lg:gap-y-3 sm:gapy items-start">
               <h1 className="lg:text-2xl sm:text-xl text-white font-bold">Men's Fashion </h1>
               <h1 className="lg:text-6xl sm:text-xl text-white ">Re-Defined</h1>
               <button className="text-xl bg-white-500 px-10 py-2 rounded-3xl text-neutral-500 border-2 border-neutral-500">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Menssection;
