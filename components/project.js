import React from 'react'
import Image from 'next/image'
import styles from '../styles/Project.module.css'
import { motion } from 'framer-motion'
import { Lora } from '@next/font/google'
import { LinkIcon } from '@heroicons/react/24/solid'

const lora = Lora({
  weight: '400',
  style: 'italic',
  subsets: 'latin',
  display: 'swap',
})
export default function Proj(props) {
  const { title, src, reverse, titleStyle, quote, content, tools } = props
  return (
    <div
      className={
        reverse
          ? 'flex flex-row-reverse items-center justify-center max-md:flex-col max-sm:w-full sm:gap-5'
          : 'flex items-center justify-center max-md:flex-col max-sm:w-full sm:gap-5'
      }>
      <motion.div className="m-3 flex w-full flex-auto justify-end rounded-lg max-sm:justify-center">
        <Image className="rounded-lg" src={src} alt="" width={800} height={100} loading="lazy" />
      </motion.div>

      <div
        className={
          reverse
            ? 'm-3 flex w-full flex-col items-end justify-start max-md:items-start [&>*]:md:text-right'
            : 'm-3 flex w-full flex-col items-start justify-start'
        }>
        <h1 className={`${styles[titleStyle]} text-6xl font-bold max-sm:text-4xl`}>{title}</h1>
        <main className="py-1">
          {/* quote area */}
          <p className={`text-2xl ${lora.className}`}>{quote}</p>

          {/* contents area */}
          <div className="text-lg">{content}</div>

          {/* contents area */}
          <div className="text-lg text-white/60">{tools}</div>
        </main>

        {/* <div className="project_buttons flex gap-3">
          <button type="button" className="flex items-center justify-center">
            <span>Github</span> &nbsp;
            <LinkIcon className="inline h-5 w-5" />
          </button>
          <button type="button" className="flex items-center justify-center">
            <span>Live Site</span> &nbsp;
            <LinkIcon className="h-5 w-5" />
          </button>
        </div> */}
      </div>
    </div>
  )
}
