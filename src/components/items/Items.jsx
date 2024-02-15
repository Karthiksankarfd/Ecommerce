import React, { useContext} from "react";
import { FaHeart } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Shopcontext } from "../../context/Shopcontextvar";
import { FaStar } from "react-icons/fa";
import { useAuth } from "../Authenticationcontext/Logincontext.jsx/LogincontexProvider";
import { motion } from "framer-motion";

const Items = () => {
  // invoking use navigate
  const navigate = useNavigate()
  // login context
  const auth = useAuth();
  // invoking shopcontext
  const { data, addTocart,viewProduct, addtowishlist } =
    useContext(Shopcontext);

  const handlePrompt = (data) => {
    
    if (auth.user) {
      let userconfirmation = window.confirm(data)
      if(userconfirmation){
        window.confirm(data);
      }

      else{
        console.log("User clicked Cancel or closed the dialog")
      }
     
    } else {
      let navigateTosignIn = window.alert("Please ");
      if(!navigateTosignIn){
        // window.alert("Please Sign In To Add Product to Car ertyuiop")
        console.log("Please")
        navigate("/login")
      }
      
    }
  };

  if (!data) {
    // i will Handle loading state, we can use a loading spinner or any other UI indication
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3 className="pl-4 text-2xl text-neutral-500  underline underline-offset-8 w-full text-center py-5 scroll-smooth">
        Top Sellers
      </h3>
      <div className="item-main-container  gap-x-4 gap-y-8 lg:grid lg:grid-cols-5   sm:grid-cols-1 sm:px-4 sm:py-4  sm:w-full lg:px-32 lg:py-10">
        {data.map((item, i) => (
          <div
            className="item-sub-container border-2  p-2 hover:scale-105 transition duration-150 "
            key={i}
            id={item.id}
          >
            <div class="relative w-full overflow-hidden h-72 bg-red-400 group ">
              <div class="absolute right-0 w-full h-full bg-black ">
                {/* <!-- Your content goes here --> */}
                <Link to="/productDetail">
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 5 }}
                  >
                    {/* component content goes here */}
                    <img
                      src={item.images[1]}
                      alt=""
                      className="object-cover w-full"
                      onClick={() => {
                        viewProduct(item);
                      }}
                    />
                  </motion.div>
                </Link>
              </div>
              <div className="absolute top-3/4 left-1/2 w-20  bg-green-400 text-white  justify-center items-center gap-x-2 flex  translate-y-full group-hover:-translate-y-full transition duration-100 :">
                {/* <!-- Your content goes here --> */}
                <div className="h-5 flex">
                  <FaStar />
                  4.5
                </div>
              </div>
            </div>

            <div className="title-and-description flex flex-col gap-y-2 relative">
              <h3 className="text-xs font-thin ">{item.title}</h3>
              <p className="text-xs font-bold"> Price: {item.price}</p>
              <div className="btn-section flex flex-row">
                {/*  */}

                <button
                  className="bg-black text-white mr-4 px-5 py-1 hover:bg-green-400 transition duration-150"
                  onClick={() => {
                    // if the user is logged in then only add the product to the cart
                    // auth.user ? addTocart(item) : <></>;
                    addTocart(item);
                    handlePrompt(`${item.title} was Added to cart`);
                  }}
                >
                  <FaShoppingCart />
                </button>

                <button
                  className="lg:hidden sm:flex bg-black text-white mr-4 px-5 py-1 hover:bg-green-400 transition duration-150 "
                  onClick={() => {
                    // if the user is logged in then only add the product to the cart
                    // auth.user ? addTocart(item) : <></>;
                    addTocart(item);
                    handlePrompt(`${item.title} was Added to cart`);
                  }}
                >
                  ADD TO CART
                </button>

                <button
                  className="bg-black text-white mr-4 px-5 py-1 hover:bg-green-400 transition duration-150"
                  onClick={() => {
                    addtowishlist(item);
                    console.log("adding to wishlist");
                  }}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="">
        {/* Render  other content here */}
        {/* <LoginModal></LoginModal> */}
      </div>
    </>
  );
};

export default Items;
