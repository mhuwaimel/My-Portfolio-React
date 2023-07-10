import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import PortfolioData from './portfolioData';
import Modal from './modal/Modal';

const Portfolio = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }

  // still need to have state for each of the modal othwerise it opens the same one modal content
  // const [isOpen, { on: openModal, off: closeModal }] = useBoolean();

  return (
    <ModalProvider>
      <Tabs>
        <div className='portfolio-tab-content'>
          {/* <TabPanel> */}
          <ul className='row grid justify-content-center'>
            <li
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='0'
            >
              <figure
                // onClick={toggleModalOne}
                onClick={toggleModalOne}
              >
                <img
                  src='img/projects/luxworld-1.webp'
                  alt='luxworld-portolio'
                />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'>
                    Furnishing Website Project
                  </span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
                closeTimeoutMS={500}
                appElement={document.getElementById('root') || undefined}
              >
                <div>
                  <button className='close-modal' onClick={toggleModalOne}>
                    <img src='/img/cancel.svg' alt='close icon' />
                  </button>
                  {/* End close icon */}

                  <div className='box_inner portfolio'>
                    <ModalOneContent title={'Furnishing Website'} />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* Portfolio Item Ends */}
            <li
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='100'
            >
              <figure onClick={toggleModalTwo}>
                <img src='img/projects/aquaceh-1.webp' alt='aquaceh-portolio' />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'>Pool Website Project</span>
                </div>
              </figure>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
                closeTimeoutMS={500}
                appElement={document.getElementById('root') || undefined}
              >
                <div>
                  <button className='close-modal' onClick={toggleModalTwo}>
                    <img src='/img/cancel.svg' alt='close icon' />
                  </button>
                  {/* End close icon */}

                  <div className='box_inner portfolio'>
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='200'
            >
              <figure onClick={toggleModalThree}>
                <img
                  src='img/projects/react-dashboard-1.webp'
                  alt='react-dashboard-portolio'
                />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'>React Dashboard Project</span>
                </div>
              </figure>

              {/* Start ModalThreeContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
                closeTimeoutMS={500}
                appElement={document.getElementById('root') || undefined}
              >
                <div>
                  <button className='close-modal' onClick={toggleModalThree}>
                    <img src='/img/cancel.svg' alt='close icon' />
                  </button>
                  {/* End close icon */}

                  <div className='box_inner portfolio'>
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
            {/* <!-- Portfolio Item Starts --> */}
            <li
              className='direction-reveal'
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='0'
            >
              <figure
                className='direction-reveal__card'
                onClick={toggleModalFour}
              >
                <img
                  src='img/projects/fitness-ts-1.webp'
                  alt='fitness-portfolio'
                />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'>Fitness Landing SPA</span>
                </div>
              </figure>

              {/* Start ModalFourContent */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
                closeTimeoutMS={500}
                appElement={document.getElementById('root') || undefined}
              >
                <div>
                  <button className='close-modal' onClick={toggleModalFour}>
                    <img src='/img/cancel.svg' alt='close icon' />
                  </button>
                  {/* End close icon */}

                  <div className='box_inner portfolio'>
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFourContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
            {/* <!-- Portfolio Item Starts --> */}
            <li
              className='direction-reveal'
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='100'
            >
              <figure
                className='direction-reveal__card'
                onClick={toggleModalFive}
              >
                <img src='img/projects/youtube-1.webp' alt='youtube-portolio' />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'>YouTube Clone with API</span>
                </div>
              </figure>

              {/* Start ModalFiveContent */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
                closeTimeoutMS={500}
                appElement={document.getElementById('root') || undefined}
              >
                <div>
                  <button className='close-modal' onClick={toggleModalFive}>
                    <img src='/img/cancel.svg' alt='close icon' />
                  </button>
                  {/* End close icon */}

                  <div className='box_inner portfolio'>
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFiveContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
            {/* <!-- Portfolio Item Starts --> */}
            <li
              className='direction-reveal'
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='200'
            >
              <figure
                className='direction-reveal__card'
                onClick={toggleModalSix}
              >
                <img src='img/projects/airbnb-1.webp' alt='airbnb-ortolio' />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'> Airbnb Clone</span>
                </div>
              </figure>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
                closeTimeoutMS={500}
                appElement={document.getElementById('root') || undefined}
              >
                <div>
                  <button className='close-modal' onClick={toggleModalSix}>
                    <img src='/img/cancel.svg' alt='close icon' />
                  </button>
                  {/* End close icon */}

                  <div className='box_inner portfolio'>
                    <ModalSixContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSixContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
            {/* <!-- Portfolio Item Starts --> */}
            <li
              className='direction-reveal'
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='0'
            >
              <figure
                className='direction-reveal__card'
                onClick={toggleModalSeven}
              >
                <img
                  src='img/projects/hotel-1.webp'
                  alt='hotel-booking-portolio'
                />
                <div className='hover-content-wrapper'>
                  <span className='content-title'> Hotel Booking</span>
                </div>
              </figure>

              {/* Start ModalSevenContent */}
              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
                closeTimeoutMS={500}
                appElement={document.getElementById('root') || undefined}
              >
                <div>
                  <button className='close-modal' onClick={toggleModalSeven}>
                    <img src='/img/cancel.svg' alt='close icon' />
                  </button>
                  {/* End close icon */}

                  <div className='box_inner portfolio'>
                    <ModalSevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSevenContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
            {/* <!-- Portfolio Item Starts --> */}
            <li
              className='direction-reveal'
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='100'
            >
              <figure
                className='direction-reveal__card'
                onClick={toggleModalEight}
              >
                <img
                  src='img/projects/ecom-mern.webp'
                  alt='ecom-mern-portolio'
                />

                <div className=' hover-content-wrapper'>
                  <span className='content-title'> Ecommerce MERN</span>
                </div>
              </figure>
              {/* Start ModalEightContent */}
              <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
                closeTimeoutMS={500}
                appElement={document.getElementById('root') || undefined}
              >
                <div>
                  <button className='close-modal' onClick={toggleModalEight}>
                    <img src='/img/cancel.svg' alt='close icon' />
                  </button>
                  {/* End close icon */}

                  <div className='box_inner portfolio'>
                    <ModalEightContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalEightContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
            {/* <!-- Portfolio Item Starts --> */}
            <li
              className='direction-reveal'
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='200'
            >
              <figure
                className='direction-reveal__card'
                onClick={toggleModalNine}
              >
                <img
                  src='img/projects/kanban-1.webp'
                  alt='kanban-ts-portolio'
                />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'> Kanban TypeScript</span>
                </div>
              </figure>

              {/* Start ModalNineContent */}
              <Modal
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
                closeTimeoutMS={500}
                appElement={document.getElementById('root') || undefined}
              >
                <div>
                  <button className='close-modal' onClick={toggleModalNine}>
                    <img src='/img/cancel.svg' alt='close icon' />
                  </button>
                  {/* End close icon */}

                  <div className='box_inner portfolio'>
                    <ModalNineContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
          {/* </TabPanel> */}
          {/* End All Project */}
        </div>
      </Tabs>
    </ModalProvider>
  );
};

export default Portfolio;
