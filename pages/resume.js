import React from 'react'
import Layout from '../components/layout'
import AnimatedText from '../components/animatedText'
import { Ubuntu } from '@next/font/google'
import { motion } from 'framer-motion'

const vt = Ubuntu({
  weight: '700',
  display: 'auto',
})

export default function Resume() {
  return (
    <Layout>
      <motion.div className="z-10 flex w-full flex-col items-center pt-20 md:w-5/6 ">
        <div className="title flex flex-col items-start justify-start self-start">
          <hr className="mb-12 w-20 rounded-full border-none bg-gradient-to-r from-orange pb-3" />
          <h1 className={`pb-8 text-6xl ${vt.className}`}>
            <AnimatedText
              text="Resume"
              background="linear-gradient(to top, #ae67fa -20%, #f49867 80%)"
              backgroundClip="text"
              WebkitBackgroundClip="text"
              WebkitTextFillColor="transparent"
            />
          </h1>
        </div>

        <div className="resume-content flex flex-col gap-10 md:w-5/6">
          <div className="rounded-xl bg-white/25 p-3 md:p-10">
            <h2 className="pb-5 text-4xl font-semibold">Summary</h2>
            <div className="pl-4">
              <p>
                • With more than 5 years of frontend development experience, a highly self-motivated
                and collaborative software engineer.
              </p>
              <p>
                • Solid understanding of frontend technologies like React, HTML, CSS, Sass,
                Javascript, Typescript, Vue.js. Also familiar with backend techs like Node.js,
                MongoDB, Express.js, MySQL.
              </p>
              <p>
                • In-depth knowledge of using React like JSX, functional & class components, HOC,
                Redux, react-router, custom hooks and life cycle methods.
              </p>
              <p>
                • Hands-on experience with Agile/Scrum methodology and doing unit test by Jest &
                React testing library.
              </p>
              <p>• Experienced in Restful API, HTTP requests (Axios, fetch, promise) </p>
              <p>• Proficiently using version control tools like Git, GitHub and GitLab.</p>
              <p>
                • Proficient in UI design like using Figma, and reusable component libraries like
                Material UI, Ant Design, Bootstrap. Also modern style sheets like SASS and
                TailwindCSS.
              </p>
              <p>
                • Familiar with modern web design like responsive design and performance
                optimization methods like pre-caching, lazy loading and CDN. And utilizing modern
                frameworks like Next.js.
              </p>
              <p>
                • A quick learner of newly updated technology and a team player with effective
                communication skills with product managers and UI designers. Always passionate and
                positively dealing with any challenges.
              </p>
            </div>

            <h3 className="py-3 text-2xl font-semibold">Technical Skills</h3>
            <div className="pl-4">
              <p>
                <b>Programming Languages:</b> JavaScript, TypeScript
              </p>
              <p>
                <b>Frontend:</b> React, Next.js, MUI, TailwindCSS, Bootstrap, SASS, HTML, CSS,
                Webpack, Babel, Storybook, ejs
              </p>
              <p>
                <b>Backend:</b> Node.js, Express, Koa, RESTful API, MongoDB, SQL
              </p>
              <p>
                <b>Other:</b> Postman, Git, Jest, JIRA, Figma, Azure, R, Hadoop, canvas, D3.js
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white/25 p-3 md:p-10">
            <h2 className="pb-5 text-4xl font-semibold">Experience & Projects</h2>
            <div className="px-4">
              <h3 className="text-2xl font-semibold">Assurant</h3>
              <div className="flex justify-between pb-3 text-lg italic">
                <p className="font-semibold">Software Engineer</p>
                <p>Sep 2021 - Present</p>
              </div>

              <h4 className="text-xl font-semibold">Project: Assurant E-Commerce Platform</h4>
              <p>
                • With more than 5 years of frontend development experience, a highly self-motivated
                and collaborative software engineer.
              </p>
              <p>
                • Solid understanding of frontend technologies like React, HTML, CSS, Sass,
                Javascript, Typescript, Vue.js. Also familiar with backend techs like Node.js,
                MongoDB, Express.js, MySQL.
              </p>
              <p>
                • In-depth knowledge of using React like JSX, functional & class components, HOC,
                Redux, react-router, custom hooks and life cycle methods.
              </p>
              <p>
                • Hands-on experience with Agile/Scrum methodology and doing unit test by Jest &
                React testing library.
              </p>
              <p>• Experienced in Restful API, HTTP requests (Axios, fetch, promise) </p>
              <p>• Proficiently using version control tools like Git, GitHub and GitLab.</p>
              <p>
                • Proficient in UI design like using Figma, and reusable component libraries like
                Material UI, Ant Design, Bootstrap. Also modern style sheets like SASS and
                TailwindCSS.
              </p>
              <p>
                • Familiar with modern web design like responsive design and performance
                optimization methods like pre-caching, lazy loading and CDN. And utilizing modern
                frameworks like Next.js.
              </p>
              <p>
                • A quick learner of newly updated technology and a team player with effective
                communication skills with product managers and UI designers. Always passionate and
                positively dealing with any challenges.
              </p>
            </div>
          </div>

          <div>Personal Projects</div>
          <div>Education</div>
        </div>
      </motion.div>
    </Layout>
  )
}
