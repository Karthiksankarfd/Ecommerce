import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Shopcontext } from "../../context/Shopcontextvar";
import { useAuth } from "../Authenticationcontext/Logincontext.jsx/LogincontexProvider";
const ItemsRedesign = () => {
  //invoking usenavigate
  const navigate = useNavigate();

  // login context
  const auth = useAuth();

  const { data, addTocart, viewProduct, addtowishlist, cart, setShowAlert } =
    useContext(Shopcontext);
  // existingData.newKey = 'newValue';

  let removeduplicate = cart.map((cartitem) => {
    return cartitem.id;
  });

  // console.log(removeduplicate); 

  const handlePrompt = (data) => {
    if (auth.user) {
      window.confirm(data);
    } else {
      window.alert("Please Sign In To Add Product to Cart");
      auth.openModal();
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

      {/* main product grid-container */}
      <div className="grid-container-main flex justify-center  sm:flex-col sm:px-5 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap w-full  gap-x-5 gap-y-5">
        {data.map((item) => (
          <>
            <div className="lg:h-auto lg:w-96 md:w-72 sm:w-full relative border-2 p-5 flex flex-col gap-y-3">
              <div className="w-full h-52  object-contain">
                <Link to="/productDetail">
                  <img
                    src={item.images[1]}
                    alt=""
                    className="w-full h-52  object-contain"
                    onClick={() => {
                      viewProduct(item);
                    }}
                  />
                </Link>
              </div>

              <div className="flex flex-col gap-y-3">
                <h3 className="font-bold text-sm">{item.title}</h3>
                <h5 className="font-thin text-xs">
                  {item.description.substring(0, 70)}...
                </h5>
                <div className="flex items-center gap-x-4 ">
                  <p className="font-bold text-sm">
                    price : ₹ {item.price * 10}/.
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
                      // This assumes you are using a React component
                      setShowAlert(true);
                    } else {
                      // Add the item to the cart if not already present
                      addTocart(item);
                      handlePrompt(`${item.title} was added to the cart`);
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
                  }}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* <div>
        <Mainfooter/>
      </div> */}
    </>
  );
};

export default ItemsRedesign;
