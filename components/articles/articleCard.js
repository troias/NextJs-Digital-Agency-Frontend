import React from 'react';
import Link from 'next/link';
import { loader } from '../../utils/media';
import Image from 'next/image';

const ArticleCard = (props) => {
  const { articles } = props;

  return (
    <>
      {articles &&
        articles.map((article, index) => {
          const { title, slug, body, intro, cover } = article.attributes;
          const { url, alternativeText, width, height } = cover?.data?.attributes || {};

          return (
            <li className="article md:grid gap-6 grid-cols-7 items-center mb-6 md:mb-0" key={index}>
              {url && (
                <div className="relative col-start-1 col-end-3">
                  <div className="img-cont h-full overflow-hidden rounded-xl">
                    <Image
                      loader={loader}
                      layout="responsive"
                      src={url}
                      alt={alternativeText}
                      width={width || 500}
                      height={height || 500}
                      objectFit="contain"
                      className="filter grayscale/20 rounded-xl"
                    />
                  </div>
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-green-400 to-transparent opacity-30"></div> */}
                </div>
              )}

              <header className="col-start-3 col-end-8">
                {title && <h1 className="font-bold text-xl mb-2">{title}</h1>}
                {intro && <p className="mb-2">{intro}</p>}

                {slug && (
                  <Link href={`/blog/${slug}`} passHref>
                    <button className="cta w-max">Read more</button>
                  </Link>
                )}
              </header>
            </li>
          );
        })}
    </>
  );
};

export default ArticleCard;
