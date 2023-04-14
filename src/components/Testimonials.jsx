import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import avatar1 from '../assets/img/avatar-ali.png'
import avatar2 from '../assets/img/avatar-richard.png'
import avatar3 from '../assets/img/avatar-anisha.png'


const Testimonials = () => {
  return (
    <section className='container mx-auto px-4 my-8'>

        {/* heading  */}
        <div className='text-center'>
            <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl text-mgBlack'>What's Different About Manage?</h2>
        </div>

        {/* testimonials  */}
        <div className='grid md:grid-cols-3 md:gap-[2rem]'>
            <TestimonialsCard avatar={avatar1} name={'Anisha Li'} msg={`“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`} />
            <TestimonialsCard avatar={avatar2} name={'Richard Watts'} msg={`“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`} />
            <TestimonialsCard avatar={avatar3} name={'Ali Bravo'} msg={`“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”`} />
        </div>

        <div className='text-center mt-12'>
            <button className="text-white bg-brightOrange px-4 py-2 rounded-full font-semibold">Get Started</button>
        </div>

    </section>
  )
}

export default Testimonials