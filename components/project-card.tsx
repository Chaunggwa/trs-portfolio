"use client";
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react'
import {DiGithubBadge} from "react-icons/di"
import { CgMediaLive } from 'react-icons/cg';
import {Poppins} from "next/font/google";
import { useScroll, motion } from 'framer-motion';
import { root } from 'postcss';

const poppins = Poppins({weight: "400", style: "normal", subsets: ["latin"] })


interface ProjectCardProps {
    title: string,
    description: string,
    tags: string[],
    imageUrl: StaticImageData,
    webLink: string,
    gitHubLink: string
}
const ProjectCard = ({
    title, description, tags, imageUrl, webLink, gitHubLink
}: ProjectCardProps) => {
  const ref = useRef(null);
const { scrollYProgress} = useScroll({
  target: ref,
  offset: ["120px", "100px"]
 })
  return (
    <motion.div
    style={{
      scale: scrollYProgress,
      opacity: scrollYProgress
    }} 
  
    ref={ref}
    className={`${poppins.className} rounded overflow-hidden shadow-lg max-w-xs`}>
      <Image 
      width={320}
      src={imageUrl}
      alt={title}
      
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
         {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => {
            return (
                <span key={index} className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            )
        })}
        
      </div>
      <div className='flex gap-3 md:gap-1 px-6 py-4'>
      <a href={webLink} target='_blank' className="inline-flex gap-1 items-center px-5 py-2.5 text-xs font-medium text-center text-white bg-stone-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-stone-700 dark:focus:ring-blue-800">
        View
        <CgMediaLive />
      </a>
      <a href={gitHubLink} target='_blank' className="inline-flex gap-1 items-center px-5 py-2.5 text-xs font-medium text-center text-white bg-stone-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-stone-700 dark:focus:ring-blue-800">
        View Source 
        <DiGithubBadge />
      </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard