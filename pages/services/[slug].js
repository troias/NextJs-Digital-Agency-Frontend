import React from 'react'

export const ServiceItem = () => {
  return (
    <div>
      
    </div>
  )
}

export default ServiceItem

export const getStaticPaths = async () => {
  const projects = await getAllProjects()
  
  const paths = projects.map(project => ({
    params: { slug: project.attributes.slug },
  }))
  return { paths, fallback: false }

}

export const getStaticProps = async ({ params }) => {
  // console.log("getProjectBySlug", getProjectBySlug())
   const project = await getProjectBySlug(params.slug)
   console.log("getStaticPropsproject", project)
  return {
    props: {
       project,
    },
  }
}