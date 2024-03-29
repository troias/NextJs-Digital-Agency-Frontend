export const fetchProjects = async () => {


  const apiKey = process.env.STRAPI_API_KEY;

  const graphEndpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql` 
    const res = await fetch(graphEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `ApiKey ${apiKey}`,
        },
        body: JSON.stringify({

        query: `
          fragment fileParts on UploadFileEntityResponse {
            data {
              id
              attributes {
                alternativeText
                width
                height
                mime
                url
                formats
              }
            }
          }
          fragment imgPart on UploadFileRelationResponseCollection {
            data {
              id
              attributes {
                alternativeText
                width
                height
                mime
                url
                formats
              }
            }
          }

          query {
            projects {
              data {
                attributes {
                  title
                  intro
                  slug
                  body
                  cover {
                    ...fileParts
                  }
                  innerCover {
                    ...fileParts
                  }
                  images {
                   ...imgPart
                  }
             
                  project_categories {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                }
              }
            }
          projectCategories {
              data {
                attributes {
                slug
                name
                description
                  cover {
                    ...fileParts
                  }
                
                }
              }
            }

            articles {
              data {
                attributes {
                    title
                    intro
                    slug
                    body
                  cover {
                    ...fileParts
                  }
                  categories {
                    data {
                      attributes {
                        title
                      }
                    }
                  }
              
              }
          }
        }  

        services {
          data {
            id
            attributes {
            
              name
              description
              slug
              cover {
                ...fileParts
              }
            }
          }
        }



        }
        `,
        }),
    })

    if (res.status !== 200) {
        console.log("Error: ", res.status)
        throw new Error("Failed to fetch API")
    }

    const data = await res.json()
    return data
}

export const getAllArticles = async () => {
    const blogArticles = await fetchProjects().then(
        (data) => data.data.articles.data
    )

    return blogArticles
}


export const getAllProjects = async () => {
    const projects = await fetchProjects().then(
        (data) => data.data.projects.data
    )
    return projects
}

export const getAllServices = async () => {
    const services = await fetchProjects().then(
        (data) => data.data.projectCategories.data
    )
    return services

}

export const getServices = async () => {
    const services = await fetchProjects().then(
        (data) => data.data.services.data
    )
    return services
}

export const getProjectBySlug = async (slug) => {
    const project = await fetchProjects().then(
        (data) => data.data.projects.data.find((project) => project.attributes.slug === slug)
    )
    return project
}

export const getServiceDataBySlug = async (slug) => {
  const service = await getServices().then(
    (data) => data.find((service) => service.attributes.slug === slug)
  )
  return service
}

export const getPostBySlug = async (slug) => {
    const post = await getAllArticles().then(
         (data) => data.find((post) => post.attributes.slug === slug)
     )
    //  console.log("getPostBySlug", post)
     return post
}

export const getServiceBySlug = async (slug) => {
    const service = await getAllServices().then(
        (data) => data.find((service) => service.attributes.slug === slug)
    )
    return service
}
