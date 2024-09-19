import React from 'react'
import Visa from '../IMAGES/Visa.png'
import { Link } from 'react-router-dom'


const Bill = () => {
  return (
    <div className='mr-10'>
     <div className="bg-white w-[20rem] lg:w-[45rem] md:w-[30rem]  sm:w-[20rem] mt-[10rem] mb-[6rem] rounded-lg p-5 justify-center m-auto  items-center">
      <h1 className='font-bold text-[1.5rem]'>
        Billing info
      </h1>
      <div className="flex  gap-[1.4rem] lg:gap-[17rem] md:gap-[14rem] sm:[1.5rem] text-sky-200">
      <span>Pls enter your billing info</span>
      <span>Step 1 of 4</span>
      </div>
      <div className="input-field mt-5 flex  flex-col lg:flex-row md:flex-roe sm:flex-col gap-10">
        <div className="">
         <form action="">
         <label htmlFor="name " className='font-bold'>Name <br/>
          <input type="text"
          placeholder=' Your name'
          className='lg:w-[20rem] md:w-[20rem] sm:w-[19rem] w-[18rem] mt-5 p-3 rounded-xl bg-slate-100'
          />
         </label>
         </form>
        </div>

        <div className="">
         <form action="">
         <label htmlFor="number " className='font-bold'>Phone Number <br/>
          <input type="number"
          placeholder=' Phone number'
          className='lg:w-[20rem] md:w-[20rem] sm:w-[19rem] w-[18rem] mt-5 p-3 rounded-xl bg-slate-100'
          />
         </label>
         </form>
        </div>
      </div>

      <div className="input-field mt-5 flex  flex-col lg:flex-row md:flex-roe sm:flex-col gap-10">
        <div className="">
         <form action="">
         <label htmlFor="name " className='font-bold'>Address <br/>
          <input type="text"
          placeholder='Address'
          className='lg:w-[20rem] md:w-[20rem] sm:w-[19rem] w-[18rem] mt-5 p-3 rounded-xl bg-slate-100'
          />
         </label>
         </form>
        </div>

        <div className="">
         <form action="">
         <label htmlFor="number " className='font-bold'>Town / City<br/>
          <input type="text"
          placeholder='Town or City'
          className='lg:w-[20rem] md:w-[20rem] sm:w-[19rem] w-[18rem] mt-5 p-3 rounded-xl bg-slate-100'
          />
         </label>
         </form>
        </div>
      </div>
      <div className="flex justify-center items-center m-auto">
      <button className='bg-blue-300 font-bold p-3 mt-5 rounded-3xl w-[20rem]'>
        <Link to="/Stage2">
      Stage2
      </Link>
    </button> 
    </div>
     </div>

   
    </div>
  )
}

export default Bill
