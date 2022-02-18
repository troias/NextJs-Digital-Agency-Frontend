export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
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


        }
        `,
        }),
    })

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

export const getProjectBySlug = async (slug) => {
    const project = await fetchProjects().then(
        (data) => data.data.projects.data.find((project) => project.attributes.slug === slug)
    )
    return project
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
