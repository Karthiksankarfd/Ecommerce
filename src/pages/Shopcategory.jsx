// Shopcategory.js
import LoginModal from "../components/Modal/LoginModal";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontextvar";
import Menssection from "./Menssection";
import data from "../components/Data/Jsondata";
import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Mainfooter from "./Mainfooter";
const Shopcategory = (props) => {
  // invoking the shopcontext
  const { productDetail, addTocart } = useContext(Shopcontext);
  // console.log(eledata);
  // The value of 'category' prop can be accessed using props.category
  const { category } = props;

  // const items = props.productqwerty
  // console.log(items)

  // function showAlert() {
  //   var userConfirmation = window.confirm("Do you want to perform something?");

  //   if (userConfirmation) {
  //     // Perform your action here when user clicks "OK"
  //     alert("Action performed!");
  //   } else {
  //     // Action when user clicks "Cancel" or closes the dialog
  //     alert("Action canceled.");
  //   }
  // }

  // Define different UI components or content based on the category
  let categoryContent;

  if (category === "men") {
    categoryContent = (
      <>
         <motion.div initial={{ opacity: 1, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
            <Menssection />
        </motion.div>
        
        {/* <button onClick={()=>{showalert()}}>SHOW ALERT</button> */}
        <div className=" fixed  top-0 w-full">
          <LoginModal></LoginModal>
        </div>
        <div className="grid-container-main flex justify-center  sm:flex-col sm:px-5 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap w-full  gap-x-5 gap-y-5">
          {data.map((item) => (
            <>
              <div className="lg:h-auto lg:w-96 md:w-72 sm:w-full relative border-2 p-5 flex flex-col gap-y-3">
                <div className="w-full h-52  object-contain">
                  <Link to="/productDetail">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-52  object-contain"
                      // onClick={() => {
                      //   viewProduct(item);
                      // }}
                    />
                  </Link>
                </div>

                <div className="flex flex-col gap-y-3">
                  <h3 className="font-bold text-sm">{item.name}</h3>
                  <h5 className="font-thin text-xs">
                    {item.productdetails.substring(0, 70)}...
                  </h5>
                  <div className="flex items-center gap-x-4 ">
                    <p className="font-bold text-sm">
                      price : ₹ {item.price * 2}/.
                    </p>
                    <p className="font-thin text-xs line-through text-green-400">
                      MRP : {item.price * 4}/.
                    </p>
                  </div>
                </div>

                <div className="flex  lg:flex-row sm:flex-row sm:justify-start gap-y-3 gap-x-3 ">
                  <button
                    className=" text-black mr-4  py-1 hover:text-green-400 transition duration-150 sm:w-fit sm:block lg:block lg:w-fit"
                    // onClick={() => {
                    //   // Check if the item is already in the cart
                    //   // for that we have to use includes method to check the array has the item
                    //   if (removeduplicate.includes(item.id)) {
                    //     // Display a custom alert using a div element
                    //     // This assumes you are using a React component
                    //     setShowAlert(true);
                    //   } else {
                    //     // Add the item to the cart if not already present
                    //     addTocart(item);
                    //     handlePrompt(`${item.title} was added to the cart`);
                    //     // You may want to return or render something else after adding to the cart
                    //   }
                    // }}
                  >
                    <FaShoppingCart />
                  </button>
                  <button
                    className=" text-black mr-4 py-1 hover:text-green-400 transition duration-150 sm:w-fit lg:w-fit "
                    // onClick={() => {
                    //   addtowishlist(item);
                    //   console.log("adding to wishlist");
                    // }}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <Mainfooter/>
      </>
    );
  } else if (category === "women") {
    categoryContent = (
      <>
        <div>
          <h2>Shop Women's Category</h2>
          {/* Women's category specific content */}
        </div>
        <div className=" fixed  top-0 w-full">
          <LoginModal></LoginModal>
        </div>
      </>
    );
  } else if (category === "kids") {
    // Default content for unknown categories
    categoryContent = (
      <>
        <div>
          <h2>Shop {category} Category</h2>
          {/* Default content for unknown categories */}
        </div>
        <div className=" fixed  top-0 w-full">
          <LoginModal></LoginModal>
        </div>

       
      </>
    );
  }

  return categoryContent;
};

export default Shopcategory;
