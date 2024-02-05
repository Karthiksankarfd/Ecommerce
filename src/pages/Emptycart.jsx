import React from 'react'
import { useNavigate} from 'react-router-dom'

const Emptycart = () => {
  // calling the usenavigate hook
  const navigate = useNavigate();
  return (
    <div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-y-5">
                  {/* <div className="h-72">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png"
                      alt=""
                      className="h-72 object-contain"
                    />
                  </div> */}
                  <div className='relative' >
                    <div className="h-72">
                            <img
                            src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png"
                            alt=""
                            className="h-72 object-contain"
                            />
                        </div>

                        <div className=' absolute top-5 left-3/4 bg-green-400 h-10 w-10 flex items-center justify-center rounded-full text-white'>
                            0
                        </div>
                     
               </div>
                  <div className="w-full text-center">
                    <p>Opps! :( Your cart is empty Add Product</p>
                  </div>
                  <div className="flex items-center justify-center">
                    {/* <Link to="/"> */}
                      <button onClick={()=>{navigate("/")}} className="bg-green-500 text-white px-5 py-2 ">
                        Add Product
                      </button>
                    {/* </Link> */}
                  </div>
                </div>
    </div>
  )
}

export default Emptycart
