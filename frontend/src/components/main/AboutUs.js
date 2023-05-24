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
                src="https://bombayartsociety.org/wp-content/uploads/2021/01/Gallery1-c-1024x683.jpg"
                alt="AboutUs"
              />
            </td>
            <td>
              <span className="title"> Welcome to ArtEvolve</span>
              <span className="sub-title">
              
              </span>
              <p>
                Welcome to ArtEvolve!We are a team of passionate artists and designers who are dedicated to creating unique and inspiring 
                works of art.Our mission is to bring creativity and beauty into the world through art.

                
              </p>
              <p>
                ArtEvolve was founded in 2015 by a group of artists who wanted to create a platform for artists to showcase their 
                work and connect with other artists and art enthusiasts. Over the years ,we have grown into a community of over 10,000 artists 
                from around the world.
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
                
              </span>
              <p>
                ArtEvolve's mission is to bring art to every individual and promote a sense of partnership and understanding through art.
                through art.ArtEvolve aims to create a platform where every artists can showcase their art to the world and receive the
                right guidance and resources to improve their art.Another objective of ArtEvolve's mission is to use art as a means
                to promote a sense of partnership and understanding among people.
              </p>
              
              <a href="" className="btn2">
                Know More
              </a>
            </td>
            <td>
              <img
                src="https://bombayartsociety.org/wp-content/uploads/2021/01/Gallery2-b-1024x683.jpg"
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