import React, { useContext, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontextvar";
// import Cartfooter from "./Cartfooter";
import { FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
import Emptycart from "./Emptycart";
import Buynowfooter from "./Buynowfooter";
const Buynowpage = () => {
  const { buyitem, setBuyitem } = useContext(Shopcontext);
  // console.log(cart, "this is from cart.jsx");

  console.log(typeof cart, "this is from typeof");

  //  let cartlenght = Object.keys(cart).length
  //  const [showcart, setShowcart] = useState(cartlenght)
  // Watch for changes in the cart state and update localStorage
  useEffect(() => {
    // Convert the cart array to a JSON string and save it to localStorage
    localStorage.setItem("cart", JSON.stringify(buyitem));
    //  localStorage.getItem('cart', JSON.parse(cart));
  }, [buyitem]); // The effect runs whenever the cart state changes

  // Prompt for removing the product
  // const handleRemoveProduct = (data) => {
  //   window.confirm(data);
  // };
  //   for getting the total price
  // Assuming each item in the cart has a 'price' property
  // const totalPrice = buyitem.reduce((accumulator, currentItem) => {
  //   return accumulator + currentItem.price * (currentItem.quantity || 1);
  // }, 0);

  // let TotalItems = Object.keys(buyitem).length;

  // quantity function
  const handleQuantityPlusClick = (id) => {
    const updatedcart = buyitem.map((item) => {
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
    setBuyitem(updatedcart);
    console.log(updatedcart);
  };

  const handleQuantityMinusClick = (id) => {
    const updatedcart = buyitem
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
    setBuyitem(updatedcart);
    console.log(updatedcart);
  };

  const handleRemoveproductClick = (id) => {
    const updatedcart = buyitem
      .map((item) => {
        if (item.id === id) {
          const quantity = 0;

          if (quantity === 0) {
            console.log("product removed from cart");
            return null;
          }
          if (buyitem.lenght === 0) {
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
    setBuyitem(updatedcart);
    console.log(updatedcart);
  };

  const handleemptycart = () => {
    if (Object.keys(buyitem).length === 0) {
      // Object.keys(myObject).length
      console.log(Object.keys(buyitem).length, "Your cart is empty ");
    } else {
      console.log("CART HAS PROCUCT");
    }
  };

  handleemptycart();

  return (
    <>
      {buyitem.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="cartContainerMain px-4 py-4 flex justify-center ">
            {/* {cart.map((item) => { */}

            <div className="cartContainer w-3/4  border-2 border-black-700 mb-4 flex lg:flex-row gap-y-2 sm:flex-col">
              <div className="w-3/4 ">
                <div className="w-full border-2 border-black h-24 flex items-center justify-between py-5 px-5 mb-2">
                  <address className="w-3/4 overflow-hidden text-xs">
                    424, Bommanahalli, Hosur Main Road, Bangalore - 560 068. 080
                    - 4110 7755, +91 - 96111 73607
                  </address>

                  <button className="bg-black text-white text-xs font-semibold px-2 py-2">
                    Change Address
                  </button>
                </div>

                <div className="w-full border-2 border-black h-24 flex flex-col  justify-start items-start py-5 px-5 gap-y-2 mb-2">
                  <div className="text-xs font-semibold">
                    Prices Have Dropped
                  </div>
                  <p className="text-xs">
                    The price of one or more items in your bag has dropped. Buy
                    them now!
                  </p>
                </div>

                <div className="  w-full flex flex-col gap-y-2 ">
                  {buyitem.map((item) => {
                    return (
                      <>
                        <div className="flex flex-row py-2 px-2 gap-x-2 border-2 ">
                          <div className="imagecontainer flex">
                            {/* remove product */}
                            <div>
                              {/* <input type="checkbox" onChange={()=>{handleRemoveproductClick()}}/> */}
                              {/* <img src={} alt="" /> */}
                              <button
                                className="p-2 "
                                onClick={() => {
                                  handleRemoveproductClick(item.id);
                                }}
                              >
                                <FaTimes />
                              </button>
                            </div>
                            <div className="h-32 w-32" key={item.id}>
                              {/* product image */}
                              <img src={item.images} alt="" />
                            </div>
                          </div>
                          <div className="productinfo">
                            <div className="">
                              {/* product info */}

                              <div>
                                <h3 className="mb-2 font-semibold text-xs">
                                  {item.title}
                                </h3>
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
                              {/* pricing section */}
                              <div className="pricing_section flex h-10 items-center  gap-x-3">
                                <div className="text-black text-xs font-semibold">
                                  {" "}
                                  Price : ₹ {item.price * (item.quantity || 1)}
                                </div>
                                <div className="maximumprice text-black text-xs font-thin line-through">
                                  Price : ₹
                                  {item.price * 2 * (item.quantity || 1)}
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
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <Buynowfooter />
            </div>
          </div>
        </>
      )}

      {/* {item details} */}
      {/* for checking the lenght of the cart array and conditionally rendering the Your cart is empty message */}
      {buyitem.length === 0 ? <Emptycart /> : <></>}
    </>
  );
};

export default Buynowpage;
