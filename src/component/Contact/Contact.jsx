
import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className=''>
         <h1 className='text-center pt-5'>CONTACT ME</h1>
        <div className='line d-flex justify-content-center text-black'>
         <div className='demo bg-black'></div><i className="fa-solid fa-star px-2 text-black"></i><div className='demo bg-black'></div>
        </div> 
      </div>





      <div class="row">
        <div class="col-lg-8 m-auto">
         <div class=" ">
                <label>Name</label>
                <input class="form-control fs-4 border border-0" type="text" placeholder="Name" required="required" />
                
          </div>
          <div class=" py-3">
                <label>Email Address</label>
                <input class="form-control fs-4 border border-0"  type="email" placeholder="Email Address" required="required" />
                
          </div>
          <div class=" ">
                <label>Phone Number</label>
                <input class="form-control fs-4 border border-0"  type="tel" placeholder="Phone Number" required="required" />
                
          </div>
          <div class=" mt-3 ">
                <label>Message</label>
                <textarea class="form-control fs-4 border border-0"  rows="5" placeholder="Message" required="required" ></textarea>
                
          </div>
          <button className='btn btn-success mt-3 py-3 px-4'>Send</button>
        </div>
      </div>

      



      

      </div>

     
    )
  }
}


