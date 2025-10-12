import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiGithubBadge } from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiNextdotjs, SiTypescript, SiFirebase, SiFigma, SiCloudinary, SiOpenai, SiStripe, SiGooglecloud, SiPostman, SiRender, SiVercel, SiTensorflow, SiClaude } from 'react-icons/si';
import { RiShieldUserLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { FaTasks, FaTachometerAlt, FaProjectDiagram, FaBug, FaGem, FaRobot } from 'react-icons/fa';

const skills = [
    {
        category: 'Frontend & Mobile',
        technologies: [
            { name: 'HTML5', icon: <DiHtml5 className='text-orange-600' /> },
            { name: 'CSS3', icon: <DiCss3 className='text-blue-600' /> },
            { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-300" /> },
            { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
            { name: 'React', icon: <DiReact className='text-blue-500' /> },
            { name: 'Next.js', icon: <SiNextdotjs className='text-gray-300' /> },
            { name: 'React Native', icon: <DiReact className='text-cyan-400' /> },
        ],
    },
    {
        category: 'Backend & APIs',
        technologies: [
            { name: 'Node.js', icon: <DiNodejsSmall className='text-green-600' /> },
            { name: 'Express.js', icon: <SiExpress className='text-yellow-500' /> },
            { name: 'REST APIs', icon: <DiJavascript1 className='text-yellow-500' /> },
            { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
            { name: 'Firebase', icon: <SiFirebase className='text-yellow-400' /> },
            { name: 'Postman', icon: <SiPostman className='text-orange-400' /> },
            {
                name: 'Cloudinary',
                icon: (
                    <div className="w-8 h-8 p-1 bg-blue-500 rounded-full flex items-center justify-center">
                        <SiCloudinary className="text-white w-5 h-5" />
                    </div>
                ),
            },
            { name: 'JWT & OAuth', icon: <RiShieldUserLine className='text-yellow-500' /> },
        ],
    },

    {
        category: 'AI Automation & LLMs',
        technologies: [
            { name: 'AI Integration', icon: <SiTensorflow className='text-orange-500' /> },
            { name: 'OpenAI API', icon: <SiOpenai className='text-gray-300' /> },
            { name: 'Gemini API', icon: <FaGem className='text-purple-500' /> },
            { name: 'Claude API', icon: <SiClaude className="text-orange-500" /> },
            {
                name: 'Copilot',
                icon: <FaRobot className="text-blue-500" />,
            },
            { name: 'Workflow Automation', icon: <FaProjectDiagram className='text-yellow-500' /> },
            { name: 'Stripe API', icon: <SiStripe className='text-indigo-500' /> },
            { name: 'Google Cloud', icon: <SiGooglecloud className='text-blue-400' /> },
        ],
    },

    {
        category: 'DevOps & Tools',
        technologies: [
            {
                name: 'Render',

                icon: (
                    <div className="w-8 h-8 p-2 bg-gray-200 rounded-full flex items-center justify-center">
                        <SiRender className="text-black w-5 h-5" />
                    </div>
                ),
            },        
            {
                name: 'Vercel',
                icon: (
                    <div className="w-8 h-8 p-2 bg-black rounded-full flex items-center justify-center">
                        <SiVercel className="text-white w-5 h-5" />
                    </div>
                ),
            },

            { name: 'Git', icon: <DiGithubBadge className='text-gray-600' /> },
            { name: 'VS Code', icon: <SiGooglecloud className='text-blue-400' /> },
            { name: 'Figma', icon: <SiFigma className='text-pink-400' /> },
            { name: 'Agile/Scrum', icon: <FaTasks className='text-purple-500' /> },
            { name: 'Web Performance Optimization', icon: <FaTachometerAlt className='text-yellow-400' /> },
            { name: 'Debugging & Testing', icon: <FaBug className='text-red-400' /> },
        ],
    },
];

const Skills = () => {
    return (
        <div className='max-w-[800px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-2' id='skills'>
            <Reveal>
                <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>
                <p className='text-center mb-8'>
                    I worked on various frontend and fullstack projects. You can check them 👉
                    <a className='underline' href="https://github.com/AsadKhan911"> here</a>
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-8'
                >
                    {skills.map((skill, index) => (
                        <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg'>
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
