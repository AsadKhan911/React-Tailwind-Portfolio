import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const education = [
    {
        company: 'Happy Dale High School',
        period: 'Grade 1-10',
        description: 'Completed Matric with a focus on subject of Computer Science ',
    },
    {
        company: 'Steps College',
        period: 'Grade 11-12' ,
        description: 'Pursued Intermediate studies in ICS (Intermediate in Computer Science).',
    },
    {
        company: 'COMSATS University Islamabad',
        period: 'Period: 2021-2025',
        description: 'Currently pursuing a Bachelors degree in Software Engineering.',
    },
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] min-h-[200px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12 '>Education Experience</h1>
    <motion.div className='space-y-8'
    initial='hidden'
    animate='visible'>
        {education.map((education,index)=> (
            <Reveal>
            <motion.div
            key={index}
            initial='hidden'
            whileInView='visible'
            viewport={{once:false,amount:0.3}}
            transition={{ duration:1 }}
            className=' border border-purple-600 p-4 rounded-lg shadow-md
            hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'>
                <h2 className='text-gray-100 text-2xl font-semibold'>{education.company}</h2>
                <p className='text-gray-300'>{education.period}</p>
                <p className='text-gray-400 mt-4'>{education.description}</p>
            </motion.div>
            </Reveal>
        ))}
    </motion.div>
    </div>
  )
}

export default Experience
