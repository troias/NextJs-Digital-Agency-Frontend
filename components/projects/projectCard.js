import React from 'react'
import Link from 'next/link'

 const ProjectCard = () => {
  return (
    <div>
    <li className="project grid gap-4 md:gap-8 md:grid-cols-7 items-center mb-8 md:mb-12">
      <header  className="md:grid md:col-start-5 md:col-end-8">
        <h1 className="text-xl md:text-3xl font-bold">{project.title}</h1>
        <p>{project.intro}</p>
        {/* <!-- map through the project categories and convert the array to string -->
        <!-- to display categories seperated by commas --> */}
        <p className="text-gray-600 text-sm mb-2">{ projectCategories }</p>
        <Link href={`/projects/${project.slug}`}>
          <button className="cta w-max">View Project</button>
        </Link>
      </header>
  
      <div
        class="img-cont rounded-xl h-full max-h-40 md:max-h-72 row-start-1 md:col-start-1 md:col-end-5 overflow-hidden">
        {/* <img v-if="coverImageUrl" :src="coverImageUrl" alt=""> */}
      </div>
    </li>
  </div>
  
  )
}


export default ProjectCard
