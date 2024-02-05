import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontextvar";


const Buynowfooter = () => {
  const { buyitem } = useContext(Shopcontext);
  // Assuming each item in the cart has a 'price' property
  const totalPrice = buyitem.reduce((accumulator, currentItem) => {
    // MISTAKE CODE
    // return accumulator + (currentItem.price * currentItem.quantity  ) || 1 ;

    // currentItem.quantity || 1 to handle the case where the quantity is not defined for an item.
    //  This ensures that if currentItem.quantity is falsy, it defaults to 1;
    return accumulator + currentItem.price * (currentItem.quantity || 1);
  }, 0);
  console.log(totalPrice);
  console.log(buyitem.length, "the lenth of cart");

  let TotalItems = Object.keys(buyitem).length;
  return (
    <>
      <div className="totalPrice_Container h-44 bg-white border-black-700 mx-4 my-4 w-2/5">
        <div className="mbsm">PRICE DETAILS({TotalItems}) items</div>
        <div className="product_final_detail grid grid-cols-2 grid-rows-auto gap-y-3">
          <div className="text-sm font-thin ">Total price</div>
          <div className="text-sm font-thin">₹{totalPrice}</div>
          <div className="text-sm font-thin">Discount On MRP</div>
          <div className="text-sm text-green-400 font-thin">
            ₹{totalPrice * 0.5}
          </div>
          <div className="text-sm font-thin">Shipping Fee</div>
          <div className="text-sm text-green-400 font-thin">Free</div>
          <hr />
          <hr />
          <div>Total price</div>

          <div>₹{totalPrice - totalPrice * 0.5}</div>
        </div>
        <div className="col-span-2 bg-green-400 my-2 text-center">
          <Link to="/address" className="">
            <button>Place order</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Buynowfooter;
