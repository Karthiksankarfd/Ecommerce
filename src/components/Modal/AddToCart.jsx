import React,{useContext} from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { Shopcontext } from '../../context/Shopcontextvar';
const AddedToCart = () => {
    const {setShowAlertForCartItem} = useContext(Shopcontext)
  return (
    <div className='w-full bg-transparent lg:h-dvh sm:h-dvh flex justify-center items-center relative '>
    <div className='w-full z-10 bg-black absolute h-dvh opacity-50'></div>
    <div className="cartalert lg:w-3/12 sm:w-3/4 bg-black opacity-100 h-fit flex flex-col gap-y-2 justify-center items-center p-5 text-center text-white text-sm  absolute z-20">
      
      <div className='bg-black h-fit w-fit p-4 rounded-full flex justify-center items-center'>
        <FaHeart className='text-white animate-bounce h-10 w-10'/>
      </div>
       <div>Added To Wishlist</div>
       <div className='w-full bg-green-600 py-2' onClick={()=>setShowAlertForCartItem(false)} >
        <button >Close</button>
        </div>
       {/* <div><button onClick={ setTimeout(() => {
        setShowAlert(false)
       }, 2000) } >Close</button></div> */}
    </div>
  </div>
  )
}

export default AddedToCart
