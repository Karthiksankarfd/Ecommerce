// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Shopcategory from "./pages/Shopcategory";
import Shopcontextprovider from "./context/Shopcontextvar";
import Productdetails from "./pages/Productdetails";
import Addresspage from "./pages/Addresspage";
import Wishlistpage from "./pages/Wishlistpage";
import Buynowpage from "./pages/Buynowpage";
import Paymentpage from "./pages/Paymentpage";
import Orderconfirmationpage from "./pages/Orderconfirmationpage";
import Cashondelivery from "./components/Typesofpayment/Cashondelivery";
import Cod from "./components/Typesofpayment/Cod";
import Upi from "./components/Typesofpayment/Upi";
import LoginPage from "./components/Authenticationcontext/LoginPage";
import { LogincontexProvider } from "./components/Authenticationcontext/Logincontext.jsx/LogincontexProvider";
import Requiredauth from "./components/Authenticationcontext/Logincontext.jsx/Requiredauth";
import Myorders from "./pages/Myorders";
import LoginModal from "./components/Modal/LoginModal";
import Profile from "./components/Authenticationcontext/Logincontext.jsx/Profile";
import Overview from "./components/Authenticationcontext/Logincontext.jsx/Overview";
import Coupons from "./components/Authenticationcontext/Logincontext.jsx/Coupons";
import Rating from "./components/Rating/Rating";
function App() {
  return (
    <>
      <div className="App  ">
        <LogincontexProvider>
          <Shopcontextprovider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop/>} />
              <Route path="/profile" element={<Profile />}>
                <Route index element={<Overview />} />
                <Route path="Coupons" element={<Coupons />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />

              <Route path="/men" element={<Shopcategory category="men" />} />
              <Route
                path="/women"
                element={<Shopcategory category="women" />}
              />
              <Route path="/kids" element={<Shopcategory category="kids" />} />
              <Route path="/product" element={<Product />}>
                <Route path=":product" element={<Product />} />
              </Route>
              {/* <Route path="/login"  element={<Loginsignup/>}/> */}
              <Route path="/product" element={<Product />} />

              <Route
                path="/cart"
                element={
                  <Requiredauth>
                    <Cart />
                  </Requiredauth>
                }
              />

              {/* for productdetail page */}

              <Route path="/productDetail" element={<Productdetails />}></Route>
              <Route path="/address" element={<Addresspage />} />
              <Route path="/wishlist" element={<Wishlistpage />} />

              <Route path="/buynowpage" element={<Buynowpage />} />
              {/* <Route path='/paymentpage' element = {<Paymentpage/>}/> */}
              <Route
                path="/orderconfirmationpage"
                element={<Orderconfirmationpage />}
              />

              <Route path="/paymentpage" element={<Paymentpage />}>
                {/* index routing */}
                {/* no need to  =specify the path when we use index*/}
                <Route path="Recommended" element={<Cashondelivery />} />
                <Route index element={<Cod />} />
                <Route path="upi" element={<Upi />} />

                {/* <Route path="New" element={<NewProducts />} /> */}
                <Route />
              </Route>
              <Route path="myorder" element={<Myorders />} />
              <Route element={<LoginModal />} />
            </Routes>
          </Shopcontextprovider>
        </LogincontexProvider>
        {/* <Rating/> */}
      </div>
    </>
  );
}

export default App;
