import React from 'react'
import ArticleCard from '../../components/articles/articleCard'
import { getAllArticles } from '../../utils/api'

const Blog = (props) => {
  console.log("Blog", props)
  const { articles } = props
  return (

    <>
      <main>
        <header className="px-4 mb-12">
          <div className="wrapper mt-28 m-auto max-w-6xl">
            <h1 className="hero-text">Our Blog</h1>
            <p>Front-end & back-end expertise from development to delivery</p>
          </div>
        </header>
        <ul className="m-auto px-4 max-w-5xl grid gap-8 mb-12">
          < ArticleCard articles={articles} />
        </ul>
      </main>
    </>
  )
}

export default Blog

export const getStaticProps = async () => {
  const articles = await getAllArticles()
  return {
    props: {
      articles,
    },
  }
}
