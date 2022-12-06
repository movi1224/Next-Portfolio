import React from 'react'
import Card from '../card'
import { jobs } from '../../public/utils'
import { motion } from 'framer-motion'
export default function ExperienceView() {
  return (
    <div className="mb-20 flex gap-5 py-10 max-lg:flex-col">
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
  )
}
