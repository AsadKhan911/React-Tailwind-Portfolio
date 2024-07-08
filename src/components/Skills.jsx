import React from 'react';
import { DiHtml5, DiCss3, DiBootstrap, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiGithubBadge, DiLaravel, DiMysql } from 'react-icons/di';
import { motion } from 'framer-motion'
import Reveal from './Reveal';
const skills = [
    {
        category: 'Frontend',
        technologies: [
            { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
            { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
            { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
            { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
            { name: 'React', icon: <DiReact className='text-blue-500' /> },
        ],
    },
    {
        category: 'Backend',
        technologies: [
            { name: 'Node Js', icon: <DiNodejsSmall className='text-green-600' /> },
            { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
            { name: 'SQL', icon: <DiMysql className='text-blue-900' /> },
            { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
            { name: 'Laravel', icon: <DiLaravel className='text-orange-500' /> },
        ]
    }
];

const Skills = () => {
    return (

        <div className='max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-2' id='skills'>
            <Reveal>
            <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>
            <p className='text-center mb-8'>
                I worked on various frontend and fullstack projects. You can check them
                <a className='underline' href="#"> here</a>
            </p>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewPort={{ once: true }}
                transition={{ duration: 1 }}
                className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 '>
                {skills.map((skill, index) => (
                    <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2'>
                        <h3 className='text-xl font-bold mb-4 text-center'>{skill.category}</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            {skill.technologies.map((tech, idx) => (
                                <div key={idx} className='flex items-center space-x-2'>
                                    <span className='text-2xl'>{tech.icon}</span>
                                    <span className='text-white'>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
            </Reveal>
        </div>
    );
};

export default Skills;
