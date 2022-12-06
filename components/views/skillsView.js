import { useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../animatedText'
import { skills } from '../../public/utils'
import TagCloud from 'TagCloud'
import ExperienceViewe from './exprienceView'
import { Ubuntu } from '@next/font/google'
const vt = Ubuntu({
  weight: '700',
  display: 'auto',
})
export default function SkillsView() {
  useEffect(() => {
    return () => {
      let prev = document.querySelector('.tagcloud')
      prev ? (prev.children.length > 0 ? prev.removeChild(prev.firstChild) : null) : null
      const container = '.tagcloud'
      const texts = skills
      const options = {
        radius: 300,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        keep: true,
      }
      TagCloud(container, texts, options)
    }
  }, [])
  return (
    <div className="flex  min-h-screen w-full flex-col justify-center lg:w-5/6 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="SkillsView flex gap-10 max-lg:flex-col [&>*]:relative">
        <main className="flex flex-1 flex-col justify-start text-purple-100 lg:text-lg">
          <hr className="mb-12 w-20 rounded-full border-none bg-gradient-to-r from-orange pb-3" />

          <h1 className={`pb-8 text-6xl ${vt.className}`}>
            <AnimatedText
              text="Skills & Experience"
              background="linear-gradient(to top, #ae67fa -20%, #f49867 80%)"
              backgroundClip="text"
              WebkitBackgroundClip="text"
              WebkitTextFillColor="transparent"
            />
          </h1>
          <p>
            With five years of expericne on both front-end and back-end, a bit more frontend focus,
            I am familiar on building web applications via React / Vue / HTML / CSS / SASS / JS, and
            Node.js / Express / MongoDB / MySQL. I've done a lot of project like building UI
            libraries/ Progressive Web Applications / Handle HTTP requests&restful APIs/ Making
            chatbots.
          </p>
          <p>
            I have much experience working with different department like product management and
            designers. With the coding basis I'm also interested and experienced on design stuff, so
            I know how to collaborate and communicate with them efficiently and ready to take part
            in a full software development cycle.
          </p>
        </main>

        <span className="tagcloud relative flex flex-1 justify-center overflow-hidden font-bold [&>*]:text-orange"></span>
      </motion.div>

      <ExperienceViewe />
    </div>
  )
}
