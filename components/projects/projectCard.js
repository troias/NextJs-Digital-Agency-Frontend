import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { loader } from '../../utils/media';

const ProjectCard = (props) => {
  const { projects } = props;

  // console.log("projects", projects);

  return (
    <>
      {projects &&
        projects.map((project, index) => {
          return (
            <li className="project grid gap-4 md:gap-8 md:grid-cols-7 items-center mb-8 md:mb-12" key={index}>
              <header className="md:grid md:col-start-5 md:col-end-8">
                <h1 className="text-xl md:text-3xl font-bold">{project.title}</h1>
                <p>{project.intro}</p>

                {/* <p className="text-gray-600 text-sm mb-2">{projectCategoryName}</p>   */}
          {  project.slug &&  <Link href={`/projects/${project.slug}`} passHref>
                <button className="cta w-max">View Project</button>
              </Link>}
              </header>
              <div className="img-cont rounded-xl h-full max-h-40 md:max-h-72 row-start-1 md:col-start-1 md:col-end-5 overflow-hidden">
           {  project.cover?.data &&   <Image
                  loader={loader}
                  layout="responsive"
                  src={project.cover?.data?.attributes?.url}
                  alt={project.cover?.data?.attributes?.alternativeText}
                  width={project.cover?.data?.attributes?.width}
                  height={project.cover?.data?.attributes?.height}
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