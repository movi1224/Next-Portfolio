import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import {
  UserIcon,
  Squares2X2Icon,
  DocumentTextIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/solid'

export default function Navbar() {
  // const [value, setValue] = React.useState(0)
  const router = useRouter()
  const scrollHandle = (e) => {
    if (e.target.id.includes('#')) {
      e.preventDefault()
      const id = e.target.id
      let newId = id.slice(2, id.length)
      let position = document.getElementById(newId) //removing extra last - (dash)
      if (position) position.scrollTo({ behavior: 'smooth', block: 'start' }) //scrolling the page
      router.push(id, null, { scroll: false })
    }
  }

  const navItems = [
    ['Home', '/', <UserIcon className="h-5 w-5" />],
    ['Projects', '/#projects', <Squares2X2Icon className="h-5 w-5" />],
    ['Resume', '/resume', <DocumentTextIcon className="h-5 w-5" />],
    ['Contact', '/', <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />],
  ]

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
      className="fixed z-10 flex w-96 gap-1 rounded-full bg-black/90 px-5 py-3 font-semibold text-white/50 shadow-3xl max-sm:bottom-8 max-sm:w-80 sm:top-8 ">
      {navItems.map(([title, url, icon], index) => (
        <Link
          key={index}
          className="flex w-full flex-col items-center justify-center text-xs transition ease-in hover:text-white focus:text-white active:text-purple-600"
          href={url}
          onClick={scrollHandle}
          id={url}>
          {icon}
          {title}
        </Link>
      ))}
    </motion.div>
  )
}
