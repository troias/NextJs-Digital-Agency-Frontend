import React from 'react';

const About = () => {
  return (
    <>
      <main>
        <header>
          <div className="wrapper pt-12"></div>
          <div className="cover img-cont h-full max-h-72">
            {/* <img className=" rounded-b-2xl" src="~/assets/img/hero.jpg" alt="" /> */}
          </div>
        </header>
        <div className="cont relative bg-gray-50 p-12 z-10 m-auto max-w-6xl rounded-2xl">
          <article className="prose prose-xl m-auto w-full">
            <h1 className="hero-text">
              Aspirations of Starting an Agency: <span className='prose-lg'> A Fusion of UX Design and Shopify Development</span>
            </h1>

            <h2>The journey</h2>

            <p>
              In my journey towards establishing my own agency, I envision a unique blend of expertise in UX design and
              Shopify development. By combining these two realms, I aim to provide comprehensive solutions for businesses
              seeking to establish a powerful online presence. From user-centric designs to crafting user-friendly
              e-commerce experiences, my agency will cater to a wide range of needs, offering both customizable templates
              for effortless store setup and advanced solutions through our cutting-edge Hydrogen build system for complex
              projects.
            </p>

            <h2>Core values</h2>

            <p>
              At the heart of our agency will lie a deep understanding of the significance of UX design. We will
              prioritize creating exceptional digital experiences that not only captivate users but also drive conversions
              and foster brand loyalty. Our team of talented UX designers will employ their expertise to carefully craft
              intuitive interfaces, seamless navigation, and visually appealing designs, ensuring that every interaction
              with our clients' websites becomes a delight for their customers.
            </p>

            <p>
              Complementing our UX design prowess, our Shopify development services will empower businesses to leverage
              the robust capabilities of this leading e-commerce platform. With our focus on Shopify, we will tailor
              solutions to cater to diverse requirements, whether it be setting up a simple online store using
              customizable templates or tackling more complex projects that demand advanced functionality and unique
              features. Our Hydrogen build system will serve as a powerful tool to construct bespoke and dynamic
              e-commerce experiences, meeting the unique demands of ambitious businesses.
            </p>

            <p>
              By establishing my agency as a go-to destination for UX design and Shopify development, I am confident in
              my ability to deliver unparalleled value to clients. Through our expertise in creating stunning user
              experiences, coupled with our Shopify development skills, we will empower businesses to thrive in the
              competitive digital landscape. With a passion for innovation and a commitment to excellence, my agency will
              be a driving force in shaping the success stories of online businesses across diverse industries.
            </p>
          </article>
        </div>
      </main>
    </>
  );
};

export default About
