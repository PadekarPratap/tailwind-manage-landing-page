import React from 'react'

const FeatureNumber = (props) => {
  return (
    <div className='flex gap-6 mb-5'>
    <div>
        <span className='text-xl md:text-2xl px-4 py-1 bg-brightOrange rounded-full text-white'>{props.number}</span>
    </div>
    <div>
        <h2 className='font-semibold text-xl md:text-2xl mb-5 text-mgBlack'>{props.heading1}</h2>
        <p className='text-lightGray text-lg md:text-xl'>{props.text1}</p>
    </div>
    </div>
  )
}

export default FeatureNumber