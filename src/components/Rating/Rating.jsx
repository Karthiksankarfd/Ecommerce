import React from "react";
// import {Fastar}  from "react-icons"
import { FaCreditCard, FaMoneyBill, FaPaypal, FaStar } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../Authenticationcontext/Logincontext.jsx/LogincontexProvider";
const Rating = () => {
  const auth = useAuth();
  const [hoveredstar, setHoveredstar] = useState(null);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(null);
  const [userreview, setUserreview] = useState([]);
  const [updatedrating, setUpdatedRating] = useState([]);
  const [date, setDate] = useState("");

  const handlestarHover = (indexOFstar) => {
    setHoveredstar(indexOFstar);
  };

  const handlestarHoverleave = () => {
    setHoveredstar();
  };

  const handleInputChange = (e) => {
    setReview(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can access the updated 'review' value here
  //   console.log("Review submitted:", review);
  // };

  // the task is to push the rating review data in the form of object and
  // key value pairs
  const Pushreview = (reviewFromTheUser) => {
    setUserreview((prev) => [
      ...prev,
      { reviewFromTheUser, date: date, usermail: auth.user, rating: rating },
    ]);
    console.log(Pushreview);
  };
  console.log(userreview);

  return (
    <>
      <div className="px-5  w-full flex lg:flex-row sm:flex-col md:flex-col  gap-y-3  mt-5">
        <div className="childcontainer w-1/2 h-auto flex flex-col items-center gap-y-3 ">
          {/* bold 4.5 rating text */}
          <div className="mainrating items-center gap-x-3  lg:w-1/2 sm:w-full md:w-full ">
            <div>Ratings</div>
            <div className="flex  items-center">
              <h1 className=" flex text-3xl font-sans"> 4.5</h1>
              {[...Array(1)].map((_, index) => (
                <>
                  <FaStar key={index} className="text-green-400 text-3xl" />
                </>
              ))}
            </div>
          </div>

          <div className="ratingbars h-fit w-1/2 sm:w-full md:w-full flex flex-col gap-y-3 justify-center">
            <div className="bar_with_numberofratings flex items-center w-full">
              <div>5</div>
              <div className="text-xs text-red-400">
                <FaStar />
              </div>
              <div className="bg-neutral-400 lg:w-1/2 sm:w-full h-2  rounded-lg">
                <div className="bg-green-400 w-3/4 h-2  rounded-lg"></div>
              </div>
              <h3>539</h3>
            </div>

            <div className="bar_with_numberofratings flex items-center w-full">
              <div>4</div>
              <div className="text-xs text-red-400">
                <FaStar />
              </div>
              <div className="bg-neutral-400 lg:w-1/2  sm:w-full h-2  rounded-lg">
                <div className="bg-green-400 w-3/5 h-2  rounded-lg"></div>
              </div>
              <h3>339</h3>
            </div>

            <div className="bar_with_numberofratings flex items-center w-full">
              <div>3</div>
              <div className="text-xs text-red-400">
                <FaStar />
              </div>
              <div className="bg-neutral-400 lg:w-1/2 sm:w-full h-2  rounded-lg">
                <div className="bg-green-400 w-3/6 h-2  rounded-lg"></div>
              </div>
              <h3>67</h3>
            </div>

            <div className="bar_with_numberofratings flex items-center w-full">
              <div>2</div>
              <div className="text-xs text-red-400">
                <FaStar />
              </div>
              <div className="bg-neutral-400 lg:w-1/2 sm:w-full h-2  rounded-lg">
                <div className="bg-green-400 w-3/12 h-2  rounded-lg"></div>
              </div>
              <h3>33</h3>
            </div>

            <div className="bar_with_numberofratings flex items-center w-full">
              <div>1</div>
              <div className="text-xs text-red-400">
                <FaStar />
              </div>
              <div className="bg-neutral-400 lg:w-1/2 sm:w-full h-2  rounded-lg">
                <div className="bg-green-400 w-1/4 h-2  rounded-lg"></div>
              </div>
              <h3>10</h3>
            </div>
          </div>
        </div>
        <div className="childcontainer lg:w-1/2 sm:w-full md:w-full overflow-y-scroll h-1/2">
          <div className="ratingmaincontainer py-2  flex gap-y-3 flex-wrap flex-col">
            <div>Write Your Review</div>

            <form
              className=" flex flex-col gap-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                Pushreview(review);
                setUpdatedRating(rating);
              }}
            >
              <input
                id="reviewfield"
                type="text"
                className="border-2 px-4 pt-10 pb-4 w-full"
                placeholder="write Your Review"
                onChange={handleInputChange}
                required
              />
              <h3 className="text-sm font-sans font-bold">
                Over Ratings : {33 / 8}
              </h3>
              <div className="stars flex">
                {[...Array(5)].map((_, index) => (
                  <>
                    <motion.div
                      initial={{ opacity: 1, y: -100, scale: 1.3 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaStar
                        key={index}
                        className={`star cursor-pointer ${
                          index <= hoveredstar
                            ? "text-green-400"
                            : "text-neutral-400"
                        }`}
                        onMouseEnter={() => handlestarHover(index)}
                        // onMouseLeave={handlestarHoverleave}
                        onClick={() => setRating(`${index + 1} ratings`)}
                      />
                    </motion.div>
                  </>
                ))}
              </div>

              <button
                className="px-2 py-2 w-fit bg-black text-white"
                type="submit"
                onClick={() => {
                  const currentTime = new Date();
                  console.log(currentTime);
                  console.log(currentTime.toLocaleDateString(), "current time");
                  setDate(currentTime.toLocaleDateString());
                  setTimeout(() => {
                    document.getElementById("reviewfield").value = "";
                  }, 1000);
                }}
              >
                Update review
              </button>
            </form>
          </div>
          <h3>Customer Reviews</h3>
          <h3>Total Reviews({userreview.length})</h3>
          <div className=" w-full  h-auto flex flex-col mt-2">
            {userreview.map((para) => (
              <>
                <span className="text-green-400 font-sans font-bold">
                  {para.rating}
                </span>
                <p className="py-2 text-xs ">{para.reviewFromTheUser}</p>
                <div className="flex justify-between text-wrap">
                  <span className="text-xs ">{para.date}</span>
                  <div className="text-xs">{para.usermail}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rating;
