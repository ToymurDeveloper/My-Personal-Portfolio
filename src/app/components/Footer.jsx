import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";
import { Github, Linkedin, MapPin, MessageCircle, Phone } from "lucide-react";
const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-20">
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-extrabold font-ovo mb-2"
          >
            Toymur i<span className="text-red-500 ms-1">.</span>
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-3"
          >
            <MapPin size={20} className="inline-block me-1" />
            <span>Dhaka, Bangladesh</span>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="w-max flex items-center mx-auto mt-3"
          >
            <a href="mailto:sktaimur296@gmail.com">
              <Image
                src={isDark ? assets.mail_icon_dark : assets.mail_icon}
                alt=""
                className="w-5 inline-block me-1"
              />
              sktaimur296@gmail.com
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-3"
          >
            <a href="https://wa.me/+8801914653199" target="_blank">
              <Phone
                size={20}
                color="#25D366"
                className="inline-block mb-1 me-1"
              />
              <h4 className="inline-block">WhatsApp: +8801914653199</h4>
            </a>
          </motion.div>
        </div>

        <div className="w-max m-auto">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4"
          >
            Find me
          </motion.h3>
          <ul className="space-y-2">
            <li className="text-gray-600 dark:text-gray-300 transition duration-150 hover:text-red-500">
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                href="https://github.com/Taimur496"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github size={20} className="mr-2" />
                <span className="font-medium">GitHub</span>
              </motion.a>
            </li>
            <li className="text-gray-600 dark:text-gray-300 transition duration-150 hover:text-red-500">
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                href="https://wa.me/+8801914653199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle size={20} color="#25D366" className="mr-2" />
                <span className="font-medium">WhatsApp</span>
              </motion.a>
            </li>

            <li className="text-gray-600 dark:text-gray-300 transition duration-150 hover:text-red-500">
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                href="https://www.linkedin.com/in/toymur-islam-90617a26a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin size={20} className="mr-2 text-[#0A66C2]" />
                <span className="font-medium">LinkedIn</span>
              </motion.a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {currentYear} Sheikh Toymur. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 ">
          <li className="transition duration-200 hover:text-red-500 dark:hover:text-red-400">
            <a
              href="https://github.com/Taimur496/Frontend-Ecommerce-website-DailyMart"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="transition duration-200 hover:text-green-500 dark:hover:text-green-400">
            <a
              href="https://wa.me/+8801914653199"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
          <li className="transition duration-200 hover:text-blue-700 dark:hover:text-blue-400">
            <a
              href="https://www.linkedin.com/in/toymur-islam-90617a26a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
