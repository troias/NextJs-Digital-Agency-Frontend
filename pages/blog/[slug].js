import React from 'react'
import {getPostBySlug, getAllArticles} from '../../utils/api'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image';
import { loader } from '../../utils/media'


const BlogItem = (props) => {
  const { title, intro, slug, cover, body, categories } = props.posts.attributes;

  const categoryName = categories.data[0]?.attributes?.title || '';

  return (
    <>
      <main>
        <div>
          <header className="">
            <div className="cover img-cont h-full max-h-96">
              <Image
              loader={loader}
              src={cover.data.attributes.url}
              alt={cover.data.attributes.alt}
            
              layout="fill"
              objectFit="cover"
              />
            </div>
          </header>
          <div className="cont relative bg-gray-50 p-12 z-10 m-auto max-w-6xl rounded-2xl">
            {props.posts ? (
              <article className="prose prose-xl m-auto w-full">
                <span className="uppercase text-sm font-thin text-gray-600">from the team</span>
                <h1 className="hero-text mt-4">{title}</h1>
                <p>{intro}</p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-extrabold">Categories: </span> {categoryName}
                </p>

                <div className="body">
                  <ReactMarkdown>{body}</ReactMarkdown>
                </div>
              </article>
            ) : (
              <p>No blog posts found.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogItem;

export const getStaticPaths = async () => {
  const articles = await getAllArticles();

  const paths = articles.map((article) => ({
    params: { slug: article.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postsPromise = getPostBySlug(params.slug);

  const [postResult] = await Promise.allSettled([postsPromise]);

  const posts = postResult.status === 'fulfilled' ? postResult.value : [];

  return {
    props: {
      posts,
    },
  };
};