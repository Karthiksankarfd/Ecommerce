import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontextvar' 
// import { Link } from 'react-router-dom'
const SimiliarProduct = () => {
    const {data,viewProduct} = useContext(Shopcontext)
  return (
    <>
      <div className="scroll_container flex space-x-4 overflow-x-scroll px-5 py-5">

            {data.map((item)=>(
                <> 
                
              <img src={item.images[0]} alt="" className='h-60 hover:scale-110 transition-all duration-150'   onClick={() => {
                viewProduct(item);
              }}/>
                
                </>
            ))}
      </div>
    </>
  )
}

export default SimiliarProduct;
