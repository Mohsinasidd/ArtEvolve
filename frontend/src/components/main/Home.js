import React from 'react'

const Home = () => {
  return (
    <div><>
    <main className="mt-5">
      <div className="container">
        {/*Section: Content*/}
        <section >
      
          <div className="row">
            <div className="col-md-6 gx-5 mb-4"> 
              <div
                className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/1414/2472/articles/10_Most_Famous_Paintings_of_The_Renaissance.png?v=1558429737" 
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgb(251,251,251,0.15)" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6 gx-5 mb-4">
              <h4>
                <strong>VR  ART PLATFORM</strong>
                <h5>Explore and create VR art exhibition</h5>
              </h4>
              <p className="text-muted">
              VR-All-Art is a platform that gives you freedom to easily create exhibitions in Virtual Reality, and sell artworks without the limitation of time, space and geography
              </p>
              <p>
                <strong></strong>
              </p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                itaque voluptate nesciunt laborum incidunt. Officia, quam
                consectetur. Earum eligendi aliquam illum alias, unde optio
                accusantium soluta, iusto molestiae adipisci et?
              </p>
            </div>
          </div>
        </section>
        {/*Section: Content*/}
        <hr className="my-5" />
        {/*Section: Content*/}
        <section className="text-center">
          <h4 className="mb-5">
            <strong>CREATE </strong><br/>

            <h2>Explore and create VR art exhibition</h2>
            
            <h5>No special hardware or software required - everything is online</h5>
            </h4>
          
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://vrallart.com/img/artist_isometric_cube2.jpg"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">For Artist</h5>
                  <p className="card-text">
                    Impress your potential buyers with the irreplaceable experience of art in VR
                  </p>
                  <a href="" className="btn btn-danger">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
            
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://vrallart.com/img/gallery_isometric_cube2.jpg"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">For Gallery</h5>
                  <p className="card-text">
                    Expand your gallery space and showcase more works of art
                  </p>
                  <a href="#!" className="btn btn-danger">
                    learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
            
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://vrallart.com/img/museum_isometric_cube2.jpg"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">For Museum</h5>
                  <p className="card-text">
                    Create a replica of your museum and broaden your exhibition space in VR
                  </p>
                  <a href="#!" className="btn btn-danger">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
             
          </div>
        </section>
        {/*Section: Content*/}
        <hr className="my-5" />
        {/*Section: Content*/}
        <section className="mb-5" >
          <h4 className="mb-5 text-center">
            <strong>Newsletter</strong>
          </h4>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1">
                        First name
                      </label>
                      
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example2">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Subscribe to our newsletter
                  </label>
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
                {/* Register buttons */}
                <div className="text-center">
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-github" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*Section: Content*/}
      </div>
    </main>
    {/*Main layout*/}
    {/*Footer*/}
    <footer className="bg-light text-lg-start">
      <div className="py-4 text-center">
        <a
          role="button"
          className="btn btn-danger btn-lg m-2"
          href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
          rel="nofollow"
          target="_blank"
        >
          
        </a>
        <a
          role="button"
          className="btn btn-success btn-lg m-2"
          href="https://mdbootstrap.com/docs/standard/"
          target="_blank"
        >
        
        </a>
      </div>
      <hr className="m-0" />
      <div className="text-center py-4 align-items-center"  style={{ backgroundColor: "black" }}>
        <p>Follow  on social media</p>
        <a
          href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
          className="btn btn-danger m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
          <i className="fab fa-youtube" />
        </a>
        <a
          href="https://www.facebook.com/mdbootstrap"
          className="btn btn-danger m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="https://twitter.com/MDBootstrap"
          className="btn btn-danger m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          className="btn btn-danger m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "red" }}
      >
      
        
      </div>
      {/* Copyright */}
    </footer>
  </>
  </div>
  )
}

export default Home