"use client";
import React, { useState } from 'react'
import {motion} from "framer-motion";
import { links } from '@/lib/data';
import Link from 'next/link';
import { SheetDemo } from './sheet';
import {BiMenuAltLeft} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
  
  return (
    <header className='relative max-w-full z-[999] '>
        <SheetDemo path={path}/>
        <motion.div className='hidden sm:block fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white dark:bg-gray-600 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{y: -100,x: "-50%", opacity: 0}}
        animate={{y: 0,x: "-50%", opacity: 1}}
        >


        <nav className='fixed hidden w-full sm:flex h-[4.5rem] py-2 sm:h-[3.25rem]'>
          <ul className='flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] dark:text-white font-medium text-gray-500 sm:gap-5'>
            {links.map((link) => (
              <motion.li
              className='h-full flex items-center justify-center' 
              key={link.hash}
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              >
                <Link className={`${(path == link.hash ? "text-teal-500 dark:text-teal-500" : "")}  text-xl flex w-full items-center justify-center p-3 hover:text-gray-950 dark:hover:text-teal-400 transition`} href={link.hash}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        </motion.div>
      
    </header>
  )
}

export default Header