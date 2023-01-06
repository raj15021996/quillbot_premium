import React from 'react';
import Free_Details from '../table/Free_Details';
import Premium_Details from '../table/Premium_Details';
import Sliders from '../Slider/Sliders'
import Footer from '../footer/Footer';
import './PremiumUI.css';
export default function PremiumUI() {
  return (
    <>
      <div className='heading'>
        <p className='para-1'>Save time and write with confidence</p>
        <button className='upgrade-btn'><span>Upgrade to QuillBot Premium</span></button>
        <div className='sliders'>
          <Sliders/>
        </div>
   <p className='para-1'>Experience the full power of QuillBot</p>
        <div className='pre-details'>
          <div className='pre_details'>
            <Free_Details />
          </div>
          <div className='pre_details'>
            <Premium_Details />
          </div>
        </div>
     <p className='para-2'>*Scan up to 20 pages a month</p>
      </div>
      <Footer/>
    </>

  )
}
