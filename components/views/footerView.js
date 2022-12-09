import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      //   whileTap={{ scale: 0.9 }}
      className="scroll-to-top mb-24"
      onClick={scrollToTop}>
      <motion.div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/90 text-white/50 shadow-3xl transition ease-in hover:text-white">
        <ArrowUpIcon className="h-10 w-10" />
      </motion.div>
    </motion.button>
  )
}
