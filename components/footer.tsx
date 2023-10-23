import React from 'react'
import {Poppins} from "next/font/google";

const poppins = Poppins({weight: "600", style: "normal", subsets: ["latin"] })
const Footer = () => {
  return (
    <footer className={`${poppins.className} text-center font-medium p-6`}>&copy;&nbsp;{new Date().getFullYear()} Thu Rein Soe. All rights reserved.</footer>
  )
}

export default Footer