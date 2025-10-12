import React from 'react'
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'
import { motion } from 'framer-motion'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import Reveal from './Reveal'

const Portfolio = () => {
    const projects = [
        {
            img: project1,
            title: "HarFun Mola - AI Powered Home Services",
            description: "A full stack mobile + web platform that simplifies home services with real-time bookings, secure payments, and AI powered diagnostics. Users can book trusted service providers, track orders live, and get smart recommendations, while providers manage tasks, bids, and wallets, and admins oversee everything seamlessly through a powerful dashboard.",
            links: {
                github: "https://github.com/AsadKhan911/HarFun-Mola",
                link: "https://github.com/AsadKhan911/HarFun-Mola",
            },
        },

        {
            img: project2,
            title: "Real Time Admin Dashboard for Home Services Application",
            description: "Admin web dashboard for HarFun Mola, a smart home services platform. Built with React.js, Node.js, Express.js, MongoDB and Tailwind CSS, the dashboard empowers admins to manage users, service providers, bookings, payments, disputes, and platform analytics in real-time.",
            links: {
                github: "https://github.com/AsadKhan911/HarFunMola-Dashboard",
                link: "https://har-fun-mola-dashboard-zold-mupog6ywa-asadkhan911s-projects.vercel.app/",
            },
        },

        {
            img: project3,
            title: "Full stack MERN job platform with real-time applications and tracking.",
            description: "JobConnect is a full stack job posting platform built with the MERN stack. It connects students and recruiters, offering real-time job applications, status tracking, and file uploads via Cloudinary. The app is responsive, efficient, and built using Redux Toolkit, Vite, and Tailwind CSS.",
            links: {
                github: "https://github.com/AsadKhan911/JobConnect_FullStack",
                link: "https://jobconnect-fullstack.onrender.com/",
            },
        },

        {
            img: project4,
            title: "Land Sale & Purchase Web App Build in React (Frontend)",
            description: "This is a fully responsive land dealing website built in ReactJS, I added a sleek dark mode with a draggable toggle, animations powered by Framer Motion, and a modern UI. The dark mode enhances the aesthetics, offering a beautiful browsing experience. Check out the demo for a live preview!",
            links: {
                github: "https://github.com/AsadKhan911/React-Animated-Website",
                link: "https://asadkhan911.github.io/React-Animated-Website/",
            },
        },

        {
            img: project5,
            title: "Latest News from the UK, US, and Canada",
            description: "NewsHubUKUSCA is a simple and efficient news aggregator for the latest updates from the UK, US, and Canada. It compiles headlines and articles from top sources, making it easy to stay informed about current events across the Atlantic.",
            links: {
                github: "https://github.com/AsadKhan911/NewsFeedUKUSCA",
                link: "https://github.com/AsadKhan911/NewsFeedUKUSCA",
            },
        },

        {
            img: project6,
            title: "Microsoft responsive Clone using tailwind CSS (Frontend)",
            description: "a 2024 Microsoft Clone built entirely using Tailwind CSS. I've developed this project from scratch, ensuring it's not only a visual replica of Microsoft's interface but also fully responsive across various devices.",
            links: {
                github: "https://github.com/AsadKhan911/Tailwind-Project-2-Microsoft-Clone2024-Version-",
                link: "https://asadkhan911.github.io/Tailwind-Project-2-Microsoft-Clone2024-Version-/",
            },
        }
    ]

    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>

            {projects.map((project, index) => (
                <Reveal key={index}> {/* Added key here */}
                    <motion.div
                        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className='w-full md:w-1/2 p-4'>
                            <img
                                src={project.img}
                                alt={project.title}
                                className='object-contain w-full max-h-[400px] rounded-lg shadow-lg'
                            />

                        </div>
                        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                            <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                            <p className='text-gray-300 mb-4'>{project.description}</p>
                            <div className='flex space-x-4'>
                                <a href={project.links.link}
                                    className='px-4 py-2 bg-slate-600 md:text-2xl text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                                    target='_blank' rel='noopener noreferrer'>
                                    <AiOutlineLink />
                                </a>
                                <a href={project.links.github}
                                    className='px-4 py-2 bg-slate-600 md:text-2xl text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                                    target='_blank' rel='noopener noreferrer'>
                                    <AiOutlineGithub />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </Reveal>
            ))}
        </div>
    )
}

export default Portfolio
