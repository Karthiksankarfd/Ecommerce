// import { FaBeer } from "react-icons/fa";
// import { FaCart } from "react-icons/fa";
// import {Cart} from "../../IconsAnimated/Cart.gif"
// import Icart from "../../IconsAnimated/Icart.gif";
import { motion } from 'framer-motion';
import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
// import { FaSignInAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { Shopcontext } from "../../context/Shopcontextvar";
import { useAuth } from "../Authenticationcontext/Logincontext.jsx/LogincontexProvider";
const Navbar = () => {
  // usenavigate
  const navigate = useNavigate();
  const { cart,wishlist } = useContext(Shopcontext);
  // number of items in cart
  // console.log(Object.keys(cart).length)
  let TotalItems = Object.keys(cart).length;
  let wishlisthaveproduct = Object.keys(wishlist).length 
  // for login button
  const auth = useAuth();

  const [shownavbar, setNavbar] = useState(false);

  // first destructure the isactive because it contain the value as object
  const navlinkStyle = ({ isActive }) => {
    // use return keyword always
    return {
      fontweight: isActive ? "700" : "400",
      // font-weight: 800;
      textDecoration: isActive ? "none" : "none",
      color: isActive ? "green" : "white",
      // text :isActive ? "green" : "white",
    };
  };

  // style for login button

  // const loginbtn = ({ isActive }) => {
  //   return {
  //     background: isActive ? "black" : "white",
  //     fontweight: isActive ? "700" : "400",
  //   };
  // };

  return (
    <>
      {/* main nav section  */}

      <header className="w-full flex sm:justify-center items-center lg:hidden sm:flex bg-black h-10">
        <img
          src="//espanshe.com/cdn/shop/files/Eshpanshe_logo_old_white.png?v=1687322061&width=205"
          className=" h-6 object-cover   "
          alt=""
        />
      </header>
      <nav className=" lg:w-full lg:h-24 lg:bg-black lg:flex lg:justify-between lg:items-center lg:px-10 sm:px-5 sm:h-14 sm:w-full    sm:bg-black sm:items-center sm:flex sm:justify-between">
        <section className="  sm:h-11 sm:w-11 lg:h-24 lg:w-44 flex items-center ">
          <GiHamburgerMenu
            className=" lg:hidden sm:h-8 sm:w-11 sm:object-cover text-white"
            onClick={() => {
              setNavbar(true);
            }}
          />
          {/* logo for larger screen */}
          <img
            src="//espanshe.com/cdn/shop/files/Eshpanshe_logo_old_white.png?v=1687322061&width=205"
            className="sm:hidden lg:block lg:object-cover "
            alt=""
          />
        </section>

        <section className="relative flex">
          <input
            type="search"
            placeholder="search"
            className=" rounded-full sm:h-8 sm:w-44 sm:placeholder-px-5  focus:outline-none pl-9 lg:pb-1 lg:w-56"
          />
          <FaSearch className="search-icon absolute top-2 left-3 " />
        </section>

        <section className="lg:flex lg:gap-x-10 sm:hidden ">
          {/* for pages */}
          <Link to="/myorder"></Link>
          <NavLink to="/" style={navlinkStyle}>
            Shop{" "}
          </NavLink>
          <NavLink to="/men" style={navlinkStyle}>
            Men{" "}
          </NavLink>
          <NavLink to="/women" style={navlinkStyle}>
            Women
          </NavLink>
          <NavLink to="/kids" style={navlinkStyle}>
            Kids
          </NavLink>
        </section>

        <section className="flex gap-x-5">
          {/* if the user is not logged in show the modal  */}
        <Link to="/login">
        {!auth.user ? (
            <button
              className="text-white lg:block sm:hidden animate-pulse"
              onClick={() => {
                auth.openModal();
              }}
            >
              Login
            </button>
          ) : (
            <button
              className="text-white lg:block sm:hidden"
              onClick={() => {
                auth.logout();
              }}
            >
              Logout
            </button>
          )}
        </Link>
          <Link to="/profile">
            <button className="text-white lg:flex sm:hidden ">Profile</button>
          </Link>
        </section>

        <section className="lg:flex lg:gap-x-10 sm:flex gap-x-4 sm:h-4 ">
          <NavLink to="/wishlist" style={navlinkStyle}>
            <FaHeart className="" style={navlinkStyle} />
            <div className="mt-[-30px] bg-black ml-3 w-4 h-4 rounded-full flex justify-center items-center text-white text-xs">
                  {wishlisthaveproduct}
                </div>
            {/* <img src={Icart} alt="" className="h-10 bg-transparent"/> */}
          </NavLink>

          <NavLink to="/cart" style={navlinkStyle}>
            {auth.user ? (
              <>
                <FaShoppingCart
                  className=""
                  style={navlinkStyle}
                
                />
                <div className="mt-[-30px] bg-black ml-3 w-4 h-4 rounded-full flex justify-center items-center text-white text-xs">
                  {TotalItems}
                </div>
              </>
            ) : (
              <></>
              
            )}
          </NavLink>

          <NavLink to="/cart">
            <img src="" alt="" />
          </NavLink>
        </section>
      </nav>

      {/* we have to toggle the menu bar on button click and once the button is clicked the button itself should change dynamically */}
      {/*  */}

      {shownavbar && (
        <motion.div initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>
                   <section className="lg:hidden sm:flex sm:flex-col sm:items-start sm:pl-5 gap-y-5 sm:py-5 bg-black text-black translate-x-0 ">
          <button
            onClick={() => {
              setNavbar(false);
            }}
          >
            <FaTimes className="h-10 text-white" />
          </button>
          <NavLink
            to=""
            className=""
            onClick={() => {
              setNavbar(false);
            }}
          >
            <h3
              onClick={() => {
                navigate("/");
              }}
              className="text-white"
            >
              Home
            </h3>
          </NavLink>
          <NavLink
            to=""
            onClick={() => {
              setNavbar(false);
            }}
          >
            <h3 className="text-white">Men</h3>
          </NavLink>
          <NavLink
            to=""
            onClick={() => {
              setNavbar(false);
            }}
          >
            <h3 className="text-white">Women</h3>
          </NavLink>
          <NavLink
            to=""
            onClick={() => {
              setNavbar(false);
            }}
          >
            <h3 className="text-white">Kids</h3>
          </NavLink>
          <NavLink
            to="/profile"
            onClick={() => {
              setNavbar(false);
            }}
          >
            <h3 className="text-white">My Profile</h3>
          </NavLink>
          <NavLink
            to=""
            onClick={() => {
              setNavbar(false);
            }}
          >
            {/* <h3 className="text-white">Sign In</h3> */}
            {!auth.user ? (
              <button
                className="text-red-400 lg:block "
                onClick={() => {
                  auth.openModal();
                }}
              >
                Login
              </button>
            ) : (
              <button
                className="text-white "
                onClick={() => {
                  auth.logout();
                }}
              >
                Logout
              </button>
            )}
          </NavLink>
          <NavLink
            to=""
            onClick={() => {
              setNavbar(false);
            }}
          >
            <h3 className="text-white">Profile</h3>
          </NavLink>
        </section>
        </motion.div>
   
      )}
    </>
  );
};

export default Navbar;
