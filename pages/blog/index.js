import React from 'react'
import ArticleCard from '../../components/articles/articleCard'
import { getAllArticles } from '../../utils/api'

const Blog = (props) => {
  console.log("Blog", props)
  const { articles } = props
  return (
    
<>
  <main>
    <header class="px-4 mb-12">
      <div class="wrapper mt-28 m-auto max-w-6xl">
        <h1 class="hero-text">Our Blog</h1>
        <p>Front-end & back-end expertise from development to delivery</p>
      </div>
    </header>
    <ul class="m-auto px-4 max-w-5xl grid gap-8 mb-12">
 {/* < ArticleCard articles={articles}/> */}
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
