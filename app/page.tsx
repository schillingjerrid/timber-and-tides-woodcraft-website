import React from 'react'

const page = () => {
  return (
    <>
      <div className="relative flex flex-col  place-items-center ">
        <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8E9D60] to-[#8BA2C2]">
            Coming Soon!
          </span>
          <span className="">⏳</span>
        </h2>
        <p className="text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin">
          {"We're currently working hard to bring you something great, and we can't wait to share it with you."}
        </p>
      </div>
    </>
  )
}

export default page