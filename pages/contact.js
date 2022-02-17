import React from 'react'
import Image from 'next/image'
import { loader } from '../utils/media'
import contatImg from '../assets/imgs/hero.jpg'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
  .email('Invalid email address')
  .required('Required'),

  message: Yup.string()
    .min(2, 'Too Short!')
    .max(160, 'Too Long')

})

const Contact = (props) => {

  const formik = useFormik({
    initialValues: {
      name: '',
      company: '',
      email: '',
      message: '',
      service: [
  
      ]
    

    },

    validationSchema,

    onSubmit: async (values) => {

      try {
        console.log("strapi API env test", process.env.NEXT_PUBLIC_STRAPI_URL)
        const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',

          },
          body: JSON.stringify({
            query: `
            mutation($data: VisitorMessageInput!) {
              createVisitorMessage(data: $data){
                data {
                  attributes {
                    name
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
            }
            `,
            variables: {
              data: {
                name: values.name,
                company: values.company,
                email: values.email,
                body: values.message,
                project_categories: values.service
            
              }
            }
          })

        })

        const res = await req.json()
        console.log("res", res)

      } catch (error) {
        console.log("error", error)
      }

    }
  });

  return (

    <main >
      <div className="px-4">
        <div className="cover img-cont h-full max-h-96">
          <Image
            src={contatImg}
            alt="contact"
            width={1920}
            height={600}
            className="h-full max-h-96"
          />
        </div>
      </div>
      <div className="section relative bg-gray-50 p-12 z-10 m-auto max-w-4xl rounded-2xl overflow-hidden">
        <header className="mb-8">
          <h1 className="hero-text">Contact Us</h1>
          <p>Submit a project request or send a message</p>
        </header>

        <form onSubmit={e => formik.handleSubmit(e)} className="contact-form" >
          <div className="wrapper flex flex-col gap-8 mb-8">
            <div className="form-group" >
              <div className="form-control">
                <label for="name">Full name</label>
                <input type="text" id="name" value={formik.values.name} placeholder="Full name" onChange={formik.handleChange} onBlur={formik.handleBlur} required />

                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}

              </div>
              <div className="form-control">
                <label for="company">Company name</label>
                <input type="text" id="company" value={formik.values.company} placeholder="Company name" onChange={formik.handleChange} onBlur={formik.handleBlur} required />

                {formik.touched.company && formik.errors.company ? (
                  <div>{formik.errors.company}</div>
                ) : null}

              </div>
            </div>
            <div className="form-control">
              <label for="email">Email Address</label>
              <input type="email" id="email" value={formik.values.email} placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} required />

              {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}

            </div>

            <div className="wrapper">
              <h3 className="">Pick a service</h3>
              <div className="form-group check">
                <div className="form-control check">
                  <input type="checkbox" name="service" id="branding" value="1" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  <label for="branding">Branding</label>
                </div>
                <div className="form-control check">
                  <input type="checkbox" name="service" id="web_design" value="4" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  <label for="web_design">Web design</label>
                </div>
                <div className="form-control check">
                  <input type="checkbox" name="service" id="ui/ux" value="3" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  <label for="ui/ux">UI/UX</label>
                </div>
              </div>
            </div>

            <div className="form-control">
              <label for="message">What's your request or message?</label>
              <textarea id="message" rows="12" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} required>Message us here</textarea>
            </div>
            <div className="action-cont">
              <button className="cta" type="submit" >Send message</button>
            </div>
          </div>

        </form>
      </div>

    </main>

  )

}

export default Contact

{/* <div  className=" absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white" >
            <h1 className="header-text w-8/12">Great! Your message is on it's way to us!</h1>
          </div> */}