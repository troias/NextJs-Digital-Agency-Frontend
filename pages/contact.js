import React from 'react'
import Image from 'next/image'
import { loader } from '../utils/media'
import contatImg from '../assets/imgs/hero.jpg'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getServices } from '../utils/api'


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
    .max(160, 'Too Long'),

    services: Yup.array()
    .min(1, 'Pick at least 1 service')

})

const Contact = (props) => {

  console.log("props", props)

  const formik = useFormik({
    initialValues: {
      name: '',
      company: '',
      email: '',
      message: '',
      services: [
  
      ]
    

    },

    validationSchema,

    onSubmit: async (values) => {

      console.log("values", values.services)

      try {
        // const serviceNames = values.services.map((service) => service.name);
        const serviceIds = values.services.map((service) => service.id);
        const removeUndefinedfromArr = serviceIds.filter((service) => service !== undefined);
        const serviceIdArr = removeUndefinedfromArr

        console.log("serviceIdArr", serviceIdArr)


        const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',

          },
          body: JSON.stringify({
            query: `
              mutation($data: VisitorMessageInput!) {
                createVisitorMessage(data: $data) {
                  data {
                    attributes {
                      name
                        services {
                          data {
                            id
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
               
                services: serviceIdArr
            
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
      {console.log("formik", formik.values)}
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
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" value={formik.values.name} placeholder="Full name" onChange={formik.handleChange} onBlur={formik.handleBlur} required />

                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}

              </div>
              <div className="form-control">
                <label htmlFor="company">Company name</label>
                <input type="text" id="company" value={formik.values.company} placeholder="Company name" onChange={formik.handleChange} onBlur={formik.handleBlur} required />

                {formik.touched.company && formik.errors.company ? (
                  <div>{formik.errors.company}</div>
                ) : null}

              </div>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" value={formik.values.email} placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} required />

              {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}

            </div>

            <div className="wrapper">
              <h3 className="">Pick a service</h3>
              <div className="form-group check">
              {props.services.map((service, index) => (
          <div className="form-control check" key={index}>
            <input
              type="checkbox"
              name="services"
              id={service.attributes.name}
              value={service.attributes.name}
              onChange={(e) => {
                const checked = e.target.checked;
                console.log("checked", checked)
                const serviceName = e.target.value;
                let updatedServices = [...formik.values.services];
        
                if (checked) {
                  updatedServices.push({ name: serviceName, id: service.id });
                } else {
                  updatedServices = updatedServices.filter(
                    (service) => service.name !== serviceName
                  );
                }
        
                formik.setFieldValue('services', updatedServices);
              }}
              onBlur={formik.handleBlur}
              checked={formik.values.services.some((serviceObj) => serviceObj.name === service.attributes.name)}
            />
            <label htmlFor={service.attributes.name}>{service.attributes.name}</label>
          </div>
        ))}
                {/* <div className="form-control check">
                  <input type="checkbox" name="service" id="branding" value="1" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  <label htmlFor="branding">Branding</label>
                </div>
                <div className="form-control check">
                  <input type="checkbox" name="service" id="web_design" value="4" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  <label htmlFor="web_design">Web design</label>
                </div>
                <div className="form-control check">
                  <input type="checkbox" name="service" id="ui/ux" value="3" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  <label htmlFor="ui/ux">UI/UX</label>
                </div> */}
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="message">What&apos;s your request or message?</label>
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

          export async function getStaticProps() {
            const services = await getServices()

            return {
              props: {
                services
              }
          }
        }

