import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Requirements.css';
import requirements from '../Assets/requirement.png';
import youTube from '../Assets/youtube icon.png';
import { FaCheck } from "react-icons/fa";

const Requirements = () => {
    const [activeTab, setActiveTab] = useState('Buyer');

    return (
        <div className='container-fluid requiremnt-section'>
            <div className="container my-5">
                <div className="row align-items-center">

                    
                    <div className="col-xl-6 col-lg-6 col-md-12 text-center mb-4 mb-lg-0" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className="position-relative d-inline-block">
                            <img src={requirements} alt="Requirements" className="img-fluid" />
                            <img src={youTube} alt="YouTube Icon" className="youtube-icon" />
                        </div>
                    </div>

                    
                    <div className="col-xl-6 col-lg-6 col-md-12 contents" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">

                        {/* Buyer and Supplier Titles */}
                        <div className="types d-flex justify-content-around">
                            <h3
                                onClick={() => setActiveTab('Buyer')}
                                className={`tab ${activeTab === 'Buyer' ? 'active' : ''}`}
                            >
                                Buyer
                            </h3>
                            <h3
                                onClick={() => setActiveTab('Supplier')}
                                className={`tab ${activeTab === 'Supplier' ? 'active' : ''}`}
                            >
                                Supplier
                            </h3>
                        </div>

                        {/* Requirement Steps */}
                        <div className='points'>
                            {activeTab === 'Buyer' && (
                                <div>
                                    <div className="text-start mb-3">
                                        <span><FaCheck className='check' /> Post your requirements</span>
                                    </div>
                                    
                                    <div className="choose mb-3">
                                        <span><FaCheck className='check' /></span>
                                        <span>Sit back for multiple suppliers to contact you.</span>
                                    </div>
                                    <div className="choose mb-3">
                                        <span><FaCheck className='check' /></span>
                                        <span>Choose among the suppliers based on the ratings and reviews.</span>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'Supplier' && (
                                <div>
                                    <div className="text-start mb-3">
                                        <span><FaCheck className='check' /> Lorem ipsum dolor sit amet consectetur.</span>
                                    </div>
                                    <div className="choose mb-3">
                                        <span><FaCheck className='check' /></span>
                                        <span> Lorem ipsum dolor sit amet consectetur.</span>
                                    </div>
                                    <div className="choose mb-3">
                                        <span><FaCheck className='check' /></span>
                                        <span> Lorem ipsum dolor sit amet consectetur.</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requirements;
