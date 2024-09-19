import React from 'react'
import Visa from '../IMAGES/Visa.png'
import { Link } from 'react-router-dom'
import ReactConfetti from 'react-confetti'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Stage2 = () => {
  return (
    <div className="">
      <Navbar/>
    <div className='flex mt-20 justify-center items-center m-auto '> 
       <div className="bg-white rounded-lg mt-10 pb-10 mb-10 w-[28rem] lg:w-[45rem] md:w-[30rem] sm:[25rem] ">
      <div className=" ml-5 mb-5">
        <h1 className='font-bold text-[1.5rem]'>Payment Method</h1>
        <div className="flex gap-[1rem] lg:gap-[15rem] md:gap-[12rem] sm:[1.5rem] text-sky-200 ">
        <h3>Pls enter your payment Method</h3>
        <span>Step 2 0f 4</span>
        </div>
      </div>
      <div className="bg-slate-100 rounded-lg p-3 pb-10 ml-3 w-[17rem] lg:w-[43rem] md:w-[40rem] sm:w-[25rem]">
         <div className="">

          <div className="flex gap-[2.3rem] lg:gap-[25rem] md:gap-[20rem] sm:gap-[15rem]">
            <div className="">
          <input type='radio'
          className='bg-blue-400'
          />
          <span className='text-[1.5rem]  ml-3'>Credit Card</span>
          </div>
          <img
          src={Visa}
          />
          </div>
         </div>
         <div className="forms flex flex-col lg:flex-row md:flex-row sm:flex-col  gap-6">
         <div className="">
         <form action="">
         <label htmlFor="number " className='font-bold'>Card Number<br/>
          <input type="number"
          placeholder='Card Number'
          className='lg:w-[20rem] md:w-[20rem] sm-[18rem] w-[15.5rem] mt-2 p-3 rounded-xl bg-white'
          />
         </label>
         </form>
        </div>

        <div className="">
         <form action="">
         <label htmlFor="number " className='font-bold'>Expiration Date<br/>
          <input type="date"
          placeholder='DD/MM/YY'
          className='lg:w-[20rem] md:w-[20rem] sm-[18rem] w-[15.5rem] mt-2 p-3 rounded-xl bg-white'
          />
         </label>
         </form>
        </div>
        </div>

        <div className="forms flex flex-col lg:flex-row md:flex-row sm:flex-col  gap-6 mt-5">
         <div className="">
         <form action="">
         <label htmlFor="number " className='font-bold'>Card Holder<br/>
          <input type="name"
          placeholder='Card Holder'
          className='lg:w-[20rem] md:w-[20rem] sm-[18rem] w-[15.5rem] mt-2 p-3 rounded-xl bg-white'
          />
         </label>
         </form>
        </div>

        <div className="">
         <form action="">
         <label htmlFor="number " className='font-bold'>CCV<br/>
          <input type="number"
          placeholder='CCV'
          className='lg:w-[20rem] md:w-[20rem] sm-[18rem] w-[15.5rem] mt-2 p-3 rounded-xl bg-white'
          />
         </label>
         </form>
        </div>
        </div>
        <div className="flex justify-center items-center m-auto mt-5">
          <button className='bg-blue-300 font-bold p-3 mt-5 rounded-3xl w-[20rem]'><Link to="/Stage3"> Stage3</Link></button>
        </div>
      </div>
     </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Stage2
