import React from 'react'
import Link from 'next/link'
import { loader } from '../../utils/media'
import Image from 'next/image'

const ArticleCard = (props) => {

  
    const { articles } = props
    // console.log("ArticleCard", articles)
    return (
        <>
            {
                articles.map((article, index) => {
                     const  {title, slug, body, intro, cover} = article.attributes
                     const { url, alternativeText, width, height } = cover.data.attributes
                    console.log("ArticleCard", article.attributes)
                    // const { url, alternativeText, width, height } = cover.data.attributes
                    return (
                        <li className="article md:grid gap-6 grid-cols-7 items-center mb-6 md:mb-0" key={index}>
                            <div className="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3">
                                {/* <!-- fetch media from strapi using the STRAPI_URL --> */}
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
                            <header className=" col-start-3 col-end-8">
                                 <h1 className="font-bold text-xl mb-2">{title}</h1>
                                    <p className="mb-2">{intro}</p>  

                                {/* <!-- link to dynamic page based on the `slug` value --> */}
                                  <Link href={`/blog/${slug}`} passHref>
                                        <button className="cta w-max">Read more</button>
                                    </Link>  
                            </header>
                        </li>
                    )
                }
                )}
        </>
    )
}
export default ArticleCard
