import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const Contact = () => {
    return (
        <div className='px-6 max-w-[1000px] mx-auto md:my-12' id='contact'>
            <Reveal>
                <div className='grid md:grid-cols-2 place-items-center'>
                    <div>
                        <div className='text-gray-300 my-3'>

                            <h3 className='text-4xl font-semibold mb-5 '>About <span>Me</span></h3>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>
                                I am a skilled web developer with experience in both frontend and backend development. I create user-friendly websites and applications, making sure they look great and work smoothly. On the backend, I ensures the server, databases, and application logic function seamlessly to support the frontend. Their work combines creativity and technical expertise to build effective and attractive web solutions.
                            </p>
                        </div>

                        <div className='flex mt-10 items-center gap-7'>
                            <div className='bg-gray-800/40 p-5 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>11
                                    <span>+</span>
                                </h3>
                                <p className='text-xs md:text-base'><span>Projects</span></p>
                            </div>

                            <div className='bg-gray-800/40 p-5 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>1.5
                                    <span>+</span>
                                </h3>
                                <p className='text-xs md:text-base'><span>Years of experience</span></p>
                            </div>

                            <div className='bg-gray-800/40 p-5 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>100
                                    <span>+</span>
                                </h3>
                                <p className='text-xs md:text-base'><span>Happy clients</span></p>
                            </div>
                        </div>
                    </div>

                    <form action="https://getform.io/f/aejyyddb"
      method='POST'
      className='max-w-6xl p-5 md:p-12 mb-12'
      id='form'
      onsubmit="return validateForm()">
    <p className='text-gray-100 font-bold text-xl mb-2'>Let's Connect!</p>

    <input type="text"
           id='name'
           placeholder='Your name ...'
           name='name'
           pattern="[A-Za-z\s]+"
           title="Name should only contain letters."
           required
           className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4' />

    <input type="email"
           id='email'
           placeholder='Your email ...'
           name='email'
           required
           className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4' />

    <textarea
           id='textarea'
           cols='30'
           rows='4'
           placeholder='Your Message ...'
           name='textarea'
           required
           className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'></textarea>

    <button type='submit'
            className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>
        Send Message
    </button>
</form>

    </div>
    </Reveal>
    </div>
    )
}

export default Contact


