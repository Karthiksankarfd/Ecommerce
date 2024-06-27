import React, { createContext, useState, useEffect } from "react";
// import { LogincontexProvider } from "../components/Authenticationcontext/Logincontext.jsx/LogincontexProvider";
// Invoking and exporting the createContext hook
import { useAuth } from "../components/Authenticationcontext/Logincontext.jsx/LogincontexProvider";

//! initializing the createContext
export const Shopcontext = createContext(null);

const ShopcontextProvider = ({children}) => {
  // login context
  const auth = useAuth();

  // for all product
  const [data, setdata] = useState([]);

  // for mens category
  const [eledata, seteledata] = useState([]);
  // state  for cartpage
  const [cart, setMycart] = useState([]);

  // state  for Myorderpage
  const [myOrders, setMyOrders] = useState([]);

  // state for wishlist
  const [wishlist, setWishlist] = useState([]);

  // state for buynow
  const [buyitem, setBuyitem] = useState([]);

  // for showing addtional info about the product
  const [productDetail, setProductDetail] = useState([]);

  //! for displaying the alert for existing product in cart
  const [showAlert, setShowAlert] = useState(false);

   //! for displaying the alert for existing product in cart
   const [showAlertForCartItem, setShowAlertForCartItem] = useState(false);

  // for loader
  const [loading, setLoading] = useState(true);

  // for checking the product existence in cart or wishlist
  let removeduplicate = cart.map((cartitem)=>{
    return cartitem.id
  })

  // Async function for API call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // "https://dummyjson.com/products",
          " https://api.escuelajs.co/api/v1/products"
          // " https://api.escuelajs.co/api/v1/categories"

        );
        const data = await response.json();
        setdata(data);
        // setdata(data.products);
        // console.log(data.products);
        console.log(data);
        // mens category
        const electronisresponse = await fetch("https://dummyjson.com/products/category/clothes");
        const eledata = await electronisresponse.json();
        seteledata(eledata);
        console.log(eledata);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Render spinner while data is being fetched
    return <div className="spinner w-full h-dvh flex flex-col justify-center items-center">
      <div className="spinner-animated h-16 w-16 border-b-4 border-l-4  border-blue-400 animate-spin rounded-full"></div>
      <h3>Loading...</h3>
    </div>;
  }

  const addTocart = (cartItem) => {
    if (auth.user ) {
      setMycart((prevArray) => [...prevArray, cartItem]);
    }
   
  };

  // View product function
  const viewProduct = (ProductInfo) => {
    setProductDetail(() => [ProductInfo]);
    console.log(productDetail, "showing product details ");
  };
  // getting total value of cart array 
  let TotalItems = Object.keys(cart).length;

  // code for wishlist
  const addtowishlist = (wishlistitem) => {
    setWishlist((prevArray) => [...prevArray, wishlistitem]);
  };

  // code for myorderpage
  const myorderpage = (myorderpage) => {
    setWishlist((prevArray) => [...prevArray, myorderpage]);
  };

  // Buy now page
  const handlebuynow = (buynow) => {
    setBuyitem(() => [buynow]);
    // setMycart((prevArray)=>[...prevArray,])
  };

  // Storing the children value of Shopcontextprovider in a variable providerValue
  const providerValue = {
    data,setdata,addTocart,
    cart,setMycart,viewProduct,
    productDetail,
    setProductDetail,
    TotalItems,
    addtowishlist,
    wishlist,
    setWishlist,
    buyitem,
    setBuyitem,
    handlebuynow,
    myOrders,
    setMyOrders,
    myorderpage,
    eledata,
    seteledata,
    showAlert, setShowAlert,removeduplicate,showAlertForCartItem,setShowAlertForCartItem
  };
  // console.log(cart);
  return (
    <Shopcontext.Provider value={providerValue}>
      {children}
    </Shopcontext.Provider>
  );
};

export default ShopcontextProvider;


