import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white flex flex-col lg:flex-row md:flex-row sm:flex-col p-5 pl-10 gap-[10rem]'>
      <div className="">
        <h1 className='text-2xl'>MORENT</h1>
        <p className='text-sm'>
        Our vision is to provide convenience <br/> and help increase your sales business.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className='font-bold text-xl'>About</h1>
        <span>Featured</span>
        <span>How It Works</span>
        <span>Partnership</span>
        <span>Business Relation</span>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className='font-bold text-xl'>Community</h1>
        <span>Events</span>
        <span>Blog</span>
        <span>Podcast</span>
        <span>Invite a Friend</span>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className='font-bold text-xl'>Socials</h1>
        <span>Instagram</span>
        <span>Twitter</span>
        <span>Facebook</span>
        <span>Telegram</span>
      </div>
    </div>
  )
}

export default Footer
