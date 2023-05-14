
import React, { Component } from 'react'
import cake from  '../../Assets/Images/cake.png'
import cabin from  '../../Assets/Images/cabin.png'
import circus from  '../../Assets/Images/circus.png'
import safe from  '../../Assets/Images/safe.png'
import submarine from  '../../Assets/Images/submarine.png'
import game from  '../../Assets/Images/game.png'

export default class Portfolio extends Component {

  render() {
    
    return (
      <div>

        <div className='text-black'>
        <h1 className='text-center mt-4'>PORTFOLIO</h1>
        <div className='line d-flex justify-content-center'>
         <div className='demo bg-black'></div><i class="fa-solid fa-star px-2 "></i><div className='demo bg-black'></div>
       
        </div>

        </div>
        <div className='container my-5'>
          <div className='row gy-3'>
            <div className='col-md-4'>
              <div data-bs-toggle="modal" data-bs-target="#exampleModal1" className='img-list position-relative'>
                <img src={submarine} className="w-100"/>
                <div className='icon-img w-100 h-100 position-absolute'>
                  <i class="fas fa-plus fa-3x text-white position-absolute top-50 start-50 translate-middle" ></i>
                </div>
                
              </div>
            </div>
            <div className='col-md-4'>
              <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className='img-list position-relative'>
                <img src={cake} className="w-100"/>
                <div className='icon-img w-100 h-100 position-absolute'>
                  <i class="fas fa-plus fa-3x text-white position-absolute top-50 start-50 translate-middle" ></i>
                </div>
                
              </div>
            </div>
            <div className='col-md-4'>
              <div data-bs-toggle="modal" data-bs-target="#exampleModal3" className='img-list position-relative'>
                <img src={safe} className="w-100"/>
                <div className='icon-img w-100 h-100 position-absolute'>
                  <i class="fas fa-plus fa-3x text-white position-absolute top-50 start-50 translate-middle" ></i>
                </div>
                
              </div>
            </div>
            <div className='col-md-4'>
              <div data-bs-toggle="modal" data-bs-target="#exampleModal4" className='img-list position-relative'>
                <img src={game} className="w-100"/>
                <div className='icon-img w-100 h-100 position-absolute'>
                  <i class="fas fa-plus fa-3x text-white position-absolute top-50 start-50 translate-middle" ></i>
                </div>
                
              </div>
            </div>
            <div className='col-md-4'>
              <div data-bs-toggle="modal" data-bs-target="#exampleModal5" className='img-list position-relative'>
                <img  src={circus} className="w-100"/>
                <div className='icon-img w-100 h-100 position-absolute'>
                  <i class="fas fa-plus fa-3x text-white position-absolute top-50 start-50 translate-middle" ></i>
                </div>
                
              </div>
            </div>
            <div className='col-md-4'>
              <div data-bs-toggle="modal" data-bs-target="#exampleModal6"  className='img-list position-relative'>
                <img src={cabin} className="w-100"/>
                <div className='icon-img w-100 h-100 position-absolute'>
                  <i  class="fas fa-plus fa-3x text-white position-absolute top-50 start-50 translate-middle" ></i>
                  
                </div>
                
                
              </div>
            </div>
          </div>
        </div>




        {/* <!-- Button trigger modal --> */}
        

{/* <!-- Modal --> */}




<div className="modal fade " id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
      <div className='text-black text-center ms-auto'>
              <h1 className=''>TASTY CAKE</h1>
              <div className='line d-flex justify-content-center'>
                <div className='demo bg-black'></div><i class="fa-solid fa-star px-2 "></i><div className='demo bg-black'></div>     
              </div>
            </div>
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img   src={submarine} className="w-100 mt-5"/>
           
      
      </div>
      <div className="modal-footer ">
      <p className='my-5 text-center m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <button className=' btn btn-success mb-4 text-center m-auto ' data-bs-dismiss="modal"><i className="fa-solid fa-xmark pe-2"></i>Close Window</button>
        
      </div>
    </div>
  </div>

</div>



<div className="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
      <div className='text-black text-center ms-auto'>
              <h1 className=''>TASTY CAKE</h1>
              <div className='line d-flex justify-content-center'>
                <div className='demo bg-black'></div><i class="fa-solid fa-star px-2 "></i><div className='demo bg-black'></div>     
              </div>
            </div>
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img   src={cake} className="w-100 mt-5"/>
           
      
      </div>
      <div className="modal-footer ">
      <p className='my-5 text-center m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <button className=' btn btn-success mb-4 text-center m-auto ' data-bs-dismiss="modal"><i className="fa-solid fa-xmark pe-2"></i>Close Window</button>
        
      </div>
    </div>
  </div>

</div>

<div className="modal fade " id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
      <div className='text-black text-center ms-auto'>
              <h1 className=''>TASTY CAKE</h1>
              <div className='line d-flex justify-content-center'>
                <div className='demo bg-black'></div><i class="fa-solid fa-star px-2 "></i><div className='demo bg-black'></div>     
              </div>
            </div>
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img   src={safe} className="w-100 mt-5"/>
           
      
      </div>
      <div className="modal-footer ">
      <p className='my-5 text-center m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <button className=' btn btn-success mb-4 text-center m-auto ' data-bs-dismiss="modal"><i className="fa-solid fa-xmark pe-2"></i>Close Window</button>
        
      </div>
    </div>
  </div>

</div>

<div className="modal fade " id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
      <div className='text-black text-center ms-auto'>
              <h1 className=''>TASTY CAKE</h1>
              <div className='line d-flex justify-content-center'>
                <div className='demo bg-black'></div><i class="fa-solid fa-star px-2 "></i><div className='demo bg-black'></div>     
              </div>
            </div>
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img   src={game} className="w-100 mt-5"/>
           
      
      </div>
      <div className="modal-footer ">
      <p className='my-5 text-center m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <button className=' btn btn-success mb-4 text-center m-auto ' data-bs-dismiss="modal"><i className="fa-solid fa-xmark pe-2"></i>Close Window</button>
        
      </div>
    </div>
  </div>

</div>

<div className="modal fade " id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
      <div className='text-black text-center ms-auto'>
              <h1 className=''>TASTY CAKE</h1>
              <div className='line d-flex justify-content-center'>
                <div className='demo bg-black'></div><i class="fa-solid fa-star px-2 "></i><div className='demo bg-black'></div>     
              </div>
            </div>
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img   src={circus} className="w-100 mt-5"/>
           
      
      </div>
      <div className="modal-footer ">
      <p className='my-5 text-center m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <button className=' btn btn-success mb-4 text-center m-auto ' data-bs-dismiss="modal"><i className="fa-solid fa-xmark pe-2"></i>Close Window</button>
        
      </div>
    </div>
  </div>

</div>

<div className="modal fade " id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
      <div className='text-black text-center ms-auto'>
              <h1 className=''>TASTY CAKE</h1>
              <div className='line d-flex justify-content-center'>
                <div className='demo bg-black'></div><i class="fa-solid fa-star px-2 "></i><div className='demo bg-black'></div>     
              </div>
            </div>
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img   src={cabin} className="w-100 mt-5"/>
           
      
      </div>
      <div className="modal-footer ">
      <p className='my-5 text-center m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <button className=' btn btn-success mb-4 text-center m-auto ' data-bs-dismiss="modal"><i className="fa-solid fa-xmark pe-2"></i>Close Window</button>
        
      </div>
    </div>
  </div>

</div>

          
            
          
      
      </div>
    )
  }
}
