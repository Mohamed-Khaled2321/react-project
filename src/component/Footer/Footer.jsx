import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
        
      <div className='bg-info text-dark mt-5 text-center'>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-4'>
                  <div>
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Driv Clark, MO 65243</p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div>
                     <h3 className='pe-5 mb-3'>AROUND THE WEB</h3>
                     <ul className='d-flex icon'>
                        <li><i class="fa-brands fa-facebook-f fs-5 "></i></li>
                        <li><i class="fa-brands fa-twitter mx-4 fs-5"></i></li>
                        <li><i class="fa-brands fa-linkedin me-4 fs-5"></i></li>
                        <li><i class="fa-solid fa-globe fs-5"></i></li>
                    </ul>

                  </div>
                </div>
                <div className='col-md-4'>
                  <div>
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                  </div>

                </div>

            </div> 
        </div>
      </div>
      </>
    )
  }
}
