import React from 'react'
import Typer from '../typer'
import styles from '../../styles/Hero.module.css'
import AnimatedText from '../animatedText'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Ubuntu } from '@next/font/google'
const ubuntu = Ubuntu({
  weight: '700',
  display: 'auto',
  subsets: 'latin',
  display: 'swap',
})

export default function HomeView() {
  const scrollDown = () => {
    window.scrollTo({
      top: 850,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col justify-center  sm:items-center [&>*]:relative">
        {/* Main title using framer motion effect */}
        <div className={`${styles.title} pb-5`}>
          <span className="text-white/75">This is</span>&nbsp;
          <h1 className={`${ubuntu.className} inline-block`}>
            <AnimatedText
              text="Victor"
              background="linear-gradient(to top, #ae67fa -20%, #f49867 80%)"
              backgroundClip="text"
              WebkitBackgroundClip="text"
              WebkitTextFillColor="transparent"
              TextFillColor="transparent"
            />
          </h1>
        </div>

        {/* Sub title using typer animation */}
        <Typer heading="I am..." dataText={[' a Software Engineer', ' a Web Developer']} />
      </motion.div>
      {/* Scroll down button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        //   whileTap={{ scale: 0.9 }}
        className="scroll-down absolute bottom-0 mb-24"
        onClick={scrollDown}>
        <motion.div className="flex h-24 w-96 items-center justify-center text-white/50 transition ease-in hover:text-white">
          <ChevronDownIcon className="h-12 w-12 animate-bounce" />
        </motion.div>
      </motion.button>
    </>
  )
}
