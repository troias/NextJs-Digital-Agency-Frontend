import React from 'react'
import ProjectCard from '../../components/projects/projectCard'
import { getAllProjects } from '../../utils/api'

 const Projects = (props) => {
  //  console.log("Projects", props)
   const { projects } = props
  return (
    <main>
    <header className="px-4 mb-12">
      <div className="wrapper mt-28 m-auto max-w-6xl">
        <h1 className="hero-text">Our Projects</h1>
        <p>See what we&apos;ve been up to</p>
      </div>
    </header>
    <ul className="m-auto px-4 max-w-5xl mb-12">
       <ProjectCard projects={projects}/> 
    </ul>
  </main>
  )
}

export default Projects

export const getStaticProps = async () => {
  const projects = await getAllProjects()
  return {
    props: {
      projects,
    },
  }
}
