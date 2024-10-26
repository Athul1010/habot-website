import React from 'react'
import '../Styles/Home.css'
import Navbar from './Navbar'

//mui

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import Opportunity from './Opportunity';
import Requirements from './Requirements';
//mui

const Home = () => {
  return (
    <div className='main-section'>
      <Navbar />
      <div className='container-fluid home'>
        <div className='container'>
          <div className='title'>
            <h1>Are You a Supplier?</h1>
            <h2>Explore Matching Opportunities.</h2>
          </div>
          <div className='service'>
  
            <div>
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                className='search-field'
              >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <BusinessCenterIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search your required service here"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
              </Paper>
            </div>
  
            <div>
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                className='search-field'
              >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <LocationOnIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search your desired location here"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
              </Paper>
            </div>
            
            <div>
              <button className='searchBtn'>Search</button>
            </div>
            
          </div>
  
          <p className='buyer'><span>Are you a buyer?</span> <Link>Click here if you are looking to post a requirements</Link></p>
        </div>
      </div>
      <Opportunity/>
      <Requirements/>
    </div>
  )
}

export default Home

