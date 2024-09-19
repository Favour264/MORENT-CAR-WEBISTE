import React, { useState } from 'react'

const Stage3 = () => {
  const [isOpen , setIsOpen] = useState(false);
  const handleOpen = () => {
     setIsOpen(true)
  };
  const handleClose = () =>{
     setIsOpen(false)
  }
   


  return (
   <div className="bg-white  w-[20rem] lg:w-[50rem] md:w-[30rem]  sm:w-[20rem] rounded-lg  justify-center items-center m-auto p-5">
     {
            isOpen && (
                <div className="fixed insert-0 backdrop-blur-sm bg-opacity-30 ml-[20rem] mt-[6rem] rounded-2xl
                 modal  z-999 flex top-0 bg-red-200 left-0  w-[50rem] h-[30rem] justify-center items-center m-auto ">
                    <div className="modal-content  ">
                        <div className="w-[20rem] h-[15rem] bg-white shadow-black shadow-md" >
                         <h1 className='font-bold text-2xl'>Nissan GT-R</h1>
                         <span>⭐⭐⭐⭐ 40+ Reviews</span>
                         <p>
                          NISMO has become the embidiment of Nissan's outstanding performance 
                         </p>
                        </div>
                        <button onClick={handleClose} className='bg-red-500 p-3'>close</button>
                    </div>
                </div>
            )
        }  
    <div className="">
    <div className="">
      <h1 className='font-bold text-2xl'>Rental Info</h1>
      <p>Pls select your rental date</p>
    </div>
    <div className="">
      <div className="">
        <input type="radio" checked/>
        <span className='text-2xl ml-3'>Pick-Up</span>
      </div>
      <div className="flex lg:flex-row md:lfex-row sm:flex-col flex-col  gap-10">
      <div className="mt-3 ">
        <form action="">
          <label htmlFor="Location">Location <br/>
          <select className='text-[#90A3BF] bg-[#F6F7F9] p-3 pl-4 lg:w-[20rem] md:w-[20rem] sm-[18rem] w-[17rem]' name="" id="">
        <option value=""
        disabled selected hidden>Select Your Location</option>
        <option value="male">Amsterdan</option>
        <option value="female">Athens</option>
        <option value="male">Bangkok</option>
        <option value="male">Berlin</option>
        <option value="male">Boston</option>
        <option value="male">Brisbane</option>
        <option value="male">Barcelona</option>
        <option value="male">Cairo</option>
        <option value="male">Chicago</option>
        <option value="male">Delhi</option>
        <option value="male">Dubai</option>
        <option value="male">Ireland</option>
        <option value="male">Istabul</option>
        <option value="male">Jakarta</option>
        <option value="male">London</option>
        <option value="male">Los Angeles</option>
        <option value="male">Madrid</option>
        <option value="male">Melbourne</option>
        <option value="male">Nigeria</option>
        <option value="male">New York</option>
        <option value="male">Turkey</option>
        <option value="male">Mexico</option>
        <option value="male">Ireland</option>
        <option value="male">Australia</option>
        <option value="male">South Africa</option>
      </select>
          </label>
        </form>
      </div>

      <div className="mt-3 ">
        <form action="">
          <label htmlFor="Date"> Date <br/>
           <input type="date"
           className='text-[#90A3BF] bg-[#F6F7F9] p-3 pl-4 lg:w-[20rem] md:w-[20rem] sm-[18rem] w-[17rem]'
           />
          </label>
        </form>
      </div>
      </div>

      <div className=" gap-[2rem]">
      <div className="mt-3 ">
        <form action="">
          <label htmlFor="Time">Time <br/>
          <input type="time"
          placeholder='Enter TIme'
          className='text-[#90A3BF] bg-[#F6F7F9] p-3 pl-4 lg:w-[20rem] md:w-[20rem] sm-[18rem] w-[17rem]'
          />
          </label>
        </form>
      </div>
      </div>

    </div>
    </div>

    <div className="Drop-off mt-10">
      <div className="">
      <div className="">
        <input type="radio"/>
        <span className='text-2xl ml-3'>Drop-off</span>
      </div>
      <div className="flex flex-col gap-[2rem] lg:flex-row md:flex-row sm:flex-col ">
      <div className="mt-3 ">
        <form action="">
          <label htmlFor="Location">Location <br/>
          <select className='text-[#90A3BF] bg-[#F6F7F9] p-3 pl-4 lg:w-[20rem] md:w-[20rem] sm-[18rem] w-[17rem]' name="" id="">
        <option value=""
        disabled selected hidden>Select Your Location</option>
        <option value="male">Amsterdan</option>
        <option value="female">Athens</option>
        <option value="male">Bangkok</option>
        <option value="male">Berlin</option>
        <option value="male">Boston</option>
        <option value="male">Brisbane</option>
        <option value="male">Barcelona</option>
        <option value="male">Cairo</option>
        <option value="male">Chicago</option>
        <option value="male">Delhi</option>
        <option value="male">Dubai</option>
        <option value="male">Ireland</option>
        <option value="male">Istabul</option>
        <option value="male">Jakarta</option>
        <option value="male">London</option>
        <option value="male">Los Angeles</option>
        <option value="male">Madrid</option>
        <option value="male">Melbourne</option>
        <option value="male">Nigeria</option>
        <option value="male">New York</option>
        <option value="male">Turkey</option>
        <option value="male">Mexico</option>
        <option value="male">Ireland</option>
        <option value="male">Australia</option>
        <option value="male">South Africa</option>
      </select>
          </label>
        </form>
      </div>
      <div className="mt-3 ">
        <form action="">
          <label htmlFor="Date"> Date <br/>
           <input type="date"
           className='text-[#90A3BF] bg-[#F6F7F9] p-3 pl-4 lg:w-[20rem] md:w-[20rem] sm-[18rem] w-[17rem]'
           />
          </label>
        </form>
      </div>
      </div>

      <div className=" gap-[2rem]">
      <div className="mt-3 ">
        <form action="">
          <label htmlFor="Time">Time <br/>
          <input type="time"
          placeholder='Enter TIme'
          className='text-[#90A3BF] bg-[#F6F7F9] p-3 pl-4 lg:w-[20rem] md:w-[20rem] sm-[18rem] w-[17rem]'
          />
          </label>
        </form>
      </div>
      </div>

      <div className="flex justify-center items-center m-auto">
        <button onClick={handleOpen} className='bg-blue-300 font-bold p-3 mt-5 rounded-3xl w-[20rem]'>Review</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Stage3
