import React, { useContext } from "react";
import Hero from "../components/Assets/Hero";
// import Items from "../components/items/Items";
import LoginModal from "../components/Modal/LoginModal";
// import { useAuth } from "../components/Authenticationcontext/Logincontext.jsx/LogincontexProvider";
import ItemsRedesign from "../components/items/ItemsRedesign";
import Cartalert from "../components/Modal/Cartalert";
import { Shopcontext } from "../context/Shopcontextvar";
import { motion } from "framer-motion";
import Mainfooter from "./Mainfooter";
import Rating from "../components/Rating/Rating";
const Shop = () => {
  const { showAlert } = useContext(Shopcontext);
  // const auth = useAuth();
  return (
    <>
      <div className="">
        <motion.div initial={{ opacity: 1, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
          <Hero/>
        </motion.div>
        <ItemsRedesign></ItemsRedesign>
        <Mainfooter/>
        <div className=" fixed  top-0 w-full">
          <LoginModal></LoginModal>
        </div>
        {showAlert && (
          <div className=" fixed  top-0 w-full ">
            <Cartalert />
          </div>
        )}
      </div>

      {/* <Rating/> */}
    </>
  );
};

export default Shop;
