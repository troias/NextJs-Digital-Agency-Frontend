import React from 'react'
import Link from  'next/link'

const ArticleCard = () => {
    return (
        <>
            <li className="article md:grid gap-6 grid-cols-7 items-center mb-6 md:mb-0">
                <div className="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3">
                    {/* <!-- fetch media from strapi using the STRAPI_URL --> */}
                    {/* <img :src="coverImageUrl" alt=""> */}
                </div>
                <header className=" col-start-3 col-end-8">
                    <h1 className="font-bold text-xl mb-2">{article.title}</h1>
                    <p className="mb-2">{article.intro}</p>

                    {/* <!-- link to dynamic page based on the `slug` value --> */}
                    <Link href={`/blog/${article.slug}`}>
                        <button className="cta w-max">Read more</button>
                    </Link>
                </header>
            </li>
        </>
    )
}
export default ArticleCard
