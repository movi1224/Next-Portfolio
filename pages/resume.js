import React from 'react'
import Layout from '../components/layout'
import AnimatedText from '../components/animatedText'
import Link from 'next/link'
import Image from 'next/image'
import { Ubuntu } from '@next/font/google'
import { motion } from 'framer-motion'
const ubuntu = Ubuntu({
  weight: '700',
  display: 'auto',
  subsets: 'latin',
})

export default function Resume() {
  return (
    <Layout>
      <div className="z-10 flex w-full flex-col items-center py-20 md:w-5/6 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="title flex flex-col items-start justify-start self-start">
          <hr className="mb-12 w-20 rounded-full border-none bg-gradient-to-r from-orange pb-3" />
          <h1 className={`flex flex-wrap pb-8 text-6xl ${ubuntu.className}`}>
            <AnimatedText
              text="Resume"
              background="linear-gradient(to top, #ae67fa -20%, #f49867 80%)"
              backgroundClip="text"
              WebkitBackgroundClip="text"
              WebkitTextFillColor="transparent"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              type="button"
              className={`m-4 inline font-mono leading-loose`}>
              <Link href="/Victor_He_CV.pdf">
                Download PDF
                <Image src="/download.svg" height={30} width={30} className="inline-block" />
              </Link>
            </motion.button>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="resume-content flex flex-col gap-10 md:w-5/6">
          <div className="rounded-xl bg-white/25 p-3 md:p-10">
            <h2 className="pb-5 text-4xl font-semibold">Summary</h2>
            <div className="pl-4 [&>p]:text-lg">
              <p>
                • With 5+ years of frontend development experience, a highly self-motivated and
                collaborative software engineer.
              </p>
              <p>
                • Solid understanding of frontend technologies like React, HTML, CSS, Sass,
                Javascript, Typescript, Restful APIs. Also familiar with backend techs like Node.js,
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
            <h2 className="pb-5 text-4xl font-semibold">Experience</h2>
            <div className="px-4 pb-10">
              <h3 className="text-2xl font-semibold">Assurant</h3>
              <div className="flex justify-between pb-3 text-lg italic">
                <p className="font-semibold">Software Engineer</p>
                <p>Sep 2021 - Present</p>
              </div>
              <p>
                • Lead the development and design of an internal UI component library for the PWA
                using React, Next.JS, SCSS, TypeScript, HTML, Prettier, Storybook and etc,.
              </p>
              <p>
                • Built and configured the fundamental structure of the web application including
                React routers, Redux, Next.JS, and Axios.
              </p>
              <p>
                • Using Props and States of class components, managed one-way data flow to create
                reusable React components.
              </p>
              <p>
                • Worked closely with designers and product management to create, improve, and
                implement user interfaces. Also with QA to address any usability, performance, or
                accessibility issues.
              </p>
              <p>
                • Authentication and authorization were implemented through the use of JSON Web
                Tokens (JWT).
              </p>
              <p>
                • Developed efficient and reusable styles using mixins, variables, and nested rules
                using CSS preprocessors like SASS.
              </p>
              <p>
                • Utilized React Testing Library and Jest to implement functional and unit tests for
                the components to ensure stability and usability.
              </p>
              <p>
                • Optimized components in accordance with Web Vitals and Next.JS for improved SEO &
                performance, faster loading time, server-side rendering, and accessibility.
              </p>
              <p>
                • Engaged in the Agile/Scrum development process and reported to the administrative
                team regarding development progress in a timely manner to check progress and issues.
              </p>
            </div>

            <div className="px-4 pb-10">
              <h3 className="text-2xl font-semibold">Kingsoft</h3>
              <div className="flex justify-between pb-3 text-lg italic">
                <p className="font-semibold">Front-End Developer</p>
                <p>Aug 2020 - Aug 2021</p>
              </div>
              <p>
                • Involved in developing and designing a variety of features in the applications
                including the logic of functions, component layouts, advertising portals, and
                RESTful APIs.
              </p>
              <p>
                • Helped the team to transform and reconstructed the web application from old styled
                jQuery to Vue.js base, also built different versions of the application to enhance
                the compatibility in different platforms.
              </p>
              <p>
                • Conducted unit tests using Jest and Vue Testing Library, and took part in timely
                code review sessions to improve coding techniques.
              </p>
              <p>
                • Practiced version control throughout the development process, checking conflict
                during merging and ensuring effectiveness using Git.
              </p>
              <p>• Utilized Vue Router to provide a smooth user experience for large load SPA.</p>
              <p>
                • Implemented various authentication features like web tokens, sso and OAuth to
                enable 3rd party login and better user experience.
              </p>
              <p>
                • Built reusable and easy-maintaining UI components to reduce implementation time.
              </p>
              <p>
                • Coordinated with a variety of departments to receive feedback and update the
                application features based on the inputs and outputs, helped the company with
                inbound marketing and increased 35% of network revenue.
              </p>
            </div>

            <div className="px-4 pb-10">
              <h3 className="text-2xl font-semibold">Ford Motor Co.</h3>
              <div className="flex justify-between pb-3 text-lg italic">
                <p className="font-semibold">Full-stack Software Engineer</p>
                <p>Aug 2018 - Jul 2020</p>
              </div>
              <p>
                • Constructed modern responsive websites with HTML5, CSS3, CSS module, JavaScript,
                and React using close collaboration with UI/UX designers, product managers, and
                engineering leadership.
              </p>
              <p>
                • Built a 7/24 online chatbot using Node.js and botkit.js with the ability to chat
                with the users on reporting issues, updates of API working status, and scheduling
                data analysis reports to internal developers supporting both Slack and WebEx Team
                applications.
              </p>
              <p>
                •Implemented the pixel tracker for the web pages using React, Redux, and functional
                components to help track the user’s basic behavior while browsing the website in a
                legit and efficient manner.
              </p>
              <p>
                • Helped redesign of RESTful APIs to fetch inputs provided by various departments to
                get the monitoring process more efficient.
              </p>
              <p>
                • Implemented MongoDB to store the records of the reports and scripts of metrics
                changes, errors, and working status.
              </p>
              <p>
                • Integrated the Grafana dashboard using Kusto query for data monitoring and data
                visualization to keep track of the working status of metrics like APIs.
              </p>
              <p>
                • Using Git to manage the version control and synchronizing the working status by
                the teams.
              </p>
              <p>• Participated in the Agile/Scrum development process.</p>
            </div>
          </div>

          <div className="rounded-xl bg-white/25 p-3 md:p-10">
            <h2 className="pb-5 text-4xl font-semibold">Eduction</h2>
            <div className="px-4">
              <h3 className="text-2xl font-semibold">
                Cornell University <span className="text-lg font-normal">Ithaca, NY</span>
              </h3>
              <div className="flex justify-between pb-3 text-xl italic">
                <p className="font-semibold">Information Science</p>
                <p>GPA: 3.9/4</p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            type="button"
            className={`inline font-mono leading-loose`}>
            <Link href="/Victor_He_CV.pdf">
              Download PDF
              <Image src="/download.svg" height={30} width={30} className="inline-block" />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </Layout>
  )
}
