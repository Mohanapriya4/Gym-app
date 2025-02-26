import React from 'react'
import { FaPlay } from 'react-icons/fa'
import Hero_img from '../../Components/Assets/dumbell.png'
import { motion } from 'framer-motion'
import { SlideRight, SlideUp } from '../../Utility/animation'
import { SlideLeft } from '../../Utility/animation'

const Hero = () => {
  return (
    <div>
        <section>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                {/* Brand info */}
                <div className='flex flex-col justify-center py-14 md:py-0 font-playFair'>
                    <div className='text-center md:text-left space-y-6'>
                        <motion.h1
                        variants={SlideRight(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>Your fitness journey to better <span className='text-primary'>Health</span></motion.h1>

                        <motion.p 
                        variants={SlideRight(1.2)}
                        initial="hidden"
                        animate="visible"
                        className='text-gray-600 xl:max-w-[500px]'>It is a place where you can transform your body and mind, achieving your fitness goals with dedication and consistency</motion.p> 

                        {/* Button section */}
                        <motion.div 
                        variants={SlideRight(1.5)}
                        initial="hidden"
                        animate="visible"
                        className='flex justify-center items-center gap-8 md:justify-start !mt-4'>
                            <button className='primary-btn flex items-center gap-2 mt-4'>Order now</button>
                            <button className='flex justify-center items-center gap-2'>
                            <FaPlay />Watch now
                            </button>
                        </motion.div>
                    </div>
                </div>
                {/* Hero images */}
                <div className='flex justify-center items-center'>
                    <motion.img
                    initial={{opacity:0,rotate: 45}}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1 }}
                     src={Hero_img} alt="" className='w-[350px] md:w-[550px] xl:[700px] drop-shadow' />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero