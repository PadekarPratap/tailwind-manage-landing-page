import React from 'react'
import FeatureNumber from './FeatureNumber'

const Features = () => {
  return (
    <div className='my-8 container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='text-center md:text-left'>
                <h2 className='text-3xl md:text-4xl font-bold text-mgBlack'>What's different about Manage?</h2>
                <p className='text-lightGray mt-5 text-lg md:text-xl'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </div>

            <div>
                <FeatureNumber number={"01"} heading1={'Track company-wide progress'} text1={'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'} />
                <FeatureNumber number={"02"} heading1={'Advanced built-in reports'} text1={'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'} />
                <FeatureNumber number={"03"} heading1={'Everything you need in one place'} text1={'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'} />
            </div>
        </div>
    </div>
  )
}

export default Features