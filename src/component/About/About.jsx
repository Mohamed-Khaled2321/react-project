import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className=' bg-success text-white '>
        <h1 className='text-center pt-5'>ABOUT</h1>
        <div className='line d-flex justify-content-center'>
         <div className='demo'></div><i class="fa-solid fa-star px-2 text-white"></i><div className='demo'></div>
         
        </div>
        <div className='container mt-5'>
          <div className='row pb-5'>
            <div className='col-md-4 offset-2'>
              <h5 className='para-about fw-bold'>
              Freelancer is a free bootstrap theme created by Route.The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </h5>
            </div>
            <div className='col-md-4'>
              <h5 className='para-about fw-bold'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</h5>
            </div>
          </div>
        </div>

        </div>
        
         
      </div>
      
    )
  }
}
