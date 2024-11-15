// rafce
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{marginTop:'105px'}}>
      <div style={{height:'280px',paddingTop:'30px'}} className='mt-5 bg-primary px-5 px-auto w-100'>
        <div className="d-flex justify-content-between">
          {/* intro */}
          <div style={{width:'400px'}} >
            <h5 className='text-light'> <i class="fa-solid fa-user me-2"></i>EMPLOYEE APP</h5>
            <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </div>
          {/* links */}
          <div className="d-flex flex-column">
            <h5 className='text-white'>Links</h5>
            <Link to={'/home'} style={{textDecoration:'none',color:'grey'}} >Home Page</Link>
          </div>
          {/* guides */}
          <div className="d-flex flex-column">
            <h5 className='text-white'>Guides</h5>
            <a style={{textDecoration:'none',color:'grey'}} href="https://react.dev/" target='_blank'>React</a>
            <a style={{textDecoration:'none',color:'grey'}} href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
            <a style={{textDecoration:'none',color:'grey'}} href="https://react-bootstrap.github.io/" target='_blank'>React Bootstrap</a>
          </div>
          {/* contact */}
          <div className="d-flex flex-column">
            <h5 className='text-white'>Contact</h5>
            <div className="d-flex">
              <input placeholder='Enter your name here' type="text" className="form-control me-2" />
              <button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i> </button>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <a href="https://x.com/" style={{textDecoration:'none',color:'white'}} target='_blank' > <i className="fa-brands fa-twitter"></i> </a>
                <a href="https://x.com/" style={{textDecoration:'none',color:'white'}} target='_blank' > <i className="fa-brands fa-instagram"></i> </a>
                <a href="https://x.com/" style={{textDecoration:'none',color:'white'}} target='_blank' > <i className="fa-brands fa-facebook"></i> </a>
                <a href="https://x.com/" style={{textDecoration:'none',color:'white'}} target='_blank' > <i className="fa-brands fa-linkedin"></i> </a>
                <a href="https://x.com/" style={{textDecoration:'none',color:'white'}} target='_blank' > <i className="fa-brands fa-github"></i> </a>
                <a href="https://x.com/" style={{textDecoration:'none',color:'white'}} target='_blank' > <i className="fa-solid fa-phone"></i> </a>
            </div>
          </div>
        </div>
        <p className='text-center mt-3'>Copyright &copy; Anjana pm, EMPLOYEE APP. Built with React</p>
      </div>
    </div>
  )
}

export default Footer