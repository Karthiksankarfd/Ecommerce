// Shopcategory.js
import LoginModal from "../components/Modal/LoginModal";
import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontextvar";

const Shopcategory = (props) => {
  // invoking the shopcontext
  const { eledata } = useContext(Shopcontext);
  // console.log(eledata);
  // The value of 'category' prop can be accessed using props.category
  const { category } = props;

  // function showAlert() {
  //   var userConfirmation = window.confirm("Do you want to perform something?");

  //   if (userConfirmation) {
  //     // Perform your action here when user clicks "OK"
  //     alert("Action performed!");
  //   } else {
  //     // Action when user clicks "Cancel" or closes the dialog
  //     alert("Action canceled.");
  //   }
  // }

  const showalert =()=>{
    const userConfirmation = window.confirm("Do you want to perform something?");
    if(userConfirmation){
        console.log("ok is selected ")
    }
    else{
      console.log("cancel is selected ")
    }
  }

  // Define different UI components or content based on the category
  let categoryContent;

  if (category === "men") {
    categoryContent = (
      <>
        {/* {eledata.products.map((item)=>{ */}
        return(
        <>
          <h1>
            Define different UI components or content based on the category
          </h1>
          <h2>This page is changed now</h2>
          <button onClick={()=>{showalert()}}>SHOW ALERT</button>
          <div className=" fixed  top-0 w-full">
            <LoginModal></LoginModal>
          </div>
         
        </>
        ){/* })} */}
      </>
    );
  } else if (category === "women") {
    categoryContent = (
      <>
        <div>
          <h2>Shop Women's Category</h2>
          {/* Women's category specific content */}
        </div>
        <div className=" fixed  top-0 w-full">
          <LoginModal></LoginModal>
        </div>
      </>
    );
  } else if (category === "kids") {
    // Default content for unknown categories
    categoryContent = (
      <>
        <div>
          <h2>Shop {category} Category</h2>
          {/* Default content for unknown categories */}
        </div>
        <div className=" fixed  top-0 w-full">
          <LoginModal></LoginModal>
        </div>
      </>
    );
  }

  return categoryContent;
};

export default Shopcategory;
