import React from 'react';
import '../Styles/Opportunity.css'
import EastIcon from '@mui/icons-material/East';

const Opportunity = () => {
    return (
        <div className="container">

            <div className="row align-items-center">


                <div className="col-xl-6 col-lg-6 col-md-12 text-start mb-4">
                    <h1 className='opportunity-title'>Ready to dive into HABOT?</h1>
                    <p className='opportunity-details'>
                        Signing up with HABOT opens the door to a world of new opportunities and potential for business growth.
                        Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the
                        first step towards realizing your entrepreneurial dreams.
                    </p>

                    <div className="signUp">
                        <span>Sign up Today !</span>
                        <span><EastIcon /></span>
                    </div>
                </div>


                <div className="col-xl-6 col-lg-6 col-md-12 text-center">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <button className="places">Abu Dhabi</button>

                        </div>
                        <div className="col-md-6 mb-3">
                            <button className="places">Dubai</button>
                        </div>
                        <div className="col-md-6 mb-3">
                            <button className="places">Sharjah & Ajman</button>
                        </div>
                        <div className="col-md-6 mb-3">
                            <button className="places">Fujairah</button>
                        </div>
                        <div className="col-md-6 mb-3">
                            <button className="places">Ras Al Khaimah</button>
                        </div>
                        <div className="col-md-6 mb-3">
                            <button className="places">Umm Al Quwain</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Opportunity;
