import React from 'react'
import Image from 'next/image'
import styles from '../styles/Project.module.css'
import { motion } from 'framer-motion'
import { Lora } from '@next/font/google'
const lora = Lora({
  weight: '400',
  style: 'italic',
})
export default function Proj(props) {
  const { title, src, reverse, titleStyle, quote, children } = props
  return (
    <div
      className={
        reverse
          ? 'flex flex-row-reverse items-center justify-center max-md:flex-col max-sm:w-full sm:gap-5'
          : 'flex items-center justify-center max-md:flex-col max-sm:w-full sm:gap-5'
      }>
      <motion.div className="m-3 flex w-full flex-auto justify-end rounded-lg max-sm:justify-center">
        <Image className="rounded-lg" src={src} alt="" width={800} height={100} />
      </motion.div>

      <div
        className={
          reverse
            ? 'm-3 flex w-full flex-col items-end justify-start max-md:items-start [&>*]:md:text-right'
            : 'm-3 flex w-full flex-col items-start justify-start'
        }>
        <h1 className={styles[titleStyle]}>{title}</h1>
        <main className="py-1">
          {/* quote area */}
          <p className={`text-xl ${lora.className}`}>{quote}</p>

          {/* contents area */}
          <div className="text-sm">{children}</div>
        </main>

        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
