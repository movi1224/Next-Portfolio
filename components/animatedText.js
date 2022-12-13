import { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

export default function AnimatedText(props) {
  const { background, backgroundClip, WebkitBackgroundClip, WebkitTextFillColor, TextFillColor } =
    props
  const letters = Array.from(props.text)
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.6 / letters.length, delayChildren: 0.04 * i },
    }),
  }
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transform: [
        'scale(1, 1)',
        'scale(1.05, 1.05)',
        'scale(.95, .95 )',
        'scale(1.03, 1.03)',
        'scale(1, 1)',
      ],
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: 0.5,
      },
      background: background,
      backgroundClip: backgroundClip,
      WebkitBackgroundClip: WebkitBackgroundClip,
      WebkitTextFillColor: WebkitTextFillColor,
      TextFillColor: TextFillColor,
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transform: 'scale(1.1, 1.1)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.span
      // style={{ overflow: 'hidden', wordBreak: 'normal', whiteSpace: 'pre-wrap' }}
      className="flex flex-wrap"
      variants={container}
      initial="hidden"
      whileInView="visible">
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          <TextSpan>{letter === ' ' ? '\u00A0' : letter}</TextSpan>
        </motion.span>
      ))}
    </motion.span>
  )
}

function TextSpan({ children }) {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false)

  const bouncingEffect = () => {
    controls.start({
      transform: [
        'scale(1, 1)',
        'scale(1.4, .6)',
        'scale(.85, 1.2)',
        'scale(1.25, .85)',
        'scale(.9, 1.05 )',
        'scale(1, 1)',
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
      background: 'linear-gradient(to top, #ae67fa -20%, #f49867 80%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      // WebkitTextFillColor: 'transparent',
    })
    setIsPlaying(true)
  }
  return (
    <motion.span
      className={'inline-block leading-tight'}
      onMouseOver={() => (!isPlaying ? bouncingEffect() : null)}
      animate={controls}
      onAnimationComplete={() => setIsPlaying(false)}>
      {children}
    </motion.span>
  )
}
