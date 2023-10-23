import React from 'react'
import { projectsData } from '@/lib/data'
import ProjectCard from '@/components/project-card'
const ProjectPage = () => {
  return (
    <div
    className='sm:mt-[6rem] flex flex-col justify-center items-center p-6 mx-auto'>
      <h1 className='text-center capitalize hover:text-gray-600 text-2xl border-b-8 border-b-stone-400'>Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-2 my-8 mx-auto max-w-max'>
        {projectsData.map((project, index) => {
          return <ProjectCard {...project} key={index}/>
        })}
      </div>
    </div>
  )
}

export default ProjectPage