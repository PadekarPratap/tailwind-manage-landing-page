import React from 'react'
import HeroImg from '../assets/img/illustration-intro.svg'

const Hero = () => {
  return (
    <section className='mt-[4rem] md:mt-[8rem] container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-5'>
            <div className='flex flex-col space-y-12 order-2 md:order-1'>
                <h1 className='text-4xl lg:text-5xl text-center md:text-left font-bold text-mgBlack'>Bring Everyone <br /> Together to build <br /> better products.</h1>

                <p className='text-lightGray text-center md:text-left text-xl'>
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                </p>
                <button className="text-white bg-brightOrange px-4 py-2 rounded-full font-semibold md:self-start self-center">Get Started</button>
            </div>
            <div className='order-1 md:order-2'>
                <img src={HeroImg} alt="" />
            </div>
        </div>

    </section>
  )
}

export default Hero