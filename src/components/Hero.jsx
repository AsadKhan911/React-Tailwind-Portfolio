import React from 'react'
import ShinyEffect from './ShinyEffect'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall } from 'react-icons/di'
import { SiTailwindcss  } from 'react-icons/si';
import dp from '../assets/dp.png'
import cv from '../assets/AsadKhan.pdf'



const Hero = () => {
    return (

        <div className='mt-36 md:mt-24 max-w-[1200px] mx-auto relative'>
            <div className='grid md:grid-cols-2 place-items-center gap-8'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            "Full Stack Engineer",
                            1000,
                            "Backend & Frontend Specialist",
                            1000,
                            "Scalable System Architect",
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className='font-bold text-gray-400 text-xl md:text-5xl italic mb-4'
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
                    >
                        HEY,I AM <br />
                        <span className='text-purple-600'>ASAD KHAN</span>
                    </motion.p>

                    <p className='text-gray-300 max-w-[300px] md:max-w-[400px] md:text-2xl text-lg mb-6'>
                    specialize in building scalable, high-performance full-stack applications.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}

                        className='flex flex-row items-center gap-6 my-4 md:mb-0'
                    >
                        {/* CV button Section */}
                        <motion.a href={cv} download={cv}
                         whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.3)" }}
                            className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl'>

                            Download CV
                        </motion.a>
                        {/* Logos */}
                        <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
                            <motion.a whileHover={{ scale: 1.2 }} href='https://github.com/AsadKhan911' target='_blank'>
                                <AiOutlineGithub />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href='https://www.linkedin.com/in/asad-khan-43b1a2209/' target='_blank'>
                                <AiOutlineLinkedin />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href='https://www.instagram.com/asadk_911?igsh=MWhjZWdod3Q5MWUxcg%3D%3D&utm_source=qr' target='_blank'>
                                <AiOutlineInstagram />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
                {/* Image section */}
                <motion.img
                    src={dp}
                    className='w-[300px] md:w-[550px]'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }} />
            </div>
            {/* Technologies logos section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className='flex flex-col items-center py-24 w-full'
            >
                <p className='text-gray-200 mb-2 text-2xl'>My Coding Stack</p>
                <div className='flex flex-row text-7xl justify-center items-center'>
                    <DiHtml5 className='text-orange-600 mx-2 text-4xl md:text-7xl' />
                    <DiCss3 className='text-blue-600 mx-2 text-4xl md:text-7xl'/>
                    <SiTailwindcss className="text-blue-300 mx-2 text-4xl md:text-7xl"/>
                    <DiJavascript1 className='text-yellow-500 mx-2 text-4xl md:text-7xl'/>
                    <DiReact className='text-blue-500 mx-2 text-4xl md:text-7xl' />
                    <DiNodejsSmall className='text-green-500 mx-2 text-4xl md:text-7xl'/>
                </div>
            </motion.div>
            {/* shiny effect section */}
            <div className='absolute inset-0 hidden md:block'>
                <ShinyEffect left={0} top={0} size={1400} />
            </div>
        </div>
    )
}

export default Hero
