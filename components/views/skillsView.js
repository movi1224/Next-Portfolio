import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../../public/utils'
import tagSphere from '../tagSphere'
import AnimatedText from '../animatedText'
import Card from '../card'
import { jobs } from '../../public/utils'
import { Ubuntu } from '@next/font/google'
const ubuntu = Ubuntu({
  weight: '700',
  display: 'auto',
  subsets: 'latin',
})
export default function SkillsView() {
  useEffect(() => {
    return () => {
      let prev = document.querySelector('.tagsphere')
      prev ? (prev.children.length > 0 ? prev.removeChild(prev.firstChild) : null) : null
      const container = '.tagsphere'
      const texts = skills
      const options = {
        radius: 300,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        keep: true,
      }
      tagSphere(container, texts, options)
    }
  }, [])
  return (
    <div className="flex min-h-screen w-full flex-col justify-center lg:w-5/6 ">
      <div className="SkillsView flex gap-10 max-lg:flex-col [&>*]:relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-1 flex-col justify-start text-purple-100 lg:text-lg">
          <hr className="mb-12 w-20 rounded-full border-none bg-gradient-to-r from-orange pb-3" />

          <h1 className={`pb-8 text-6xl ${ubuntu.className}`}>
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
        </motion.div>

        <span className="tagsphere relative flex flex-1 cursor-default select-none justify-center overflow-hidden font-bold [&>*]:text-lg [&>*]:text-orange"></span>
      </div>

      <div className="Experience mb-20 flex gap-5 py-10 max-lg:flex-col">
        {jobs.map((job, index) => (
          <Card
            key={index}
            job={job.title}
            company={job.company}
            time={job.time}
            content={job.content}
          />
        ))}
      </div>
    </div>
  )
}
