import React, { useState } from 'react';
import Modal from 'react-modal';
import Index from '../../components/about/index';
import CloseImg from '../../assets/img/cancel.svg';
import heroImg from '../../assets/img/hero/heroMain.jpg';
import {Fa500Px} from 'react-icons/fa'
import Skills from '../about/Skills';
import Pdf from '../../assets/CV_English.pdf';


//rename to home?
//

const heroContent = {
  heroImage: 'img/hero/dark.jpg',
  heroMobileImage: 'img-mobile',
  heroTitleName: 'محمد بن عبدالعزيز الهويمل',
  heroDesignation: 'أب لـــ (ليان – عبدالعزيز – زياد - سعود - ديم)',
  heroDescriptions: `انطلقت رحلتي بست سنوات في عالم البرمجة ....
  ثم مثلها في محاضن التربية والتعليم معلماً......
  والآن منذ خمس سنوات وأنا أمارس دوري القيادي والإشرافي التعليمي......`,
  heroBtn: ' Resume المزيد',
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='row home-details-container align-items-center '>
        
        <div className='col-12 col-lg-8 offset-lg-4 home-details  text-center '>
          <div>
            <img
              src={heroImg}
              className='img-fluid main-img-mobile d-sm-block d-lg-none'
              alt='hero'
            />
            <h1 className=' rakkasFont text-nowrap'>
              {heroContent.heroTitleName}
              <span className='alexndarFont'>{heroContent.heroDesignation}</span>
            </h1>
            <p  className='changaFont'>{heroContent.heroDescriptions}</p>
            <a className='button tajawalFont' target='_blank'  href={Pdf}>
              <span className='button-text'>{heroContent.heroBtn}</span>
          
          <span className='button-icon fa fa-arrow-right'></span>
            </a>
          </div>
        </div>
        <div
          className='col-lg-4 bg position-fixed d-none d-lg-block'
          style={{
            backgroundImage: `url(${heroImg}`,
          }}
        >
       
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='custom-modal dark hero'
        overlayClassName='custom-overlay dark'
        closeTimeoutMS={500}
      >
        <div>
          <button className='close-modal' onClick={toggleModal}>
            <img src={CloseImg} alt='close icon' />
          </button>
          {/* End close icon */}

          <div className='box_inner about'>
            <div data-aos='fade-up' data-aos-duration='1200'>
              <div className='title-section text-left text-sm-center'>
                <h1 className='kufamFont'>
                  عـــ <span>ــنِي</span>
                </h1>
                
              </div>
           
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
