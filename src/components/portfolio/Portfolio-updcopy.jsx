import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import PortfolioData from './portfolioData';
import Modal from './modal/Modal';

const Portfolioupdcopy = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };
  return (
    <>
      <div className='portfolio-main'>
        <Tabs>
          <div className='container'>
            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.map((item) => {
                  const { id, type, image, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos='fade-right'
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className='tab-content'
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt='portfolio project' />
                        <h3>
                          <span className='conent-title'>{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
            <div className='tab-container'>
                {PortfolioData.map((item) => {
                  const { id, type, image, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos='fade-right'
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className='tab-content'
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt='portfolio project' />
                        <h3>
                          <span className='conent-title'>{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.filter((item) =>
                  item.tag.includes('Fitness')
                ).map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos='fade-right'
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className='tab-content'
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt='portfolio project' />
                        <h3>
                          <span className='conent-title'>{type}</span>
                        </h3>
                      </div>
                      {/* {getModal && <Modal props={modalId} />} */}
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.filter((item) =>
                  item.tag.includes('graphic design')
                ).map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos='fade-right'
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className='tab-content'
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt='portfolio project' />
                        <h3>
                          <span className='conent-title'>{type}</span>
                        </h3>
                      </div>
                      {/* {getModal && <Modal props={modalId} />} */}
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.filter((item) =>
                  item.tag.includes('mockup')
                ).map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos='fade-right'
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className='tab-content'
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt='portfolio project' />
                        <h3>
                          <span className='conent-title'>{type}</span>
                        </h3>
                      </div>
                      {/* {getModal && <Modal props={modalId} />} */}
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{' '}
    </>
  );
};

export default Portfolioupdcopy

;
