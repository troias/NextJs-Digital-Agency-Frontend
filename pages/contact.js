import React from 'react'

 const Contact = (props) => {
  return (
    <>
    <main>
      <div className="px-4">
        <div className="cover img-cont h-full max-h-96">
          {/* <img className="rounded-b-2xl max-h-100" src="~/assets/img/hero.jpg" alt="" /> */}
        </div>
      </div>
      <div className="section relative bg-gray-50 p-12 z-10 m-auto max-w-4xl rounded-2xl overflow-hidden">
        <header className="mb-8">
          <h1 className="hero-text">Contact Us</h1>
          <p>Submit a project request or send a message</p>
        </header>
  
        <form >
          <div className="wrapper flex flex-col gap-8 mb-8">
            <div className="form-group">
              <div className="form-control">
                <label for="name">Full name</label>
                {/* <input type="text" id="name" v-model="name" value="Miracleio"  required/> */}
              </div>
               <div className="form-control">
                <label for="company">Company name</label>
                {/* <input type="text" id="company" v-model="company" value="Miracleio"  required/> */}
              </div> 
            </div>
            <div className="form-control">
              <label for="email">Email Address</label>
              {/* <input type="email" id="email" v-model="email" value="Miracleio@gmail.com"  required/> */}
            </div>
            <div className="wrapper">
              <h3 className="">Pick a service</h3>
              <div className="form-group check">
                <div className="form-control check">
                  {/* <input type="checkbox" name="services" id="branding" value="branding" v-model="services"> */}
                  <label for="branding">Branding</label>
                </div>
                <div className="form-control check">
                  {/* <input type="checkbox" name="services" id="web_design" value="web_design" v-model="services"> */}
                  <label for="web_design">Web design</label>
                </div>
                <div className="form-control check">
                  {/* <input type="checkbox" name="services" id="ui/ux" value="ui/ux" v-model="services"> */}
                  <label for="ui/ux">UI/UX</label>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label for="message">What's your request or message?</label>
              <textarea id="message" placeholder="Write message here" rows="12" v-model="message" required>What's up</textarea>
            </div>
          <div className="action-cont">
            <button className="cta" >Send message</button>
          </div>
          </div>
          <div  v-if="success" className=" absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white" >
            <h1 className="header-text w-8/12">Great! Your message is on it's way to us!</h1>
          </div>
        </form>
      </div>
  
    </main>
  </>
  )
  
}

export default Contact

