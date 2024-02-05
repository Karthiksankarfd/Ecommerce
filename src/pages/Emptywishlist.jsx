import React from "react";
import { useNavigate } from "react-router-dom";

const Emptywishlist = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-y-5">
        <div className="relative">
          <div className="h-72">
            <img
              src="https://cdn4.iconfinder.com/data/icons/e-commerce-ui-outline/64/ecommerce_-_love_favorite-512.png"
              alt=""
              className="h-72 object-contain"
            />
          </div>

          <div className=" absolute top-5 left-3/4 bg-green-400 h-10 w-10 flex items-center justify-center rounded-full text-white">
            0
          </div>
        </div>

        <div className="w-full text-center">
          <p>Opps! :( Your wishlist is empty Add Product</p>
        </div>
        <div className="flex items-center justify-center">
          {/* <Link to="/"> */}
          <button className="bg-green-500 text-white px-5 py-2" onClick={()=>navigate("/")}>
            Add Product
          </button>
          {/* <button
            className="bg-green-500 text-white px-5 py-2 "
            onClick={() => {
              setTimeout(() => {
                console.log("This is delayed for 1 seconds");

                setTimeout(() => {
                  navigate("/");
                  console.log("This is delayed for 2 seconds");
                }, 2000);
              }, 1000);
            }}
          >
            settime out
          </button> */}
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Emptywishlist;
