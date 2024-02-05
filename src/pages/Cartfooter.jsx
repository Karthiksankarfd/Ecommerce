import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontextvar";
const Cartfooter = () => {
  const { cart } = useContext(Shopcontext);
  // Assuming each item in the cart has a 'price' property
  const totalPrice = cart.reduce((accumulator, currentItem) => {
    // MISTAKE CODE
    // return accumulator + (currentItem.price * currentItem.quantity  ) || 1 ;

    // currentItem.quantity || 1 to handle the case where the quantity is not defined for an item.
    //  This ensures that if currentItem.quantity is falsy, it defaults to 1;
    return accumulator + currentItem.price * (currentItem.quantity || 1);
  }, 0);
  console.log(totalPrice);
  console.log(cart.length, "the lenth of cart");

  let TotalItems = Object.keys(cart).length;
  return (
    <>
      <div className="totalPrice_Container h-auto bg-white border-black-700  my-4 lg:w-2/5 sm:w-full ">
        <div className="mbsm ">PRICE DETAILS({TotalItems}) items</div>
        <div className="product_final_detail grid grid-cols-2 grid-rows-auto gap-y-3 ">
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
        <div className="lg-col-span-2 flex justify-start py-3">
          <Link to="/paymentpage" className=" w-full">
            <button className="px-5 w-full text-xs  font-semibold bg-black text-white py-2 text-center"> Place order</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cartfooter;
