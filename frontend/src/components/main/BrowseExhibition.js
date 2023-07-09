import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import './BrowserExhibition.css'
import { Link } from 'react-router-dom'

const BrowseExhibition = () => {

  const [exhibitionList, setExhibitionList] = useState(JSON.parse(sessionStorage.getItem('user')));

  const getExhibitionData = async () => {
    const res = await fetch('http://localhost:5000/exhibition/getall');

    const data = await res.json();

    console.log(data);
    setExhibitionList(data.result);
  }

  useEffect(() => {
    getExhibitionData();
  }, [])

  const displayExhibition = () => {
    return exhibitionList.map(obj => (
      <div className="col-md-4 mt-2">
        <div className='card'>

          <img className='card-img-top' src="https://i.redd.it/k9oi1kaibwl41.jpg" alt="img" />

          <div className="card-body">
            <h2>{obj.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur delectus eum incidunt. Beatae accusamus quod nam nihil quidem? Laboriosam suscipit similique corrupti vel mollitia assumenda laudantium dicta quae dolore corporis?.</p>
            <span>₹{obj.price}</span>
            <Link className='btn-tour' to='!#'>Take a tour <i class="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    ))
  };

  return (
    <div>
      <div className="browse-header-block">
        <div className="browseHead">
          <Typewriter
            options={{
              wrapperClassName: 'animateContHead',
              cursorClassName: 'cursorAnimate',
              skipAddStyles: false,
              strings: [`Experiance virtual reality`, 'Take a tour of virtual meusium'],
              autoStart: true,
              loop: true,
              delay: 100,
              // pauseFor: 50,
              deleteSpeed: 100
            }}
          />
          <p className='d-none d-md-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia quo quibusdam tempora adipisci, culpa laboriosam expedita dolore quae dolores consequuntur vitae facilis corrupti totam debitis recusandae unde quidem dicta?</p>
        </div>
      </div>
      <div className="head1 text-center mt-3 mb-3">
        <h1>Access the tours</h1>
      </div>
      <div className="container-fluid card-content row mt-3 mb-5">
        <section className="row">
          {displayExhibition()}
        </section>
      </div>
    </div>
  )
}

export default BrowseExhibition