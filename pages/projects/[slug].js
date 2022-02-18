import React from 'react'
import ProductCard from '../../components/projects/projectCard'
import { getProjectBySlug, getAllProjects } from '../../utils/api'
import { loader } from '../../utils/media'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

const ProductItem = (props) => {

  const { title, intro, body, cover, project_categories } = props.project.attributes
  const { url, alternativeText, width, height } = cover.data.attributes
  const projectCategory = project_categories.data[0].attributes.name
  console.log("projectItem props", projectCategory)
  // console.log("projectItem", title, intro, body, cover)
  return (
    <>

      {/* <!-- pages/Projects/_slug.vue --> */}
      <main>
        <div>
          <header>
            <div className="cover img-cont h-full max-h-96">
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
          </header>
          <div
            className="cont relative bg-gray-50 p-12 z-10 m-auto max-w-6xl rounded-2xl"
          >
            <article className="prose prose-xl m-auto w-full">
              <p className="text-gray-600 text-sm mb-2">
                {projectCategory}
              </p>
              <h1 className="hero-text">{title}</h1>
              <p>{intro}</p>

              {/* <!-- use markdownit to render the markdown text to html --> */}
              <div className="body">
                <ReactMarkdown>{body}</ReactMarkdown>
              </div>
            </article>
          </div>
        </div>

      </main>



    </>
  )
}

export default ProductItem


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
  // console.log("getStaticPropsproject", project)
  return {
    props: {
      project,
    },
  }
}

