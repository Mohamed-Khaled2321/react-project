import React, { Component } from 'react'
import img from  '../../Assets/Images/pro.jpg'

export default class Start extends Component {
  render() {
    return (
      <>
      <div className='bg-success text-white '>
       <div className='text-center m-auto '>
        <img src={img} className="w-25 mt-5 mb-3"/>
        <h1>START REACT</h1>
        <div className='line d-flex justify-content-center'>
         <div className='demo'></div><i class="fa-solid fa-star px-2 text-white"></i><div className='demo'></div>
         
        </div>
        <h6 className='pb-5 pt-3'>Graphic Artist - Web Designer - Illustrator</h6>
        
       </div>

      </div>
      
      </>
      
    )
  }
}
