import React from "react";
import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../../../Data/WorkData";
import ImageSlider from "./ImageSlider";

const WorkModal = ({ modalId, setGetModal }) => {
  return (
    <div dir="rtl" className="modal_portfolio">
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>
      <div className="modal__content">
        {PortfolioData.filter((item) => item.id === modalId).map((item) => {
          return (
            <div key={item.id} data-aos="fade">
              <h1 className="heading mb-2 changaFont">{item.Title}</h1>
              <div className="modal__details">
                {item.modalDetails.map((details, i) => {
                  return (
                    <div key={i} className="row  text-lg ibmfont">
                      <div className="col-12  mb-2">
                        <i className="  p-2 "></i>

                        <p className="fs-5 text-wrap  ">
                          {details.Description}
                        </p>
                      </div>

                      <div className="col-12 col-sm-7 mb-2">
                        <i className="fa fa-code preview-link text-3xl  p-2"></i>

                        <b className="ft-wt-600 uppercase">
                          {details.techStack}
                        </b>
                      </div>
                      <div className="col-12 col-sm-5 mb-2">
                        <i className="fa fa-external-link p-2"></i>

                        <a
                          className="preview-link"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          href={details.link}
                        >
                          {details.preview}
                        </a>
                      </div>
                      <ImageSlider key={i} modalId={modalId} />
                    </div>
                  );
                })}
              </div>
              {/* <figure className='modal__img'>
                  <img src={item.Image} alt='portfolio project' />
                </figure> */}

              <button
                className="close-modal"
                onClick={() => setGetModal(false)}
              >
                <img src={CloseImg} alt="portfolio project" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WorkModal;
