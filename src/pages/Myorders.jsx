import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontextvar";
import { useNavigate } from "react-router-dom";
import MyorderpageFooter from "./MyorderpageFooter";
import { FaCheck } from "react-icons/fa";
const Myorders = () => {
  const { myOrders } = useContext(Shopcontext);

  const navigate = useNavigate()
  return (
    <>
    {/* conditionally rendering the  myorders page according to orders lenght */}
      {myOrders.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="cartContainerMain px-4 py-4 flex justify-center">
            {/* {cart.map((item) => { */}

            <div className="cartContainer lg:w-3/4 sm:w-full md:w-full   border-black-700 mb-4 flex lg:flex-row gap-y-2 gap-x-3 sm:flex-col">
              <div className="lg:w-3/4 sm:w-full md:w-full">
                <div className="w-full border-2 border-black lg:h-auto sm:h-auto md:h-auto  flex lg:items-start lg:justify-between  sm:flex-col md:flex-col  py-3 px-3 mb-2">
                  <address className="w-3/4 overflow-hidden text-xs py-3">
                    424, Bommanahalli, Hosur Main Road, Bangalore - 560 068. 080
                    - 4110 7755, +91 - 96111 73607
                  </address>

                  <button className="bg-black text-white text-xs font-semibold px-2 py-2">
                    Delivery Address
                  </button>
                </div>

                <div className="w-full border-2 border-black h-24 lg:hidden lg:flex-row sm:hidden  justify-start items-center py-5 px-5 gap-y-2 mb-2">
                  {/* round */}
                  <div className="w-4 h-4 bg-black rounded-full flex justify-center items-center ">
                    <div className="w-1 h-1 bg-white rounded-full "></div>
                  </div>{" "}
                  <br />
                  {/* line */}
                  <div className="w-3/6 h-1 bg-red-400 rounded-full flex justify-center items-center">
                    {/* <div className='w-3 h-3 bg-green-100 rounded-full '></div> */}
                    {/* <div>shipped</div> */}
                  </div>
                  {/* round */}
                  <div className="w-6 h-6 bg-green-400 rounded-full flex justify-center items-center animate-bounce duration-75">
                    <div className="w-3 h-3 bg-white rounded-full "></div>
                  </div>
                  {/* line */}
                  <div className="w-3/6 h-1 bg-green-200 rounded-full flex justify-center items-center">
                    {/* <div className='w-3 h-3 bg-green-100 rounded-full '></div> */}
                  </div>
                  {/* round */}
                  <div className="w-6 h-6 bg-green-200 rounded-full flex justify-center items-center">
                    <div className="w-3 h-3 bg-green-100 rounded-full "></div>
                  </div>
                
                </div>

                <div className="mobileview lg:flex md:flex sm:flex flex-col w-full px-2 justify-center items-start py-5">
                  <div className="point flex w-full justify-start items-center ">
                    <div className="text-xs w-4 h-4 bg-green-400 rounded-full border-2 border-green-500 flex justify-center items-center"> <FaCheck/></div>
                    <div className="text-xs pl-5">Order Confirmed , On  {new Date().toUTCString()}</div>
                  </div>
                  <div className="verticalline border-l-2 border-green-400 h-10 w-0 ml-1.5 "></div>
                  <div className="point flex w-full justify-start items-center ">
                    <div className="text-xs w-4 h-4 bg-green-400 rounded-full border-2 border-green-500 flex justify-center items-center">
                     <FaCheck/>
                    </div>
                    <div className="text-xs pl-5">Shipped , On {new Date().toUTCString()}</div>
                  </div>
                  <div className="verticalline border-l-2 border-green-400 h-10 w-0 ml-1.5 animate-pulse"></div>
                  <div className="point flex w-full justify-start items-center animate-pulse">
                    <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-green-500"></div>
                    <div className="text-xs pl-5">Out for delivery , Expected Delivery on 22nd feb</div>
                  </div>
                </div>

                <div className="  w-full flex flex-col gap-y-2 ">
                  {myOrders.map((item) => {
                    return (
                      <>
                        <div className="flex lg:flex-row sm:flex-col md:flex-col   py-2 px-2 gap-x-2 border-2 ">
                          <div className="imagecontainer flex">
                            {/* remove product */}
                            <div>
                              {/* <input type="checkbox" onChange={()=>{handleRemoveproductClick()}}/> */}
                              {/* <img src={} alt="" /> */}
                              <button
                                className="p-2 "
                                onClick={() => {
                                  // handleRemoveproductClick(item.id);
                                }}
                              >
                                {/* <FaTimes /> */}
                              </button>
                            </div>
                            <div className="h-32 w-32 object-contain" key={item.id}>
                              {/* product image */}
                              <img  className="h-32 w-32 object-contain" src={(item.images || item.image)} alt="" />
                            </div>
                          </div>
                          <div className="productinfo px-4 py-2">
                            <div className="">
                              {/* product info */}

                              <div>
                                <h3 className="mb-2 font-semibold text-xs">
                                  {item.title}
                                </h3>
                                <p className="text-xs font-thin">
                                  {(item.description || item.productdetails).substring(0, 70)}...
                                </p>
                              </div>

                              <div className="flex gap-x-3 mt-3">
                                <select name="SIZE" id="">
                                  <option value="">Size : M</option>
                                  {/* <option value="">Size : L</option>
                            <option value="">Size : XL</option>
                            <option value="">Size : XXL</option> */}
                                </select>

                                <div className="flex">
                                  <div className="mr-1">Qnty : </div>
                                  <div className=" flex justify-center item-center border-2 border-black-700 items-center  w-7 h-7">
                                    {item.quantity || 1}
                                  </div>
                                </div>
                              </div>
                              {/* pricing section */}
                              <div className="pricing_section flex h-10 items-center  gap-x-3 ">
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
              <MyorderpageFooter />
            </div>
          </div>
          
         
        </>
      )}

      {/* {item details} */}
      {/* for checking the lenght of the cart array and conditionally rendering the Your cart is empty message */}
      {myOrders.length === 0 ? <>
        <div className="w-full h-96 flex justify-center items-center ">
             <div className="w-full h-96 flex flex-col gap-y-5 justify-center items-center">
             <img className="h-56"  src="https://th.bing.com/th/id/OIP.EyCWGlMJhdlXgG2uG9rvgwHaHB?rs=1&pid=ImgDetMain" alt=""  />
              <h1>You Have No Order</h1>
              <button className="bg-green-500 text-white px-5 py-2" onClick={()=>{navigate("/")}}>Shop Now</button>
             </div>
        </div>
      </> : <></>}
    </>
  );
};

export default Myorders;
