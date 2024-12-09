import React from 'react'
import { GrYoga } from "react-icons/gr";
import { BiDumbbell } from "react-icons/bi";
import { GiGymBag } from "react-icons/gi";
import { delay } from 'framer-motion';
import { motion } from 'framer-motion';
import { SlideLeft } from '../../Utility/animation';
const EquipmentData = [
    {
        id:1,
        title:"Yoga Equipments",
        desc:"Explore our range of yoga essentials designed for comfort and support. Perfect for enhancing your practice, from beginners to experts.",
        icon: <GrYoga />,
        delay:0.3
    },
    {
        id:2,
        title:"Muscle Equipments",
        desc:"Elevate your workouts with muscle equipment built for strength and performance. Unlock your full potential and achieve your fitness goals faster.",
        icon: <BiDumbbell />,
        delay:0.6
    },
    {
        id:3,
        title:"Fitness Equipments",
        desc:"Gear up with fitness equipment that takes your training to the next level. From toning to strengthening, get the tools you need for every goal",
        icon: <GiGymBag />,
        delay:0.9
    }
]

const Equipments = () => {
  return (
    <div>
        <div className='container py-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair'>
                <div className='space-y-4 p-6'>
                    <h1 className='text-3xl md:text-4xl font-bold'>What we offer for you?</h1>
                    <p className='text-gray-500'>Unleash your strength and push your limits with the best gear available.</p>
                </div>
                {EquipmentData.map((item)=>{
                    return(
                    <motion.div  
                    variants={SlideLeft(item.delay)}
                    initial="hidden"
                    whileInView="visible"
                    key={item.id} className="bg-gray-100 space-y-4 p-6 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] ">
                            <div className="text-4xl">{item.icon}</div>
                            <p className="text-2xl font-semibold">{item.title}</p>
                            <p className="text-gray-500">{item.desc}</p>
                           </motion.div>
                    )
                })
                }

            </div>
        </div>
    </div>
  )
}

export default Equipments