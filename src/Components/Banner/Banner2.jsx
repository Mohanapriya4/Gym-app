import React from 'react'
import { motion } from 'framer-motion'
import { SlideLeft } from '../../Utility/animation'


const Banner2 = () => {
  return (
    <div className='container my-14'>
        <div className='bg-[#f9f9f9] py-14 md:py-14 flex justify-center text-center'>
            {/* Brand information */}
            <div className='flex flex-col justify-center items-center space-y-8 lg:px-44'>
                <motion.h1 
                variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{once:true}}
                className='text-3xl lg:text-4xl font-bold uppercase'>Get 20% Off on Your First Purchase – The Gym Experience You've Been Waiting For!</motion.h1>
                <motion.p
                variants={SlideLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                >We guarantee premium quality products to power up your workouts and fitness goals</motion.p>
                <motion.div
                variants={SlideLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}} 
                className='flex justify-center gap-6'>
                    <button className='primary-btn'>Learn More</button>
                    <button className='border-2 border-primary text-primary font-bold px-5 rounded-lg'>Stay in touch</button>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Banner2