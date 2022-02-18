import React from 'react'
import {getPostBySlug, getAllArticles} from '../../utils/api'
import ReactMarkdown from 'react-markdown'


 const BlogItem = (props) => {
   console.log("BlogItem props", props)
   const {title, intro, slug, cover, body, categories} = props.posts.attributes
  
   console.log("categoryName", categories)
   const categoryName = categories.data[0].attributes.title
   
  return (
    <>
    <main>
      <div >
        <header className="">
          <div className="cover img-cont h-full max-h-96">
           
          </div>
        </header>
        <div className="cont relative bg-gray-50 p-12 z-10 m-auto max-w-6xl rounded-2xl">
          <article className="prose prose-xl m-auto w-full">
            <span  className=" uppercase text-sm font-thin text-gray-600">from the team</span>
             <h1 className="hero-text mt-4">{ title }</h1> 
            <p>{ intro }</p> 
            <p className="text-gray-600 text-sm mb-2"><span className="font-extrabold">Categories: </span> { categoryName }</p>  
            
            {/* <!-- use markdownit to render the markdown text to html --> */}
            <div  className="body">
              <ReactMarkdown  />
              {body}
              <ReactMarkdown/>
            </div>
          </article>
        </div>
      </div>

    </main>
  </>
  )
}

export default BlogItem

export const getStaticPaths = async () => {
   const posts = await getAllArticles()
  
   const paths = posts.map(post => ({
     params: { slug: post.attributes.slug },
   }))
   return { paths, fallback: false }

}

export const getStaticProps = async ({ params }) => {
  //  console.log("getPostBySlug", await getPostBySlug(params.slug))
  const posts = await getPostBySlug(params.slug)
//  console.log("getStaticPropsproject", posts)
  return {
    props: {
        posts,
    },
  }
}