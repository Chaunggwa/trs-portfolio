"use client";


import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/action/sendEmail";
import toast from "react-hot-toast";
import {AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineFacebook} from "react-icons/ai"

export default function Contact() {
 

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center sm:mt-[6rem] flex flex-col justify-center items-center p-6 mx-auto gap-8"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h1 className='text-center capitalize dark:hover:text-teal-300 hover:text-gray-600 text-2xl border-b-8 border-b-stone-400'>Contact me</h1>

      <p className="flex flex-col justify-start gap-2">
        <a className="flex justify-start gap-2 items-center hover:underline" target="_blank" href="mailto:thu.rein.soe.dev@gmail.com">
          <AiOutlineMail className="w-8 h-8"/> thu.rein.soe.dev@gmail.com
        </a>
        <a className="flex justify-start gap-2 items-center hover:underline" target="_blank" href="tel:+959966840935">
          <AiOutlinePhone className="w-8 h-8"/> +959966840935
        </a>
        <a className="flex justify-start gap-2 items-center hover:underline" target="_blank" href="https://www.linkedin.com/in/thu-rein-soe">
          <AiOutlineLinkedin className="w-8 h-8"/> Thu Rein Soe
        </a>
        <a className="flex justify-start gap-2 items-center hover:underline" target="_blank" href="https://www.facebook.com/profile.php?id=100077632190122&mibextid=ZbWKwL">
          <AiOutlineFacebook className="w-8 h-8"/> Thu Rein Soe
        </a>
      </p>

      <form
        className="flex w-full flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}


 function SubmitBtn() {
 

  return (
    <button
      type="submit"
      className="group dark:bg-sky-400 flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-md outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
    >
      
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
    
    </button>
  );
}