import React, { useState } from "react";
import { Tabs, TabPanel } from "react-tabs";
import WorkData from "../../Data/WorkData";
import Modal from "./modal/WorkModal";

const Work = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };
  return (
    <>
      <div dir="rtl" className="portfolio-main">
        <Tabs forceRenderTabPanel={true}>
          <div className="container">
            <TabPanel forceRender>
              <div className="tab-container text-center">
                {WorkData.map((item) => {
                  const { id, Title, Image, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-up"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={Image} alt="portfolio project" />
                        <h3>
                          <span className="conent-title">{Title}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}
    </>
  );
};
export default Work;
