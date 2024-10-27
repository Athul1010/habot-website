import React from 'react'
import '../Styles/Verify.css'

const Verify = () => {
    return (
        <div className='container-fluid verify-section'>
            <div className="container">
                <div className="row">
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h1 className='find'>Let Suppliers <span className='find-you'>Find You</span></h1>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <button className='verify-btn'>Get Verified</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verify

