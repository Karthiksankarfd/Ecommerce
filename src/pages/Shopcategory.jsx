// Shopcategory.js
import LoginModal from "../components/Modal/LoginModal";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontextvar";
import Menssection from "./Menssection";
import data from "../components/Data/Jsondata";
import Womensdata from "../components/Data/Womens";
import Kidsdata from "../components/Data/Kids";
import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Mainfooter from "./Mainfooter";
import { useAuth } from "../components/Authenticationcontext/Logincontext.jsx/LogincontexProvider";
import Cartalert from "../components/Modal/Cartalert";
import AddedToCart from "../components/Modal/AddToCart";
const Shopcategory = (props) => {
  // invoking useauth
  const auth = useAuth();

  // invoking the shopcontext
  const {
    productDetail,
    addTocart,
    cart,
    setShowAlert,
    showAlert,
    viewProduct,
    addtowishlist,
    setShowAlertForCartItem,showAlertForCartItem
  } = useContext(Shopcontext);

  // The value of 'category' prop can be accessed using props.category
  const { category } = props;

  // Define different UI components or content based on the category
  let categoryContent;

  let removeduplicate = cart.map((cartitem) => {
    return cartitem.id;
  });

  const handlePrompt = (data) => {
    if (auth.user) {
      window.confirm(data);
    } else {
      window.alert("Please Sign In To Add Product to Cart");
      auth.openModal();
    }
  };

  if (category === "men") {
    categoryContent = (
      <>
        <motion.div
          initial={{ opacity: 1, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Menssection />
        </motion.div>

        {/* <button onClick={()=>{showalert()}}>SHOW ALERT</button> */}
        <div className=" fixed  top-0 w-full z-10">
          <LoginModal></LoginModal>
        </div>
        <h3 className="pl-4 text-2xl text-neutral-500  underline underline-offset-8 w-full text-center py-5 scroll-smooth">
          Men's Wear
        </h3>
        <div className="grid-container-main flex justify-center  sm:flex-col sm:px-5 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap w-full  gap-x-5 gap-y-5 my-4">
          {data.map((item) => (
            <>
              <div className="lg:h-auto lg:w-96 md:w-72 sm:w-full relative border-2 p-5 flex flex-col gap-y-3">
                <div className="w-full h-52  object-contain">
                  <Link to="/productDetail">
                    <img
                      src={item.images[0]}
                      alt=""
                      className="w-full h-52  object-contain"
                      onClick={() => {
                        viewProduct(item);
                      }}
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
                    onClick={() => {
                      // Check if the item is already in the cart
                      // for that we have to use includes method to check the array has the item
                      if (removeduplicate.includes(item.id)) {
                        // Display a custom alert using a div element
                        setShowAlert(true);
                      } else {
                        // Add the item to the cart if not already present
                        addTocart(item);
                        handlePrompt(
                          `${item.title || item.name}  was added to the cart`
                        );
                        // You may want to return or render something else after adding to the cart
                      }
                    }}
                  >
                    <FaShoppingCart />
                  </button>
                  <button
                    className=" text-black mr-4 py-1 hover:text-green-400 transition duration-150 sm:w-fit lg:w-fit "
                    onClick={() => {
                      addtowishlist(item);
                      console.log("adding to wishlist");
                      setShowAlertForCartItem(true)
                    }}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <Mainfooter />
        {showAlert && (
          <div className=" fixed  top-0 w-full ">
            <Cartalert />
          </div>
        )}
         {showAlertForCartItem && (
           <div className=" fixed  top-0 w-full ">
           <AddedToCart />
         </div>
        )}
      </>
    );
  } else if (category === "women") {
    categoryContent = (
      <>
        <div className="lg:h-96 sm:h-fit w-full overflow-hidden object-cover">
          <img
            className="  w-full"
            src="https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-22-LmTLHWkkY.jpg"
            alt=""
          />
        </div>
        <h3 className="pl-4 text-2xl text-neutral-500  underline underline-offset-8 w-full text-center py-5 scroll-smooth">
          Women's Wear
        </h3>
        <div className="grid-container-main flex justify-center  sm:flex-col sm:px-5 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap w-full  gap-x-5 gap-y-5 my-4">
          {Womensdata.map((item) => (
            <>
              <div className="lg:h-auto lg:w-96 md:w-72 sm:w-full relative border-2 p-5 flex flex-col gap-y-3">
                <div className="w-full h-52  object-contain">
                  <Link to="/productDetail">
                    <img
                      src={item.images[0]}
                      alt=""
                      className="w-full h-52  object-contain"
                      onClick={() => {
                        viewProduct(item);
                      }}
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
                    onClick={() => {
                      // Check if the item is already in the cart
                      // for that we have to use includes method to check the array has the item
                      if (removeduplicate.includes(item.id)) {
                        // Display a custom alert using a div element
                        setShowAlert(true);
                      } else {
                        // Add the item to the cart if not already present
                        addTocart(item);
                        handlePrompt(
                          `${item.title || item.name}  was added to the cart`
                        );
                        // You may want to return or render something else after adding to the cart
                      }
                    }}
                  >
                    <FaShoppingCart />
                  </button>
                  <button
                    className=" text-black mr-4 py-1 hover:text-green-400 transition duration-150 sm:w-fit lg:w-fit "
                    onClick={() => {
                      addtowishlist(item);
                      setShowAlertForCartItem(true);
                      console.log("adding to wishlist");
                    }}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <Mainfooter />
        {showAlert && (
          <div className=" fixed  top-0 w-full ">
            <Cartalert />
          </div>
        )}
         {showAlertForCartItem && (
           <div className=" fixed  top-0 w-full ">
           <AddedToCart />
         </div>
        )}
        <div className=" fixed  top-0 w-full">
          <LoginModal></LoginModal>
        </div>
      </>
    );
  } else if (category === "kids") {
    // Default content for unknown categories
    categoryContent = (
      <>
          <div className="lg:h-96 sm:h-fit w-full overflow-hidden object-cover">
          <img
            className="  w-full"
            src="https://i.pinimg.com/originals/3c/41/ab/3c41ab736bc52789af651115e4f0a980.jpg"
            alt=""
          />
        </div>
        <h3 className="pl-4 text-2xl text-neutral-500  underline underline-offset-8 w-full text-center py-5 scroll-smooth">
          Women's Wear
        </h3>
        <div className="grid-container-main flex justify-center  sm:flex-col sm:px-5 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap w-full  gap-x-5 gap-y-5 my-4">
          {Kidsdata.map((item) => (
            <>
              <div className="lg:h-auto lg:w-96 md:w-72 sm:w-full relative border-2 p-5 flex flex-col gap-y-3">
                <div className="w-full h-52  object-contain">
                  <Link to="/productDetail">
                    <img
                      src={item.images[0]}
                      alt=""
                      className="w-full h-52  object-contain"
                      onClick={() => {
                        viewProduct(item);
                      }}
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
                    onClick={() => {
                      // Check if the item is already in the cart
                      // for that we have to use includes method to check the array has the item
                      if (removeduplicate.includes(item.id)) {
                        // Display a custom alert using a div element
                        setShowAlert(true);
                      } else {
                        // Add the item to the cart if not already present
                        addTocart(item);
                        handlePrompt(
                          `${item.title || item.name}  was added to the cart`
                        );
                        // You may want to return or render something else after adding to the cart
                      }
                    }}
                  >
                    <FaShoppingCart />
                  </button>
                  <button
                    className=" text-black mr-4 py-1 hover:text-green-400 transition duration-150 sm:w-fit lg:w-fit "
                    onClick={() => {
                      addtowishlist(item);
                      setShowAlertForCartItem(true)
                      console.log("adding to wishlist");
                    }}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <Mainfooter />
        {showAlert && (
          <div className=" fixed  top-0 w-full ">
            <Cartalert />
          </div>
        )}
         {showAlertForCartItem && (
           <div className=" fixed  top-0 w-full ">
           <AddedToCart />
         </div>
        )}
        <div className=" fixed  top-0 w-full">
          <LoginModal></LoginModal>
        </div>
      </>
    );
  }

  return categoryContent;
};

export default Shopcategory;
