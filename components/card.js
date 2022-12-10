import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Ubuntu } from '@next/font/google'
const ubuntu = Ubuntu({
  weight: '700',
  display: 'auto',
  subsets: 'latin',
})
export default function Card(props) {
  const { job, company, time, content } = props
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="flex flex-1 flex-col rounded-xl bg-white/10 py-5 px-8 shadow-xl">
      <h2 className={`${ubuntu.className} text-2xl`}>{job}</h2>
      <p className="pb-0 text-xl">{company}</p>
      <p className="pt-0 text-sm tracking-normal">{time}</p>
      <p>{content}</p>
    </motion.div>
  )
}
