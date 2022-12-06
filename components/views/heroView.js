import React from 'react'
import Typer from '../typer'
import styles from '../../styles/Hero.module.css'
import AnimatedText from '../animatedText'
import { motion } from 'framer-motion'
import { Ubuntu } from '@next/font/google'
const vt = Ubuntu({
  weight: '700',
  display: 'auto',
})

export default function HomeView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen flex-col justify-center text-white/75 sm:items-center [&>*]:relative">
      {/* Background color effect */}
      <img className={styles.blur_01} />

      {/* Main title using framer motion effect */}
      <div className={`${styles.title} pb-5`}>
        This is&nbsp;
        <h1 className={`${vt.className} inline-block`}>
          <AnimatedText
            text="Victor"
            background="linear-gradient(to top, #ae67fa -20%, #f49867 80%)"
            backgroundClip="text"
            WebkitBackgroundClip="text"
            WebkitTextFillColor="transparent"
          />
        </h1>
        {/* </motion.span> */}
      </div>

      {/* Sub title using typer animation */}
      <motion.div>
        <Typer heading="I am..." dataText={[' a Software Engineer', ' a Web Developer']} />
      </motion.div>
    </motion.div>
  )
}
