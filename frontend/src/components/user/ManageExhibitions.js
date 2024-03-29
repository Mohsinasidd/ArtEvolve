import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
// import Swal from 'sweetalert2';
import Typewriter from 'typewriter-effect';
import app_config from '../../config';
import AddExhibition from './AddExhibition';


const ManageExhibitions = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [currentExhibition, setCurrentExhibition] = useState([])
  const [artworkList, setArtworkList] = useState([]);

  const fetchExhibitionData = async () => {
    const res = await fetch(app_config.apiUrl + '/exhibition/getbyuser/' + currentUser._id);
    console.log(res.status);
    const exhiData = await res.json()
    console.log(exhiData);
    setCurrentExhibition(exhiData.result)
  };

  const getUserArtworks = async () => {
    const res = await fetch(app_config.apiurl + '/art/getbyuser/' + currentUser._id)
    const data = await res.json();
    console.log(data);
    setArtworkList(data.result);
  }

  useEffect(() => {
    fetchExhibitionData();
    getUserArtworks();
  }, []);


  const deleteArt = async (id) => {
    alert('Delete ' + currentUser._id);
  }
  const updateArt = async (id) => {
    alert('Update ' + currentUser._id);
  }

  const openNewPage = (id) => {
    // window.open('/exhibition/' + currentUser._id, '_blank');
    window.open('http://localhost:9966/'+id, '_blank');
  }

  return (
    <div>
      <div className="art-header-block">
        <div className="artHead">
          <Typewriter
            options={{
              wrapperClassName: 'animateContHead',
              cursorClassName: 'cursorAnimate',
              skipAddStyles: false,
              strings: [`Manage your artworks`, 'Update your skills'],
              autoStart: true,
              loop: true,
              delay: 150,
              deleteSpeed: 110
            }}
          />
          <p className='d-none d-md-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia quo quibusdam tempora adipisci, culpa laboriosam expedita dolore quae dolores consequuntur vitae facilis corrupti totam debitis recusandae unde quidem dicta?</p>
          <button
            type="button"
            className="btn"
            data-mdb-toggle="modal"
            data-mdb-target="#updateArtwork"
          >
            Manage Exhibition <i class="fas fa-arrow-right fa-lg"></i>
          </button>
        </div>
      </div>
      <div className='container-fluid contentBox'>
        <div
          className="modal fade"
          id="updateArtwork"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Manage Exhibition
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <AddExhibition />
              </div>
            </div>
          </div>
        </div>

        <div className="content-table">
          <h2>Your Exhibitions </h2>
          <h6>Organizer code: #{currentUser._id}</h6>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Exhibition Title</th>
                <th scope="col">Theme </th>
                <th scope="col">Timing</th>
                <th scope="col">Artworks</th>
                <th scope="col">Ticket Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentExhibition && currentExhibition.map((exhib) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{exhib.title}</td>
                    <td>{exhib.theme}</td>
                    <td>{exhib.start_at.slice(0, 10)} to {exhib.end_at.slice(0, 10)}</td>
                    <td>
                      <select name="arts" id="arts">
                        <option value={exhib.artworks}>Historia</option>
                        <option value={exhib.artworks}>Pictoria</option>
                        <option value={exhib.artworks}>Historia</option>
                      </select>
                    </td>
                    <td>{exhib.price}</td>
                    <td>
                      <button className='btn btn-warning' onClick={updateArt}><i className="fas fa-edit fa-lg"></i></button> &nbsp;
                      <button className='btn btn-danger' onClick={() => { }}><i className="fas fa-trash fa-lg"></i></button> &nbsp;
                      <button className='btn btn-danger' onClick={() => { openNewPage(exhib._id) }}><i class="fas fa-eye   fa-lg "></i></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default ManageExhibitions