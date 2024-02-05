import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontextvar";
import { FaRupeeSign } from "react-icons/fa";
import SimiliarProduct from "./SimiliarProduct";
import { useEffect } from "react";
// import Buynowpage from "./Buynowpage";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Rating from "../components/Rating/Rating";
const Productdetails = () => {

  // for scrolling the page when the user clicks the product 
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
      
    });
    console.log("Scrolling to top")
  });
  const { productDetail, addTocart } = useContext(Shopcontext);
  return (
    <>
      <motion.div
        initial={{ opacity: 1, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="lg:flex border-2 sm:block gap-x-3">
          <div className="primary_container lg:w-1/2 sm:w-full md:w-full">
            {productDetail.map((item) => {
              return (
                <>
                  <div
                    className="image_maincontainer h-auto sm:w-full "
                    key={item.id}
                  >
                    <div className="image_gallery flex flex-row w-auto sm:w-full lg:flex-wrap sm:overflow-y-scroll md:overflow-y-scroll gap-5 p-5 ">
                      {item.images.map((image) => {
                        return (
                          <>
                            <img src={image} alt="" className="h-64" />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="primary_container lg:w-1/2 sm:w-full md:w-full flex flex-col gap-y-3  md:gap-x-3 px-5">
            {productDetail.map((item) => (
              <>
                {/* <h1 className="mt-3 text-xl">Product</h1> */}
                <h3 className="text-xl font-bold ">{item.title}</h3>
                <span className="text-red-500">Hurry up! only few left!!!</span>
                <div className=" flex justify-start items-center   gap-x-5 w-fit ">
                  <p className="bg-black text-white flex items-center px-5  py-2 gap-x-2">
                    {" "}
                    Price <FaRupeeSign />: {item.price}
                  </p>
                  {/* <Link to="/buynowpage"> */}
                  <button
                    className="bg-black text-white px-5 py-2 "
                    onClick={() => {
                      // handlebuynow(item);
                      addTocart(item);
                      console.log("buynow", item);
                      // <Buynowpage/>
                    }}
                  >
                    Add To Cart
                  </button>
                  {/* </Link> */}
                </div>

                <div className="w-fit  ">
                  <h3 className="bg-green-500 text-white px-5 py-2 ">
                    Best Price Ever
                  </h3>
                </div>
                <h3 className="text-xl py-2">Product Description</h3>
                <p className="text-sm sm:block lg:block ">{item.description}</p>
              </>
            ))}
          </div>
          {/* for ratings */}
        </div>
    
        <div>
        <Rating />
      </div>
        <div className="px-10 py-5">
          <h1 className="text-xl">Similar Products</h1>
        </div>
      </motion.div>
     

      <div className="similiar_product">
        <SimiliarProduct />
      </div>
    
    </>
  );
};

export default Productdetails;
