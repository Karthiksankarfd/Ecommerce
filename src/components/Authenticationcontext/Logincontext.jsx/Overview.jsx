import React from "react";
import {
  FaAccusoft,
  FaBoxOpen,
  FaCreditCard,
  FaDesktop,
  FaFirstOrder,
  FaFolder,
  FaMoneyCheck,
  FaProcedures,
  FaProductHunt,
  FaSave,
  FaUser,
} from "react-icons/fa";
import { useAuth } from "./LogincontexProvider";

const Overview = () => {
  const auth = useAuth()
  return (
    <div className="flex flex-col justify-center">
      <div className="profile_with_photo p-5 w-full bg-white flex item-start justify-between">
        <div className="profile_photo bg-neutral-400 h-32 w-32 py-5">
          <FaUser className="w-full h-full text-white "></FaUser>
        </div>

        <div>
          <div className="name">
            <div className="text-black border-2 px-2"> {auth.user}</div>
          </div>
        </div>
      </div>

      <div className="cards w-full flex flex-wrap gap-x-5 gap-y-5 p-5">
        <div className="p-2 h-48 w-48 bg-white hover:bg-neutral-400 transition-all duration-200 border-2 flex flex-col justify-center items-center">
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

        <div className="p-2 h-48 w-48 bg-white border-2 hover:bg-neutral-400 transition-all duration-200 flex flex-col justify-center items-center">
          <div>
            <FaSave className="h-10 w-10" />
          </div>
          <div>
            <div className="font-semibold ">My Collections</div>
          </div>
          <div>
            <div>
              <p className="font-thin text-xs">Check Your Order</p>
            </div>
          </div>
        </div>

        <div className="p-2 h-48 w-48 bg-white border-2 hover:bg-neutral-400  duration-200 flex flex-col justify-center items-center">
          <div>
            <FaMoneyCheck className="h-10 w-10" />
          </div>
          <div>
            <div className="font-semibold ">Payment</div>
          </div>
          <div>
            <div>
              <p className="font-thin text-xs">Saved Payment Method</p>
            </div>
          </div>
        </div>

        <div className="p-2 h-48 w-48 bg-white border-2 hover:bg-neutral-400  duration-200 flex flex-col justify-center items-center">
          <div>
            <FaMoneyCheck className="h-10 w-10" />
          </div>
          <div>
            <div className="font-semibold ">Payment</div>
          </div>
          <div>
            <div>
              <p className="font-thin text-xs">Saved Payment Method</p>
            </div>
          </div>
        </div>

        <div className="p-2 h-48 w-48 bg-white border-2 hover:bg-neutral-400  duration-200 flex flex-col justify-center items-center">
          <div>
            <FaMoneyCheck className="h-10 w-10" />
          </div>
          <div>
            <div className="font-semibold ">Payment</div>
          </div>
          <div>
            <div>
              <p className="font-thin text-xs">Saved Payment Method</p>
            </div>
          </div>
        </div>

        <div className="p-2 h-48 w-48 bg-white border-2 hover:bg-neutral-400  duration-200 flex flex-col justify-center items-center">
          <div>
            <FaMoneyCheck className="h-10 w-10" />
          </div>
          <div>
            <div className="font-semibold ">Payment</div>
          </div>
          <div>
            <div>
              <p className="font-thin text-xs">Saved Payment Method</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;
