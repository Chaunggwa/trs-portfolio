"use client";
import Image from 'next/image'
import React from 'react'
import {Poppins} from "next/font/google";
import {motion} from "framer-motion";
import Link from 'next/link';
import {MdOutlineContactSupport} from "react-icons/md"
import { Button } from './ui/button';
import {LiaDownloadSolid} from "react-icons/lia"
import {DiGithubBadge} from "react-icons/di"

const poppins = Poppins({weight: "600", style: "normal", subsets: ["latin"] })
const Intro = () => {
  return (
    <section id='home'>
        <div className='flex flex-col items-center justify-center'>
          
            <div className='my-6 flex flex-col gap-3'>
              <motion.div
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "tween",
                duration: 0.8
              }}
              >

                <Image 
                src={`/profile.png`}
                width={150}
                height={150}
                className='rounded-full border-[0.35rem] border-white object-cover shadow-xl'
                quality={95}
                priority={true}
                alt='Thu Rein Soe'
                />
              </motion.div>
              <motion.div
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "tween",
                duration: 0.8
              }}
              >

              <p className=''>
                {`Thu Rein Soe(Bryan)`}
              </p>
              </motion.div>
            </div>
            <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.8
            }}
            >
              <p className='text-center p-6'>
                {`Hello, I'm a web developer who writes efficient, robust, scalable and maintainable codes for front-end and back-end development.`}
              </p>
            </motion.div>

            <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.8
            }}
            className='flex gap-1 p-2'
            >
              <Button
              variant="outline"
              >
              <Link 
              href="#contact"
              className={`${poppins.className} flex items-center gap-1`}
              >
                Contact me
                <MdOutlineContactSupport className="w-5 h-5" />
              </Link>
              </Button>
              <Button
              variant="outline"
              >
              <a 
              href="/cv.pdf"
              className={`${poppins.className} flex items-center gap-1`}
              download={true}
              >
                Download CV
                <LiaDownloadSolid className="w-5 h-5"/>
              </a>
              </Button>
              <Button variant="outline">
              <Link 
              href="https://github.com/Chaunggwa"
              target='_blank'
              className={`${poppins.className} flex items-center`}
              >
                <DiGithubBadge className="w-8 h-8"/>
              </Link>
              </Button>
            </motion.div>
        </div>
    </section>
  )
}

export default Intro