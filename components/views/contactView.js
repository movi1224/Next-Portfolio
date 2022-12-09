import React from 'react'
import AnimatedText from '../animatedText'
import { motion } from 'framer-motion'
import { Ubuntu } from '@next/font/google'
import styles from '../../styles/Form.module.css'
const ubuntu = Ubuntu({
  weight: '700',
  display: 'auto',
})

export default function ContactView() {
  return (
    <div id="contact" className="flex min-h-screen w-full flex-col justify-center lg:w-5/6 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="SkillsView flex gap-10 max-lg:flex-col [&>*]:relative">
        <main className="flex flex-1 flex-col justify-start text-purple-100 lg:text-lg">
          <hr className="mb-12 w-20 rounded-full border-none bg-gradient-to-r from-orange pb-3" />

          <h1 className={`pb-8 text-6xl ${ubuntu.className}`}>
            <AnimatedText
              text="Contact Me!"
              background="linear-gradient(to top, #ae67fa -20%, #f49867 80%)"
              backgroundClip="text"
              WebkitBackgroundClip="text"
              WebkitTextFillColor="transparent"
            />
          </h1>
          <p>
            I'm interested in any new opportunities - especially ambitious or fun projects. However,
            if you have any other request or just want to talk to me, don't hesitate to use the form
            to message me!
          </p>
        </main>

        <form
          className={styles.contact_form}
          action="https://getform.io/f/630049fd-09b4-474f-9ed9-e2462505c51f"
          method="POST">
          <div className={styles.contact_form_row}>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className={styles.contact_form_row}>
            <input rows="5" type="text" name="subject" placeholder="Subject" />
          </div>
          <div className={styles.contact_form_row}>
            <textarea rows="5" name="message" placeholder="Message" />
          </div>
          {/* <!-- add hidden Honeypot input to prevent spams --> */}
          {/* <input type="hidden" name="_gotcha" style="display:none !important" /> */}
          {/* <!-- checkbox handle --> */}

          <button type="submit">Send Message !</button>
        </form>
      </motion.div>
    </div>
  )
}
