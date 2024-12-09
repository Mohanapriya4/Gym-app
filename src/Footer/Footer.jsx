import React from 'react'
import { FaDumbbell, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'; 

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl'>
        <div className='container'>
            <div className='grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white'>
             {/* Brand info section */}
              <div className='py-8 px-4 space-y-4'>
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <FaDumbbell />
                        <p>FitLab</p>
                        <p className='text-secondary'>Gym</p>
                    </div>

                    <p>
                    At our gym, we believe in pushing past your limits and embracing the challenge. Every drop of sweat brings you closer to your goals. Whether you're here to build strength, lose weight, or just feel better, we’re committed to helping you succeed.
                   </p>

                   <div className='flex  items-center justify-start gap-5 !mt-6'>
                        <a href="#">
                            <HiLocationMarker className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl" />
                        </a>
                  </div>
             </div>

                

                {/* Footer links */}
                {/* here */}
                <div className='container mx-auto  grid grid-cols-1  md:grid-cols-3  gap-x-64 pt-4 md:ml-14'>
                    <div className='py-4 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold text-left  mb-5 whitespace-nowrap'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">About</a>
                            </li>
                            <li>
                              <a href="#">Services</a>
                            </li>
                            <li>
                              <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                    <div className='py-4 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold text-left  mb-5 whitespace-nowrap'>Company Links</h1>
                        <ul className='flex flex-col gap-3'>
                            <li>
                              <a href="#"  className="whitespace-nowrap">Our Servies</a>
                            </li>
                            <li>
                              <a href="#">Contact</a>
                            </li>
                            <li>
                              <a href="#" className="whitespace-nowrap">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='py-4 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold text-left  mb-5 whitespace-nowrap'>Resources</h1>
                        <ul className='flex flex-col gap-3'>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">About</a>
                            </li>
                            <li>
                              <a href="#">Services</a>
                            </li>
                            <li>
                              <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* copyright section */}
            <div className='mt-8'>
                <div className='text-center py-6 border-t-2 border-gray-300/10'>
                    <span className='text-sm text-gray-300 opacity-70'>
                        @Copyright 2024 Your Fitness Journey
                    </span>
                </div>
            </div>
           

        </div>
    </div>
  )
}

export default Footer