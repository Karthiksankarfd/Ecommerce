import React, { useContext, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontextvar";
import Cartfooter from "./Cartfooter";
import { FaTimes } from "react-icons/fa";
import Emptycart from "./Emptycart";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Authenticationcontext/Logincontext.jsx/LogincontexProvider";
const Cart = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { cart, setMycart, addtowishlist } = useContext(Shopcontext);
  // console.log(cart, "this is from cart.jsx");

  console.log(typeof cart, "this is from typeof");

  //  let cartlenght = Object.keys(cart).length
  //  const [showcart, setShowcart] = useState(cartlenght)
  // Watch for changes in the cart state and update localStorage
  useEffect(() => {
    // Convert the cart array to a JSON string and save it to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    //  localStorage.getItem('cart', JSON.parse(cart));
  }, [cart]); // The effect runs whenever the cart state changes

  // Prompt for removing the product
  // const handleRemoveProduct = (data) => {
  //   window.confirm(data);
  // };
  //   for getting the total price
  // Assuming each item in the cart has a 'price' property
  // const totalPrice = cart.reduce((accumulator, currentItem) => {
  //   return accumulator + currentItem.price * (currentItem.quantity || 1);
  // }, 0);

  // let TotalItems = Object.keys(cart).length;

  // quantity function
  const handleQuantityPlusClick = (id) => {
    const updatedcart = cart.map((item) => {
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
    setMycart(updatedcart);
    console.log(updatedcart);
  };

  const handleQuantityMinusClick = (id) => {
    const updatedcart = cart
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
    setMycart(updatedcart);
    console.log(updatedcart);
  };

  const handleRemoveproductClick = (id) => {
    const updatedcart = cart
      .map((item) => {
        if (item.id === id) {
          const quantity = 0;

          if (quantity === 0) {
            console.log("product removed from cart");
            return null;
          }
          if (cart.lenght === 0) {
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
    setMycart(updatedcart);
    console.log(updatedcart);
  };

  const handleemptycart = () => {
    if (Object.keys(cart).length === 0) {
      // Object.keys(myObject).length
      console.log(Object.keys(cart).length, "Your cart is empty ");
    } else {
      console.log("CART HAS PROCUCT");
    }
  };

  handleemptycart();

  return (
    <>
      {cart.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="cartContainerMain px-4 py-4 flex justify-center lg:flex-row sm:flex-col ">
            {/* {cart.map((item) => { */}

            <div className="cartContainer lg:gap-x-3 lg:w-3/4 sm:w-full md:w-full border-black-700 mb-4 flex lg:flex-row gap-y-2   sm:flex-col  md:flex-col">
              <div className="lg:w-3/4 sm:w-full md:w-full">
                <div className="w-full border-2 border-black lg:h-auto sm:h-auto md:h-auto  flex lg:items-start lg:justify-between  sm:flex-col md:flex-col  py-3 px-3 mb-2">
                  <address className="w-3/4 overflow-hidden text-xs py-3">
                    424, Bommanahalli, Hosur Main Road, Bangalore - 560 068. 080
                    - 4110 7755, +91 - 96111 73607
                  </address>

                  <button className="bg-black text-white text-xs font-semibold px-2 py-2">
                    Change Address
                  </button>
                </div>

                <div className="w-full border-2 border-black h-24 flex flex-col  justify-start items-start py-3 px-3 gap-y-2 mb-2">
                  <div className="text-xs font-semibold">
                    Prices Have Dropped
                  </div>
                  <p className="text-xs">
                    The price of one or more items in your bag has dropped. Buy
                    them now!
                  </p>
                </div>

                <div className="  w-full flex flex-col gap-y-2 ">
                  {cart.map((item) => {
                    return (
                      <>
                        <div className="flex lg:flex-row sm:flex-col md:flex-col   py-2 px-2 gap-x-2 border-2 ">
                          <div className="imagecontainer flex ">
                            {/* remove product */}
                            <div>
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
                                Remove From Cart
                              </button>
                              <button
                                className="px-5 w-full text-xs text-left font-semibold bg-black text-white py-2"
                                onClick={() => {
                                  addtowishlist(item);
                                }}
                              >
                                Add To Wishlist
                              </button>
                              {/* <button>Add to wishlist</button> */}
                            </div>
                          </div>
                          <div className="productinfo flex flex-col gap-y-2">
                            {/* product info */}

                            <div>
                              <h3 className="mb-2 font-semibold text-xs sm:mt-3">
                                {item.title}
                              </h3>
                              <p className="text-xs font-thin">
                                {item.description.substring(0, 70)}...
                              </p>
                            </div>
                            {/* <button className="px-5 w-fit text-xs text-left font-semibold bg-black text-white py-2" onClick={()=>{addtowishlist(item)}}>
                                Add To Wishlist
                              </button> */}

                            <div className="flex gap-x-3">
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
                                    handleQuantityMinusClick(item.id);
                                  }}
                                >
                                  -
                                </button>
                              
                                <div className=" flex justify-center item-center border-2 border-black-700 items-center  w-7 h-7">
                                  {item.quantity || 1}
                                </div>
                              
                                <button
                                  className="border-2 border-black-700 w-7 h-7"
                                  onClick={() => {
                                    handleQuantityPlusClick(item.id);
                                  }}
                                >
                                  +
                                </button>
                              </div>
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
                                <span className="font-semibold">
                                  14 days{" "}
                                </span>{" "}
                                return available
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <Cartfooter />
            </div>
          </div>
        </>
      )}

      {/* {item details} */}
      {/* for checking the lenght of the cart array and conditionally rendering the Your cart is empty message */}
      {cart.length === 0 ? <Emptycart /> : <></>}
    </>
  );
};

export default Cart;
