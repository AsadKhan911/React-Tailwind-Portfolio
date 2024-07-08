import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.jfif'
import Reveal from './Reveal'
const Portfolio = () => {
const projects = [
    {
        img: project1,
        title: "Simple and Easy Note-Taking with Easy Notes Hub",
        description: "Easy Notes Hub streamlines note-taking and organization with its intuitive platform. Add, save, and manage your notes effortlessly while enjoying features like quick search, bookmarking, and deletion options.",
        links: {
            github: "https://github.com/AsadKhan911/EasyNotesHub-using-javascript",
        },
    },
    {
        img: project2,
        title: "Latest News from the UK, US, and Canada",
        description: "NewsHubUKUSCA is a simple and efficient news aggregator for the latest updates from the UK, US, and Canada. It compiles headlines and articles from top sources, making it easy to stay informed about current events across the Atlantic.",
        links: {
            github: "https://github.com/AsadKhan911/NewsFeedUKUSCA",
        },
    },
    {
        img: project3,
        title: "Microsoft responsive Clone using tailwind CSS",
        description: "a 2024 Microsoft Clone built entirely using Tailwind CSS. I've developed this project from scratch, ensuring it's not only a visual replica of Microsoft's interface but also fully responsive across various devices.",
        links: {
            github: "https://github.com/AsadKhan911/Tailwind-Project-2-Microsoft-Clone2024-Version-",
        },
    },
    {
        img: project4,
        title: "JavaScript lectures with notes",
        description: "'ve created a GitHub repository for everyone to collab and learn together. It's organized by topics, and each folder has detailed notes covering everything from basic to advanced JavaScript concepts. ",
        links: {
            github: "https://github.com/AsadKhan911/JavaScript_Learning",
        },
    },
]
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
      
      {projects.map((project,index)=>(
        <Reveal>
        <motion.div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewPort={{ once: true }}
        transition={{ duration: 1 }}>
            <div className='w-full md:w-1/2 p-4'>
            <img src={project.img} alt={project.title} className='w-full h-full object-cover rounded-lg shadow-lg' />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
            <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
            <p className='text-gray-300 mb-4'>{project.description}</p>
            <div className='flex space-x-4'>
                <a href={project.links.github}
                 className='px-4 py-2 bg-slate-600 md:text-2xl text-gray-200 rounded-lg hover:bg-slate-700
                 transition duration-300' target='_blank'><AiOutlineGithub/></a>
            </div>
            </div>
        </motion.div>
        </Reveal>
      ))}
    </div>
  )
}

export default Portfolio
