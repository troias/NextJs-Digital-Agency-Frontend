import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { loader } from '../../utils/media';
import {firstLetterCapital} from '../../utils/helpers'

const ProjectCard = (props) => {
  const { projects } = props;

 console.log("projects", projects);

  return (
    <>
      {projects &&
        projects.map((project, index) => {
          return (
            <li className="project grid gap-4 md:gap-8 md:grid-cols-7 items-center mb-8 md:mb-12" key={index}>
              <header className="md:grid md:col-start-5 md:col-end-8 ">
                <h1 className="text-xl md:text-3xl font-bold">{firstLetterCapital(project.attributes.title)}</h1>
                <p className=' py-4'>{project.attributes.intro}</p>

              <div className="flex justify-center">
                {  project.attributes.slug &&  <Link href={`/projects/${project.attributes.slug}`} passHref >
                <button className="cta w-max ser">View Project</button>
              </Link>}
              </div>
              </header>
              <div className="img-cont rounded-xl h-full max-h-40 md:max-h-72 row-start-1 md:col-start-1 md:col-end-5 overflow-hidden pb-4 ">
           {  project.attributes.cover?.data &&   <Image
                  loader={loader}
                  layout="responsive"
                  src={project.attributes.cover?.data?.attributes?.url}
                  alt={project.attributes.cover?.data?.attributes?.alternativeText}
                  width={project.attributes.cover?.data?.attributes?.width}
                  height={project.attributes.cover?.data?.attributes?.height}
                  objectFit="contain"
                 
                />}
                
              </div>
            </li>
          );
        })}
    </>
  );
};

export default ProjectCard;