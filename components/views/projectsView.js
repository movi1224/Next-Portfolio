import React from 'react'
import Proj from '../project'
import AnimatedText from '../animatedText'
import { allProjects } from '../../public/utils'
import { motion } from 'framer-motion'
import { Ubuntu } from '@next/font/google'
const ubuntu = Ubuntu({
  weight: '700',
  display: 'auto',
})
export default function ProjectsView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex w-full flex-col pt-10 lg:w-5/6"
      id="projects">
      <div className="mb-10 flex flex-col items-start">
        <hr className="mb-12 w-20 rounded-full border-none bg-gradient-to-r from-orange pb-3" />
        <h1 className={`pb-8 text-6xl leading-normal ${ubuntu.className}`}>
          <AnimatedText
            text="Projects"
            background="linear-gradient(to top, #ae67fa -20%, #f49867 80%)"
            backgroundClip="text"
            WebkitBackgroundClip="text"
            WebkitTextFillColor="transparent"
          />
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="ProjectView flex w-full flex-col items-center justify-center gap-20">
        {allProjects.map((proj, index) => (
          <Proj
            key={index}
            title={proj.title}
            src={proj.src}
            quote={proj.quote}
            titleStyle={proj.titleStyle}
            reverse={index % 2 !== 0}
            content={proj.content}
            tools={proj.tools}></Proj>
        ))}
      </motion.div>
    </motion.div>
  )
}
