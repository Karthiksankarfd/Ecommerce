import React from 'react'
import { useNavigate } from 'react-router-dom'
const Cod = () => {
  // invoking usenavigate
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-y-5'>
      <div >Cash On Delicery (cash/UPI)</div>
       <div className='bg-slate-200 p-5 font-thin text-xs'>₹ 10 will be charged extra for Cash On Delivery option.</div>
       <button onClick={()=> navigate("/orderconfirmationpage")} className='w-full bg-black text-white py-4'>Place order</button>
    </div>
  )
}

export default Cod
