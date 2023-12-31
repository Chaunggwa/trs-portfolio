"use client";
import React from 'react'
import {motion} from "framer-motion";

const About = () => {
  return (
    <motion.div className='flex flex-col mx-auto justify-center items-center mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 p-6'
        initial={{x: 100, scale: 0 }}
        animate={{x: 0, scale: 1}}
        transition={{delay: 1}}
        id='about'
    >
        <h1 className='text-3xl mb-10 dark:hover:text-teal-300 max-w-max font-medium capitalize border-b-2 border-b-stone-200 dark:border-b-teal-700'
        >About me</h1>

        <p className='mb-3'>After successfully completing my Diploma in Nautical Science from Myanmar Mercantile Marine College, I decided to pursue my passion for programming. I studied full-stack web development from online courses on platforms like Udemy and Coursera. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack includes React, Next.js, Node.js, MySQL, and MongoDB, Firebase and other utility libraries. Although I learned PHP and Laravel, I haven&apos;t dedicated as much time to them.</p>
        <p>
        When I&apos;m not coding, I enjoy playing the guitar, listening to music, walking, reading, and playing football. I also like learning about philosophy, psychology, and mathematics.
        </p>
    </motion.div>
  )
}

export default About
