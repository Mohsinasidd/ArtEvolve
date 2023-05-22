import React from 'react'

const AboutUs = () => {
  return (
    <>
    {/* Hello world */}
    <section className="section2" id="AboutUs">
      <table>
        <tbody>
          <tr>
            <td>
              <img
                src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                alt="AboutUs"
              />
            </td>
            <td>
              <span className="title">About Us</span>
              <span className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adi
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#OurMission" className="btn1">
                Our Misssion
              </a>{" "}
              <a href="" className="btn2">
                Know More
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section className="section3" id="OurMission">
      <table>
        <tbody>
          <tr>
            <td>
              <span className="title">Our Mission</span>
              <span className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adi
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="" className="btn2">
                Know More
              </a>
            </td>
            <td>
              <img
                src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                alt="AboutUs"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <div className="footer">Credits: Unsplash</div>
  </> 
  
  )
}


export default AboutUs