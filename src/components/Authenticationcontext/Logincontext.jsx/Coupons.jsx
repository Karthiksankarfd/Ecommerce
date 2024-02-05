import React from "react";
import { FaHeart } from "react-icons/fa";

const Coupons = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="coup_main w-full p-5 relative border-2">
        <div className="absolute top-0 left-0">
          <FaHeart className="absolute top-0 left-1 -rotate-45 h-8 text-pink-300" />
          <FaHeart className="absolute top-2 left-5 -rotate-45 h-2  text-pink-200" />
        </div>

        <div className="absolute top-1/2 left-1/2">
          <FaHeart className="absolute top-0 left-1 -rotate-45 h-8 text-pink-300" />
          <FaHeart className="absolute top-2 left-5 -rotate-45 h-2  text-pink-200" />
        </div>

        {/* <FaHeart className='absolute top-1 left-10 -rotate-45'/> */}
        {/* <FaHeart className='absolute '/> */}
        <div className="flex  items-center ">
          <div className="w-32  ">
            <h3>
              100 <br /> OFF
            </h3>
          </div>
          <div className="flex justify-start flex-col border-l-2 p-5">
            <p className="text-sm">On minimum purchase of Rs.</p>
            <p className="text-sm">Code: LEVIS100OFF</p>
          </div>
        </div>

        <div className="flex justify-between item-center pt-5">
          <p className="text-sm">Expiry: FEB 29 2024 11:59:00 P.M</p>
          <button className="text-sm font-semibold text-green-400">
            Details
          </button>
        </div>
      </div>

      {/* second coupon */}

      <div className="coup_main w-full p-5 relative border-2">
        <div className="absolute top-0 left-0">
          <FaHeart className="absolute top-0 left-1 -rotate-45 h-8 text-pink-300" />
          <FaHeart className="absolute top-2 left-5 -rotate-45 h-2  text-pink-200" />
        </div>

        <div className="absolute top-1/2 left-1/2">
          <FaHeart className="absolute top-0 left-1 -rotate-45 h-8 text-pink-300" />
          <FaHeart className="absolute top-2 left-5 -rotate-45 h-2  text-pink-200" />
        </div>

        {/* <FaHeart className='absolute top-1 left-10 -rotate-45'/> */}
        {/* <FaHeart className='absolute '/> */}
        <div className="flex  items-center ">
          <div className="w-32  ">
            <h3>
              100 <br /> OFF
            </h3>
          </div>
          <div className="flex justify-start flex-col border-l-2 p-5">
            <p className="text-sm">On minimum purchase of Rs.</p>
            <p className="text-sm">Code: LEVIS100OFF</p>
          </div>
        </div>

        <div className="flex justify-between item-center pt-5">
          <p className="text-sm">Expiry: FEB 29 2024 11:59:00 P.M</p>
          <button className="text-sm font-semibold text-green-400">
            Details
          </button>
        </div>
      </div>

      <div className="coup_main w-full p-5 relative border-2">
        <div className="absolute top-0 left-0">
          <FaHeart className="absolute top-0 left-1 -rotate-45 h-8 text-pink-300" />
          <FaHeart className="absolute top-2 left-5 -rotate-45 h-2  text-pink-200" />
        </div>

        <div className="absolute top-1/2 left-1/2">
          <FaHeart className="absolute top-0 left-1 -rotate-45 h-8 text-pink-300" />
          <FaHeart className="absolute top-2 left-5 -rotate-45 h-2  text-pink-200" />
        </div>

        {/* <FaHeart className='absolute top-1 left-10 -rotate-45'/> */}
        {/* <FaHeart className='absolute '/> */}
        <div className="flex  items-center ">
          <div className="w-32  ">
            <h3>
              100 <br /> OFF
            </h3>
          </div>
          <div className="flex justify-start flex-col border-l-2 p-5">
            <p className="text-sm">On minimum purchase of Rs.</p>
            <p className="text-sm">Code: LEVIS100OFF</p>
          </div>
        </div>

        <div className="flex justify-between item-center pt-5">
          <p className="text-sm">Expiry: FEB 29 2024 11:59:00 P.M</p>
          <button className="text-sm font-semibold text-green-400">
            Details
          </button>
        </div>
      </div>

      <div className="coup_main w-full p-5 relative border-2">
        <div className="absolute top-0 left-0">
          <FaHeart className="absolute top-0 left-1 -rotate-45 h-8 text-pink-300" />
          <FaHeart className="absolute top-2 left-5 -rotate-45 h-2  text-pink-200" />
        </div>

        <div className="absolute top-1/2 left-1/2">
          <FaHeart className="absolute top-0 left-1 -rotate-45 h-8 text-pink-300" />
          <FaHeart className="absolute top-2 left-5 -rotate-45 h-2  text-pink-200" />
        </div>

        {/* <FaHeart className='absolute top-1 left-10 -rotate-45'/> */}
        {/* <FaHeart className='absolute '/> */}
        <div className="flex  items-center ">
          <div className="w-32  ">
            <h3>
              100 <br /> OFF
            </h3>
          </div>
          <div className="flex justify-start flex-col border-l-2 p-5">
            <p className="text-sm">On minimum purchase of Rs.</p>
            <p className="text-sm">Code: LEVIS100OFF</p>
          </div>
        </div>

        <div className="flex justify-between item-center pt-5">
          <p className="text-sm">Expiry: FEB 29 2024 11:59:00 P.M</p>
          <button className="text-sm font-semibold text-green-400">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
