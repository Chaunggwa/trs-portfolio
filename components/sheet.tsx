import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {BiMenuAltLeft} from "react-icons/bi";
import {motion} from "framer-motion";
import { links } from '@/lib/data';
import Link from "next/link";

export function SheetDemo({
  path
}: {
  path: string
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div
        className='fixed top-2 left-2'
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        >

        <Button variant="ghost" className="sm:hidden z-50"><BiMenuAltLeft className="w-8 h-8"/></Button>
        </motion.div>
      </SheetTrigger>
      <SheetContent>
        
      <ul className='flex z-[55] flex-col w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
            {links.map((link) => (
              <motion.li
              className='h-3/4 flex items-center justify-center' 
              key={link.hash}
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              >
                <SheetClose asChild>

                <Link className={`${(path == link.hash) ? "text-teal-500 dark:text-teal-400":""} flex w-full items-center justify-center hover:underline dark:hover:text-teal-200  px-3 py-3 hover:text-gray-950 transition`} href={link.hash}>
                  {link.name}
                </Link>
                </SheetClose>
              </motion.li>
            ))}
          </ul>
      </SheetContent>
    </Sheet>
  )
}
