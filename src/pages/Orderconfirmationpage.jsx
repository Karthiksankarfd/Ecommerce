import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Orderconfirmationpage = () => {
  const [showComponent, setShowComponent] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Your JSX code herec
      // showComponent(true)
      setShowComponent(true);
      console.log("delayed for one hour");
    }, 1000);
    return () => {
      clearTimeout(timeoutId, 1000);
      // clearTimeout(timeoutId);
    }; // Cleanup the timeout on component unmount
  }, []); // Run the effect once on component mount

  return (
    <>
      {showComponent && (
        <div className="bg-white sm:w-full sm:h-fit  lg:h-dvh w-full flex justify-center items-center">
          <div className="flex justify-center flex-col  w-2/5 ">
            <motion.div
              initial={{ opacity: 1, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center flex-col "
            >
              {" "}
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/order-placed-purchased-icon.svg"
                alt=""
                className="h-60  animate-cartlogospin"
              />{" "}
              <h1 className="text-center text-xl my-5 ">
                Your Order Has been placed
              </h1>
              {/*  */}
              <button
                // onClick={() => {
                //   navigate("/myorder");
                // }}

                onClick ={setTimeout(() => {
                  navigate("/myorder");
                },2000)}
              >
                View Orders
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orderconfirmationpage;
