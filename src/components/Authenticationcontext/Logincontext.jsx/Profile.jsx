import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginModal from "../../Modal/LoginModal";
import {
  FaBoxOpen,
  FaCrown,
  FaHeadphones,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
// import {} from "../Logincontext.jsx"
import { useAuth } from "./LogincontexProvider";
import { motion } from "framer-motion";
const Profile = () => {
  // invoking the useauth hook
  const auth = useAuth();
  return (
    <>
      {auth.user ? <> <div className=" sm:hidden md:hidden w-full h-auto lg:flex lg:flex-row justify-center items-start bg-white gap-x-5 py-10 ">
        <div className="links w-44 h-auto flex flex-col gap-y-5">
          <div className="p-5 border-2 flex  justify-left items-center">
            <Link to="/profile" className="text-black text-sm font-semibold">
              Overview
            </Link>
          </div>
          <div className="p-5 border-2 flex-col  justify-left items-center">
            <div className="text-neutral-400 text-xs">ORDERS</div>
            <Link
              to="/Orders&Returns"
              className="text-black text-sm font-semibold"
            >
              Orders & Returns
            </Link>
          </div>
          <div className="p-5 border-2 flex  justify-left items-center">
            <div className="flex flex-col gap-y-1">
              <div className="text-neutral-400 text-xs">Credits</div>
              <Link to="Coupons" className="text-black text-sm font-semibold">
                Coupons
              </Link>
              {/* <Link className="text-black text-sm font-semibold">Address</Link> */}
            </div>
          </div>
          <div className="p-5 border-2 flex  justify-left items-center">
            <div className="flex flex-col gap-y-1">
              <div className="text-neutral-400 text-xs">Account</div>
              <Link to="/Profile" className="text-black text-sm font-semibold">
                Profile
              </Link>
              <Link to="/Address" className="text-black text-sm font-semibold">
                Address
              </Link>
            </div>
          </div>
        </div>

        {/* details of the parent link */}

        <div className="links_details w-1/2 bg-white border-2  h-auto px-5 py-5">
          <motion.div
            initial={{ opacity: 1, y: -100, scale: 1.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </div></> : <><h1>Please login</h1></>}

     

      <div className=" fixed  top-0">
        <LoginModal></LoginModal>
      </div>

      {/* for mobile view */}
      <div className="main_parent_container lg:hidden md:flex sm:flex flex-col p-5 gap-y-5 relative z-0">
        <div className="font-semibold">profile</div>
        <hr />
        {/* banner section */}
        <div className="profilebanner flex flex-col gap-y-2 py-2 w-full overflow-hidden relative">
          <div className="profilename font-semibold">karthik!</div>
          <div className="wow_content relative z-20">
            <p className="text-xs ">
              Unlock <span className="font-semibold">Free shipping</span> and{" "}
              <span className="font-semibold">earn</span> <br />{" "}
              <span className="font-semibold">supercoins</span> by becoming an
              member
            </p>
          </div>
          <div>
            <button className="px-5 py-2 bg-black text-white text-xs font-semibold">
              Know more
            </button>
          </div>
          <div className="absolute h-fit  -rotate-45 -top-10 left-44 w-full z-10">
            <FaCrown className=" h-32 w-32 text-black animate-pulse" />
            {/* <FaCrown className=" h-10 w-10 text-red-200 animate-pulse"/> */}
          </div>
        </div>

        <div className="userprofile flex flex-col gap-2">
          <div className="font-semibold text-sm">shopping for karthik</div>
          <div className="userimage border-b-2   border-green-400 w-fit rounded-full ">
            <FaUser className="h-10 w-10 p-2" />
          </div>
          <div className="font-semibold text-xs">Karthik</div>
        </div>

        <div className="dropdown_btns flex flex-row gap-x-5 border-2 py-2 px-1 text-xs">
          <div>
            <button className="px-5 py-1 border-2 rounded-full">Basic ></button>
          </div>
          <div>
            <button className="px-5 py-1 border-2 rounded-full">
              Size Details >
            </button>
          </div>
          <div>
            <button className="px-5 py-1 border-2 rounded-full">Basic ></button>
          </div>
        </div>

        <div className="w-full  py-2 flex flex-wrap justify-between gap-y-3">
          <div className="multiplesections flex flex-row  border-2 py-2 px-2 w-40 justify-between  items-center">
            <div className="flex  items-center w-1/2 justify-between">
              <FaBoxOpen />
              <div className="text-xs font-semibold">Orders</div>
            </div>
            {/* for arrwow */}
            <div>></div>
          </div>

          {/* second multi_btn */}
          <div className="multiplesections flex flex-row  border-2 py-2 px-2 w-40 justify-between  items-center">
            <div className="flex  items-center w-1/2 justify-between">
              <FaCrown />
              <div className="text-xs font-semibold">Insider</div>
            </div>
            {/* for arrwow */}
            <div>></div>
          </div>

          {/* third  */}
          <div className="multiplesections flex flex-row  border-2 py-2 px-2 w-40 justify-between  items-center">
            <div className="flex  items-center w-3/4 justify-between">
              <FaHeadphones />
              <div className="text-xs font-semibold">Help center</div>
            </div>
            {/* for arrwow */}
            <div>></div>
          </div>

          {/* fourt */}
          <div className="multiplesections flex flex-row  border-2 py-2 px-2 w-40 justify-between  items-center">
            <div className="flex  items-center w-3/4 justify-between">
              <FaMoneyBill />
              <div className="text-xs font-semibold">My Coupons</div>
            </div>
            {/* for arrwow */}
            <div>></div>
          </div>
        </div>

        <div className="p-2 h-48 w-full bg-white hover:bg-neutral-400 transition-all duration-200 border-2 flex flex-col justify-center items-center">
          <div>
            <FaBoxOpen className="h-10 w-10" />
          </div>
          <div>
            <div className="font-semibold ">Orders</div>
          </div>
          <div>
            <div>
              <p className="font-thin text-xs">Check Your Order</p>
            </div>
          </div>
        </div>

        <div className="p-2 h-48 w-full bg-white hover:bg-neutral-400 transition-all duration-200 border-2 flex flex-col justify-center items-center">
          <div>
            <FaBoxOpen className="h-10 w-10" />
          </div>
          <div>
            <div className="font-semibold ">Orders</div>
          </div>
          <div>
            <div>
              <p className="font-thin text-xs">Check Your Order</p>
            </div>
          </div>
        </div>

        <div className="p-2 h-48 w-full bg-white hover:bg-neutral-400 transition-all duration-200 border-2 flex flex-col justify-center items-center">
          <div>
            <FaBoxOpen className="h-10 w-10" />
          </div>
          <div>
            <div className="font-semibold ">Orders</div>
          </div>
          <div>
            <div>
              <p className="font-thin text-xs">Check Your Order</p>
            </div>
          </div>
        </div>

        <div className="logout_btn w-full">
          {/* SET THE LOGIN STATUS TO FALSE */}
          <button
            onClick={() => {
              auth.logout();
            }}
            className="w-full text-center py-2 bg-black text-white"
          >
            Logout
          </button>
        </div>
      </div>

      <div className=" fixed  top-0 w-full">
        <LoginModal></LoginModal>
      </div>
    </>
  );
};

export default Profile;
