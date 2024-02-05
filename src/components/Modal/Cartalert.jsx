import React, { useContext } from 'react'
import { Shopcontext } from '../../context/Shopcontextvar'
import { FaShoppingCart } from 'react-icons/fa'
const Cartalert = () => {
  const {removeduplicate, setShowAlert} = useContext(Shopcontext)

 
  return (
    <div className='w-full bg-transparent lg:h-dvh sm:h-dvh flex justify-center items-center relative '>
      <div className='w-full z-10 bg-black absolute h-dvh opacity-50'></div>
      <div className="cartalert lg:w-3/12 sm:w-3/4 bg-black opacity-100 h-fit flex flex-col gap-y-2 justify-center items-center p-5 text-center text-white text-sm  absolute z-20">
        
        <div className='bg-black h-fit w-fit p-4 rounded-full flex justify-center items-center'>
          <FaShoppingCart className='text-white '/>
        </div>
         <div>Product Already Exist in Cart{removeduplicate.includes(removeduplicate.id)} </div>
         <div className='w-full bg-red-600 py-2' onClick={()=>setShowAlert(false)} >
          <button >Close</button>
          </div>
         {/* <div><button onClick={ setTimeout(() => {
          setShowAlert(false)
         }, 2000) } >Close</button></div> */}
      </div>
    </div>
  )
}

export default Cartalert
