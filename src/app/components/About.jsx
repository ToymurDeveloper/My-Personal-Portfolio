import React from "react";
import { Code, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "JavasScript, React Js, Next Js, Laravel, MySQL, Tailwind, MongoDB",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science, University of Chittagong",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 10 projects",
  },
];
export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export default function AboutMe() {
  const { isDark } = useTheme();
  return (
    <motion.div
      id="about-me"
      className="scroll-mt-20 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-500 dark:text-white/80 text-sm uppercase tracking-wide mb-2"
          >
            Introduction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-5xl sm:text-6xl font-serif text-gray-900 dark:text-white/90"
          >
            About me
          </motion.h1>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="px-3 md:px-4 grid md:grid-cols-2 gap-6 items-center"
        >
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-80 h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={assets.profilepic}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                />
              </motion.div>
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-700 dark:text-white/80 text-lg leading-relaxed"
            >
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </motion.p>

            {/* Info Cards */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-2xl"
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover"
                >
                  <Image
                    src={isDark ? iconDark : icon}
                    alt={title}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-white/80">
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            {/* Tools Section */}

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-700 text-xl font-ovo mb-4 dark:text-white/80"
            >
              Tools I use
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-3 sm:gap-5 flex-wrap"
            >
              {toolsData.map((tool, index) => (
                <li
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                  key={index}
                >
                  <Image src={tool} alt="Tool" className="w-6 sm:w-7" />
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
