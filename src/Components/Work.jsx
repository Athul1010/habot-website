import React from 'react'
import '../Styles/Work.css'
import role from '../Assets/role.png'
import profile from '../Assets/profile.png'
import requirements from '../Assets/requirements.png'
import contact from '../Assets/contact.png'
import review from '../Assets/review.png'
import connect from '../Assets/Connect.png'

const Work = () => {
  return (
    <div className='container work'>
      <div className='how-works' data-aos="zoom-in-down">
          <h1>How it works?</h1>
          <p className='work-details'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      </div>

      <div className='container' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className='set-one'>
                    <div>
                        <img src={role} alt="" />
                    </div>
                    <div>
                        <span>Select Your Role and Sign Up</span>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className='set-two'>
                    <div>
                        <img src={requirements} alt="" />
                    </div>
                   
                    <div>
                        <span>Buyers Post Your Requirements</span>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className='set-one'>
                    <div>
                        <img src={review} alt="" />
                    </div>
                    <div>
                        <span>Review, Select, and Contact the Best Suppliers</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='container' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className='set-two'>
                    <div>
                        <img src={profile} alt="" />
                    </div>
                    <div>
                        <span> Suppliers Complete your profile and get notified for opportunities</span>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className='set-one'>
                    <div>
                        <img src={contact} alt="" />
                    </div>
                   
                    <div>
                        <span>Contact to Buyers and Share your Quote for the service</span>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className='set-two'>
                    <div>
                        <img src={connect} alt="" />
                    </div>
                    <div>
                        <span>Both the Parties can Connect and Make Business Leave a Feedback</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
