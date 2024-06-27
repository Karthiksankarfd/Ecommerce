import React from 'react'
import { useNavigate } from 'react-router-dom'
const Upi = () => {
     // invoking usenavigate
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-y-5'>
      <div> Pay PhonePe/Google Pay/BHIM UPI</div>
      <div className='flex flex-col group '>
      <div className='flex gap-x-5'>
                <input type="radio" />
                <div className='h-14 w-14 '>
                    <img className='h-14 w-14 object-contain' src="https://cdn141.picsart.com/363807473021211.png" alt="" />
                </div>
            </div>

            <div className='hidden group-hover:block '>
                <form action="/orderconfirmationpage">
                <input type="text" required className='w-full py-4 border-2 border-slate-500 mb-2 focus:outline-neutral-400 px-5' placeholder='Enter UPI ID Here'  />
            <button type='submit' className='w-full bg-black text-white py-4 'onClick={()=> navigate("")} >Pay Now</button>
                </form>
          
            </div>
            
        </div>

        <div className='flex flex-col group '>
            <div className='flex gap-x-5'>
                <input type="radio" className='group-focus:checked:checked' />
                <div className='h-14 w-14 '>
                    <img className='h-14 w-14 object-contain' src="https://logodix.com/logo/1763560.png" alt="" />
                </div>
            </div>

            <div className='hidden group-hover:block '>
            <input type="text" className='w-full py-4 border-2 border-slate-500 mb-2 focus:outline-neutral-400 px-5' placeholder='Enter UPI ID Here'  />
            <button className='w-full bg-black text-white py-4 ' onClick={()=> navigate("/orderconfirmationpage")} >Pay Now</button>
            </div>
            
        </div>

        <div className='flex flex-col group '>
            <div className='flex gap-x-5'>
                <input type="radio" />
                <div className='h-14 w-14 '>
                    <img className='h-14 w-14 object-contain' src="https://omshreestores.com/wp-content/uploads/2020/07/PhonePay.png" alt="" />
                </div>
            </div>

            <div className='hidden group-hover:block'>
         
            <input type="text" className='w-full py-4 border-2 border-slate-500 mb-2 px-5 ' placeholder='Enter UPI ID Here'  />
            <button className='w-full bg-black text-white py-4 ' onClick={()=> navigate("/orderconfirmationpage")} >Pay Now</button>
            </div>
            
        </div>
    </div>
  )
}

export default Upi
