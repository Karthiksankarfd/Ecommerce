import React from "react";
import { Shopcontext } from "../context/Shopcontextvar";
import { useContext } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import {FaTimes} from "react-icons/fa"
import Emptywishlist from "./Emptywishlist";
import Cartalert from "../components/Modal/Cartalert";
import { useAuth  } from "../components/Authenticationcontext/Logincontext.jsx/LogincontexProvider";
const Wishlistpage = () => {
  
  // login context
  const auth = useAuth()
  const { wishlist, addTocart,setWishlist,showAlert,cart,setShowAlert} = useContext(Shopcontext);



  let removeduplicate = cart.map((cartitem)=>{
    return cartitem.id
  })

  const handlePrompt = (data) => {
    if (auth.user) {
      window.confirm(data);
    } else {
      window.alert("Please Sign In To Add Product to Cart");
    }
  };

  const handleRemoveproductClick = (id) => {
    const updatedcart = wishlist
      .map((item) => {
        if (item.id === id) {
          const quantity = 0;

          if (quantity === 0) {
            console.log("product removed from cart");
            return null;
          }
          if (wishlist.lenght === 0) {
            console.log("Your cart is empty ");
          }
          // console.log("product removed")

          return {
            ...item,
            quantity: quantity,
            totalPrice: quantity * item.price,
          };
        }

        return item;
      })
      .filter((item) => !!item);
    //
    setWishlist(updatedcart);
    console.log(updatedcart);
  };

  const handleQuantityPlusClick = (id) => {
    const updatedcart = wishlist.map((item) => {
      if (item.id === id) {
        const quantity = (item.quantity || 1) + 1;
        console.log(quantity);
        return {
          ...item,
          quantity: quantity,
          totalPrice: item.quantity || 1 * item.price,
          productname: (item.title, " added to cart"),
        };
      }
      return item;
    });
    setWishlist(updatedcart);
    console.log(updatedcart);
  };

  // Reducing the cart quamtity
  const handleQuantityMinusClick = (id) => {
    const updatedcart = wishlist
      .map((item) => {
        if (item.id === id) {
          const quantity = (item.quantity || 1) - 1;

          if (quantity === 0) {
            console.log("product removed from cart");
            return null;
          }
          // console.log("product removed")

          return {
            ...item,
            quantity: quantity,
            totalPrice: quantity * item.price,
          };
        }

        return item;
      })
      //
      .filter((item) => !!item);
    //
    setWishlist(updatedcart);
    console.log(updatedcart);
  };

  return (

    <>
    
    {wishlist.length === 0 ?(<>
       <Emptywishlist/>
    </>):<>
    <div className="flex  flex-col gap-y-5 ">
      <div className="pagetitle p-5 bg-neutral-400 w-full text-center flex flex-col justify-center items-center relative">
       <div className="flex justify-center items-center gap-x-16">
       <div className="text-white">Wishlist page</div>
        <FaHeart className="text-white"/>
       </div>

       <div className="w-full ">
       <p className="font-semibold text-xs"> Order Now To Get 30% OFF By Using The Code <span className="text-green-400 text-sm">FEB2024</span> </p> 
       </div>
       {/* <div className="heartimages absolute top-2 left-10 text-pink-400 -rotate-45">
        <FaHeart className="w-10 h-10 animate-pulse" />
       </div>
       <div className="heartimages absolute top-6 left-10 text-pink-200 -rotate-45">
        <FaHeart className="w-10 h-10 animate-pulse" />
       </div> */}
      </div>
      {wishlist.map((item) => {
        return (
          <>


            {/* <h1>{item.images[0]}</h1> */}
            {/* <img src={item.images[0]} alt="" /> */}
            <div className="flex lg:flex-row sm:flex-col md:flex-col py-2 px-4 gap-x-2 gap-y-5  ">
              <div className="imagecontainer flex border-2 p-2 ">
                {/* remove product */}
                {/* <div> */}
                  {/* <button
                    className="p-2 "
                    onClick={() => {
                      handleRemoveproductClick(item.id);
                    }}
                  >
                    <FaTimes />
                  </button> */}
                {/* </div> */}
                {/* <div className="h-32 w-32" > */}
                  {/* product image */}
                  {/* <img src={item.images[0]} alt="" /> */}
                {/* </div> */}

                <div className="">
                              {/* <input type="checkbox" onChange={()=>{handleRemoveproductClick()}}/> */}
                              {/* <img src={} alt="" /> */}
                              <button
                                className="p-2 lg:block sm:hidden md:hidden"
                                onClick={() => {
                                  handleRemoveproductClick(item.id);
                                }}
                              >
                                <FaTimes />
                              </button>
                            </div>
                            <div className="h-32 w-32 flex" key={item.id}>
                              {/* product image */}
                              <img src={item.images[0]} alt="" />
                            </div>

                            <div className="mobile_view_buttons lg:hidden sm:flex md:flex flex-col justify-end gap-y-2  h-32 ml-3">
                              <button
                                onClick={() => {
                                  handleRemoveproductClick(item.id);
                                }}
                                className="px-5 w-full text-xs text-left font-semibold bg-black text-white py-2"
                              >
                                Remove From Wishlist
                              </button>
                              <button className="px-5 w-full text-xs text-left font-semibold bg-black text-white py-2" onClick={() => {
                    // Check if the item is already in the cart 
                    // for that we have to use includes method to check the array has the item
                    if (removeduplicate.includes(item.id)) {
                      // Display a custom alert using a div element
                      // This assumes you are using a React component
                      setShowAlert(true)
                      
                    } else {
                      // Add the item to the cart if not already present
                      addTocart(item);
                      handlePrompt(`${item.title} was added to the cart`);
                      // You may want to return or render something else after adding to the cart
                    }
                    
                }}>
                                Add To Cart
                              </button>
                              {/* <button>Add to wishlist</button> */}
                            </div>
              </div>
              <div className="productinfo">
                <div className="">
                  {/* product info */}

                  <div>
                    <h3 className="mb-2 font-semibold text-xs">{item.title}</h3>
                    <p className="text-xs font-thin">
                      {item.description.substring(0, 70)}...
                    </p>
                  </div>

                  <div className="flex gap-x-3 mt-3">
                    <select name="SIZE" id="">
                      <option value="">Size : M</option>
                      <option value="">Size : L</option>
                      <option value="">Size : XL</option>
                      <option value="">Size : XXL</option>
                    </select>

                    <div className="flex">
                      <button
                        className="border-2 border-black-700 w-7 h-7"
                        onClick={() => {
                          handleQuantityPlusClick(item.id);
                        }}
                      >
                        +
                      </button>
                      <div className=" flex justify-center item-center border-2 border-black-700 items-center  w-7 h-7">
                        {item.quantity || 1}
                      </div>
                      <button
                        className="border-2 border-black-700 w-7 h-7"
                        onClick={() => {
                          handleQuantityMinusClick(item.id);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        addTocart(item);
                      }}
                      className="bg-black text-white px-5 py-2 lg:flex sm:hidden md:hidden"
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                  {/* pricing section */}
                  <div className="pricing_section flex h-10 items-center  gap-x-3">
                    <div className="text-black text-xs font-semibold">
                      {" "}
                      Price : ₹ {item.price * (item.quantity || 1)}
                    </div>
                    <div className="maximumprice text-black text-xs font-thin line-through">
                      Price : ₹{item.price * 2 * (item.quantity || 1)}
                    </div>
                    <div className="font-thin text-green-400 text-xs">
                      50% OFF
                    </div>
                  </div>
                  {/* return_availability */}
                  <div className="return_availability">
                    <div className="font-thin text-black text-xs">
                      {" "}
                      <span className="font-semibold">14 days </span> return
                      available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showAlert &&( <div className=" fixed  top-0 w-full ">
          <Cartalert/>
          
        </div>)}
          </>
        );
      })}
    </div>
   
    </>}
</>
    
  );
};

export default Wishlistpage;
