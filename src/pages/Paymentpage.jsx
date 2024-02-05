import React, { useContext, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontextvar";
import { Link, useNavigate } from "react-router-dom";
import { FaCreditCard, FaMoneyBill, FaPaypal, FaStar } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Paymentpage = () => {
  const { cart, myOrders, setMyOrders } = useContext(Shopcontext);

  useEffect(() => {
    setMyOrders(cart);
  });
  // Assuming each item in the cart has a 'price' property
  const totalPrice = cart.reduce((accumulator, currentItem) => {
    // MISTAKE CODE
    // return accumulator + (currentItem.price * currentItem.quantity  ) || 1 ;

    // currentItem.quantity || 1 to handle the case where the quantity is not defined for an item.
    //  This ensures that if currentItem.quantity is falsy, it defaults to 1;
    return accumulator + currentItem.price * (currentItem.quantity || 1);
  }, 0);

  let TotalItems = Object.keys(cart).length;

  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-dvh flex justify-center items-center sm:hidden lg:flex">
        <div className="w-3/4  border-black flex lg:flex-row sm:flex-col flex-wrap px-5 py-5">
          {/* division child one */}
          <div className="childone w-2/3 border-2 flex ">
            {/* division for selexting payment option */}

            {/* child of child one */}
            <div className="w-1/3 h-auto flex flex-col ">
              <Link to="Recommended">
                <div className="payment_method h-14 text-xs font-bold tracking-wide w-full bg-slate-200 flex justify-start items-center px-5 gap-3">
                  <div>
                    <FaStar />
                  </div>
                  <div>Recommended</div>
                </div>
              </Link>

              <Link to="/paymentpage" className="">
                <div className="payment_method h-14 text-xs font-bold tracking-wide  w-full bg-slate-200 :bg-white flex justify-start items-center px-5 gap-3">
                  <div>
                    <FaStar />
                  </div>
                  <div>COD</div>
                </div>
              </Link>
              <Link to="upi">
                <div className="payment_method h-14 text-xs font-bold tracking-wide w-full bg-slate-200 flex justify-start items-center px-5 gap-3">
                  <div>
                    <FaStar />
                  </div>
                  <div>PhonePe/Google Pay/BHIM UPI</div>
                </div>
              </Link>
              <Link>
                <div className="payment_method h-14 text-xs font-bold tracking-wide w-full bg-slate-200 flex justify-start items-center px-5 gap-3">
                  <div>
                    <FaStar />
                  </div>
                  <div>Recommended</div>
                </div>
              </Link>
              <Link>
                <div className="payment_method h-14 text-xs font-bold tracking-wide w-full bg-slate-200 flex justify-start items-center px-5 gap-3">
                  <div>
                    <FaStar />
                  </div>
                  <div>Recommended</div>
                </div>
              </Link>
              <Link className="">
                <div className="payment_method h-14 text-xs font-bold tracking-wide w-full bg-slate-200 flex justify-start items-center px-5 gap-3">
                  <div>
                    <FaStar />
                  </div>
                  <div>Recommended</div>
                </div>
              </Link>
              <Link>
                <div className="payment_method h-14 text-xs font-bold tracking-wide w-full bg-slate-200 flex justify-start items-center px-5 gap-3">
                  <div>
                    <FaStar />
                  </div>
                  <div>Recommended</div>
                </div>
              </Link>

              {/* outlet will tell the react route that render the child component inside product page s */}
              {/* This is very importsnt */}
            </div>

            {/* child of child two */}
            <div className="w-1/2 h-fit white flex flex-col gap-y-2 p-5 ">
              <Outlet />
            </div>
          </div>
          {/* division child one */}
          {/* <div className="childone"></div> */}
          {/* division child one */}
          {/* <div className="childone"></div> */}

          <div className="productdetail w-1/3 border-2 p-5 ">
            <>
              {/* <hr /> */}

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
                <Link to="/orderconfirmationpage" className="">
                  <button
                    onClick={() => {
                      navigate("/");
                      setMyOrders(cart);
                      console.log(myOrders, "my orders");
                    }}
                  >
                    Place order
                  </button>
                </Link>
              </div>
            </>
          </div>
        </div>
      </div>

      {/* payment design for mobile view */}
      <div className="lg:hidden sm:flex md:flex flex-col p-5 w-full h-auto gap-y-5">
        <div className="links flex flex-col gap-y-3  font-semibold">
        <div className="border-2 px-2 py-4 hover:border-black  flex flex-col gap-x-5">
          {cart.map((item)=>{
            return(
              <>
              <h1>{item.title}</h1>
              </>
            )
          })}
          </div>
          <div className="border-2 px-2 py-4 hover:border-black  flex gap-x-5">
            <FaMoneyBill />
            <Link>Cash On Delivery</Link>
          </div>
          <div className="border-2 px-2 py-4 hover:border-black  flex gap-x-5">
            <FaPaypal></FaPaypal>
            <Link to="upi">PhonePe/Google Pay/BHIM UPI</Link>
          </div>
          <div className="border-2 px-2 py-4 hover:border-black flex gap-x-5">
            <FaCreditCard />

            <Link to="upi">Pay Width Card</Link>
          </div>
        </div>

        <div className="outlets">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Paymentpage;
