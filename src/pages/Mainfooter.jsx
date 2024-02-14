import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Mainfooter = () => {
  const handleEmailLinkClick = () => {
    window.location.href = "mailto: kamalsankar887@gmail.com";
  };
  return (
    <>
      <div className="footercontainer w-full flex  lg:flex-row sm:flex-col md:flex-col gap-y-2 gap-x-2 bg-black p-2 justify-center items-center h-72 sm:h-auto">
        <div className="hyperlinks lg:w-1/4 sm:w-full md:w-full p-2 ">
          <ul className=" list-none flex flex-col justify-center gap-y-3">
            <Link className="font-thin text-sm text-neutral-400 hover:underline ">
              Shop
            </Link>
            <Link className="font-thin text-sm text-neutral-400 hover:underline">
              Men
            </Link>
            <Link className="font-thin text-sm text-neutral-400 hover:underline">
              Women
            </Link>
            <Link className="font-thin text-sm text-neutral-400 hover:underline">
              Kids
            </Link>
            {/* <Link className='font-thin text-sm text-neutral-400'></Link> */}
          </ul>
        </div>
        <div className="Social_media_links lg:w-1/4  sm:w-full p-2  h-fit flex flex-col gap-y-3 md:w-full">
          <div className="font-thin text-sm text-neutral-400 hover:underline">
            Follow Us on{" "}
          </div>
          <ul className="hyperlinks list-none flex flex-row justify-start gap-y-3 gap-x-5">
            <Link className="font-thin text-sm text-neutral-400 hover:underline h-7 w-7">
              <FaInstagram className="h-7 w-7" />
            </Link>
            <Link className="font-thin text-sm text-neutral-400 hover:underline">
              <FaTwitter className="h-7 w-7" />
            </Link>
            <Link className="font-thin text-sm text-neutral-400 hover:underline">
              <FaFacebook className="h-7 w-7" />
            </Link>
            <Link className="font-thin text-sm text-neutral-400 hover:underline">
              <FaWhatsapp className="h-7 w-7" />
            </Link>
           
            
            {/* <Link className='font-thin text-sm text-neutral-400'></Link> */}
          </ul>
        
          {/* <div className="mail text-neutral-400">
            <FaMailBulk className="h-7 w-7"/>
          </div> */}
        </div>
        <div className="lg:w-1/4  p-2  sm:w-full md:w-full flex flex-wrap justify-start items-start h-36 text-neutral-400">
          <div className="contact flex justify-start items-center gap-x-3">
            <span className="text-neutral-400 ">Call Us on</span>
            <FaPhone className="text-neutral-400" />
            <span className="text-neutral-400">
              {" "}
              <p>+91 78765 43222</p>
            </span>
          </div>
          <p
              onClick={handleEmailLinkClick}
              className="font-thin text-sm text-neutral-400 hover:underline"
            >
              kamalsankar887@gmail.com
            </p>

          <div className="address text-xs">
            <address>
              424, Bommanahalli, Hosur Main Road, Bangalore - 560 068. 080 -
              4110 7755, +91 - 96111 73607
            </address>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainfooter;
