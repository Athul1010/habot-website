import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Footer.css';
import logo from '../Assets/logo.png';
import linkedin from '../Assets/Linkedin.png';
import twitter from '../Assets/Twitter.png';
import facebook from '../Assets/Facebook.png';
import instagram from '../Assets/Instagram.png';

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="container footer-container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                        <div className="row">
                            <div className="col-md-3 col-6 mb-3">
                                <div className="d-flex flex-column">
                                    <img src={logo} alt="Company Logo" className="footer-logo img-fluid mb-2" />
                                    <span className='Singhania'>© R Singhania</span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3 footer-content-one">
                                <h6>Company</h6>
                                <p>About</p>
                                <p>FAQ</p>
                            </div>

                            <div className="col-md-3 col-6 mb-3 footer-content">
                                <h6>Terms</h6>
                                <p>Data privacy</p>
                                <p>Terms</p>
                                <p>Accessibility</p>
                            </div>

                            <div className="col-md-3 col-6 mb-3 footer-content">
                                <h6>Related</h6>
                                <p>Find Buyer</p>
                                <p>Feedback</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="social-icons d-flex gap-3 pb-4">
                            <img src={linkedin} alt="LinkedIn" className="img-fluid social-icon" />
                            <img src={twitter} alt="Twitter" className="img-fluid social-icon" />
                            <img src={facebook} alt="Facebook" className="img-fluid social-icon" />
                            <img src={instagram} alt="Instagram" className="img-fluid social-icon" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
