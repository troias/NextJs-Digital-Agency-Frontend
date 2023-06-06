import React from 'react'
import ProductCard from '../../components/projects/projectCard'
import { getProjectBySlug, getAllProjects } from '../../utils/api'
import { loader } from '../../utils/media'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Carousel from '../../components/ui/carousel/carousel'

const ProductItem = (props) => {
  // const { title, intro, body, cover, project_categories } = props.project.attributes;
  // const { url, alternativeText, width, height } = cover.data.attributes;
  // const { images } = props.project.attributes;
  // const projectCategory = project_categories.data[0].attributes.name;

  // const { innerCover } = props.project.attributes;

  return (
    <>
      {/* <!-- pages/Projects/_slug.vue --> */}
      <main>
        <div>
          <header>
            <div className="img-cont h-full max-h-96 pt-12">
              {/* <Image
                loader={loader}
                layout="responsive"
                src={innerCover.data.attributes.url}
                alt={innerCover.data.attributes.alternativeText}
                width={innerCover.data.attributes.width}
                height={innerCover.data.attributes.height}
                objectFit="contain"
              /> */}
            </div>
          </header>
          <div className="cont relative bg-gray-50 p-12 z-10 m-auto max-w-6xl rounded-2xl">
            <article className="prose prose-xl m-auto w-full">
              {/* <p className="text-gray-600 text-sm mb-2">{projectCategory}</p>
              <h1 className="hero-text">{title}</h1> */}
              {/* <p>{intro}</p> */}

              {/* Carousel Component */}
              {/* <Carousel images={images} /> */}

              {/* <!-- use markdownit to render the markdown text to html --> */}
              <div className="body">
                {/* <ReactMarkdown>{body}</ReactMarkdown> */}
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductItem;


export const getStaticPaths = async () => {
  // const projects = await getAllProjects()

  // const paths = projects.map(project => ({
  //   params: { slug: project.attributes.slug },
  // }))
  // return { paths, fallback: false }

  const dummyPaths = [
    { 
      params: {
        slug: "shopify-website-design",
      }
    }
  ]

  return {
    paths: dummyPaths,
    fallback: false,
  }


}

export const getStaticProps = async ({ params }) => {
  // console.log("getProjectBySlug", getProjectBySlug())
  // const project = await getProjectBySlug(params.slug)
  // console.log("getStaticPropsproject", project)
  return {
    props: {
      // project,
    },
  }
}

