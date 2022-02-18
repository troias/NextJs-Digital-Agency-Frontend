import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { loader } from '../../utils/media'

const ProjectCard = (props) => {
  console.log("ProjectCard", props)
  const { projects } = props
  return (

    <>
      {
        projects.map((project, index) => {

          // console.log("InnerProjectCard", project)
          const { title, intro, slug, cover } = project.attributes
          const { project_categories } = project.attributes
          const projectCategory = project_categories.data[0].attributes.name
          const { url, alternativeText, width, height } = cover.data.attributes
          // console.log("ProjectCategory", projectCategory)
          // console.log("CoverImg", cover)
          // console.log("img data", url, alternativeText, width, height)

      

          // The image has a fixed width and height
          return (
            
              <li className="project grid gap-4 md:gap-8 md:grid-cols-7 items-center mb-8 md:mb-12" key={index}>
                <header className="md:grid md:col-start-5 md:col-end-8">
                  <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
                  <p>{intro}</p>

                  <p className="text-gray-600 text-sm mb-2">{projectCategory}</p>
                  <Link href={`/projects/${slug}`} passHref>
                    <button className="cta w-max">View Project</button>
                  </Link>
                </header>
                <div
                  className="img-cont rounded-xl h-full max-h-40 md:max-h-72 row-start-1 md:col-start-1 md:col-end-5 overflow-hidden">
                  <Image
                    loader={loader}
                    layout="responsive"
                    src={url}
                    alt={alternativeText}
                    width={width}
                    height={height}
                    objectFit="contain"
                  />
                </div>
              </li>

            
          )
        })
      }
    </>



  )
}


export default ProjectCard

