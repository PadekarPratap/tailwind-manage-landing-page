import React from 'react'
import Logo from '../assets/img/logo-white.svg'
import Facebook from '../assets/img/icon-facebook.svg'
import Youtube from '../assets/img/icon-youtube.svg'
import Twitter from '../assets/img/icon-twitter.svg'
import Pinterest from '../assets/img/icon-pinterest.svg'
import Insta from '../assets/img/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='bg-[#1d1e25] w-full min-h-[30vh]'>
        <div className='container mx-auto px-4 py-[3rem]'>
            <div className='grid md:grid-cols-3'>
                <div className='order-3 md:order-1'>
                    <img className='mx-auto md:mx-0 xl:mx-auto' src={Logo} alt="Logo" />
                    <div id='icons' className='mt-[5rem] flex gap-5 justify-center md:justify-start xl:justify-center'>
                        <img src={Facebook} alt="FB" />
                        <img src={Youtube} alt="YT" />
                        <img src={Twitter} alt="TW" />
                        <img src={Pinterest} alt="PT" />
                        <img src={Insta} alt="IN" />
                    </div>
                </div>

                <div className='text-white flex gap-[5rem] justify-center order-2 my-12 md:my-0'>
                    <ul className='flex flex-col space-y-[1.5rem]'>
                        <li>
                            Home
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            Products
                        </li>
                        <li>
                            About
                        </li>
                    </ul>
                    <ul className='flex flex-col space-y-[1.5rem]'>
                        <li>
                            Careers
                        </li>
                        <li>
                            Community
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                    </ul>
                </div>

                <div className='order-1 md:order-3'>
                    <div className='flex flex-col lg:flex-row gap-5 justify-center'>
                        <input className='focus:outline-brightOrange focus:border-none rounded-full px-4 py-2' placeholder='Updated in Your Inbox' type="text"  />
                        <button className='bg-brightOrange text-white px-6 py-2 rounded-full self-center'>Go</button>
                    </div>
                    <div>
                        <p className='text-white text-center mt-[5rem] hidden md:block'>Copyright © 2023, All Rights Reserved</p>
                    </div>
                </div>

            </div>

            <p className='text-white text-center mt-8 md:hidden'>Copyright © 2023, All Rights Reserved</p>

        </div>
    </div>
  )
}

export default Footer