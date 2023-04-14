import React from 'react'

const TestimonialsCard = ({avatar, name, msg}) => {
  return (
    <div className='bg-gray-100 rounded-lg relative mt-[5rem] p-5'>
        <img className='w-[60px] md:w-[80px] absolute left-1/2 translate-x-[-50%] top-[-30px]' src={avatar} alt="" />
        <h4 className='text-center my-5 md:mt-12 text-xl font-mono font-semibold text-mgBlack'>{name}</h4>
        <p className='text-lightGray text-center'>{msg}</p>
    </div>
  )
}

export default TestimonialsCard