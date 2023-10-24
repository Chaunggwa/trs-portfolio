"use client";
import  {ReactNode, useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion";

interface SkillCardProps {
    name: string,
    icon: ReactNode
}
const SkillCard = ({
    name,icon
}: SkillCardProps) => {
  const ref = useRef(null);

  const initialScale = Math.random();
  const yPosition = Math.floor(Math.random() * 100);
  const xPosition = Math.floor(Math.random() * 100);
  const { scrollYProgress} = useScroll({
    target: ref,
    offset: ["120px", "100px"]
   })
  
   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
   const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
    ref={ref}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }} 
    initial={{
      opacity: 0, 
      scale: initialScale,
      y: yPosition,
      x: xPosition
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0
    }}
    transition={{
      delay: 0.8
    }}
    className='flex flex-col gap-2 justify-center items-center'>
        {icon}
        <p className='hover:text-stone-500 dark:hover:text-teal-200'>{name}</p>
    </motion.div>
  )
}

export default SkillCard