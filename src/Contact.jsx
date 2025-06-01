import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-jetbrains mt-10 mb-4'>Contact Us</h1>
        <p className='w-120 text-center text-lg font-mono mb-10'>Have a question or suggestion? We'd love to hear from you!
          Email us at: TestBite727@gmail.com
        </p>
      </div>
      <div className='flex flex-col justify-center items-center bg-white p-20 gap-5 border-none w-100 rounded-2xl' >
        <input placeholder='Your Name' type='text' className='bg-yellow-100 w-90 p-2 rounded-xl pl-5 outline-none text-black font-bold' />
        <input placeholder='Your Email' type='email' className='bg-yellow-100 w-90 p-2 rounded-xl pl-5 outline-none font-bold' />
        <input placeholder='Your Comment' type='comment' className='bg-yellow-100 h-20 w-90 p-2 rounded-2xl pl-5 outline-none font-bold' />
        <button className='bg-gray-700 text-white p-3 text-md rounded-md hover:bg-gray-900 cursor-pointer'>Send Message</button>
      </div>
    </div>
  )
}

export default Contact
