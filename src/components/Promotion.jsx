import React from 'react'
import img from '../assets/img/icon-hamburger.svg'

const Promotion = () => {
  return (
    <section className='w-full h-[30vh] bg-brightOrange'>
        <div className='container mx-auto px-4 h-full py-[5%]'>
            <div className='grid md:grid-cols-3'>
                <div className='md:col-span-2'>
                    <h1 className='text-white font-bold text-2xl text-center md:text-left md:text-3xl lg:text-4xl'>Simplify How your team works today!</h1>
                </div>

                <div className='text-center mt-16 md:mt-0'>
                    <button className="text-brightOrange bg-white px-4 py-2 rounded-full font-semibold">Get Started</button>
                </div>

            </div>
        </div>
    </section>


  )
}

export default Promotion