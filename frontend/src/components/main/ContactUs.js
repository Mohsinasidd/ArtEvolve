import React from 'react'

const Contact = () => {
  return (

    <div className="container z-depth-1 my-5 px-0">
      {/*Section: Content*/}
      <section
        className="my-md-5"
        style={{
          backgroundImage:
            'url("https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(97).jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="rgba-black-strong rounded p-5">
          {/* Section heading */}
          <h3 className="text-center font-weight-bold text-white mt-3 mb-5">
            Contact Us
          </h3>
          <form className="mx-md-5" action="">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body px-4">
                    {/* Name */}
                    <div className="md-form md-outline mt-0">
                      <input type="text" id="name" className="form-control" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                    {/* Email */}
                    <div className="md-form md-outline">
                      <input type="text" id="email" className="form-control" />
                      <label htmlFor="email">Your Email Address</label>
                    </div>
                    {/* Message */}
                    <div className="md-form md-outline">
                      <textarea
                        id="message"
                        className="md-textarea form-control"
                        rows={3}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Your Message</label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-md btn-block ml-0 mb-0"
                    >
                      Submit inquiry
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-5 offset-md-1 mt-md-4 mb-4 white-text">
                <h5 className="font-weight-bold">Address</h5>
                <p className="mb-0">1632 Main Street</p>
                <p className="mb-0">New York, 94126</p>
                <p className="mb-4 pb-2">United States</p>
                <h5 className="font-weight-bold">Phone</h5>
                <p className="mb-4 pb-2">+ 01 234 567 89</p>
                <h5 className="font-weight-bold">Email</h5>
                <p>info@gmail.com</p>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/*Section: Content*/}
    </div>
  )}

export default Contact