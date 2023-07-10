import React from 'react';
import img1 from '../../../assets/img/projects/hotel-1.webp';
import img2 from '../../../assets/img/projects/hotel-1.webp';
import img3 from '../../../assets/img/projects/kanban-1.webp';
import img4 from '../../../assets/img/projects/fitness-ts-1.webp';
import img5 from '../../../assets/img/projects/fitness-ts-1.webp';
import CloseImg from '../../../assets/img/cancel.svg';
import PortfolioData from '../portfolioData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Modalcopy = ({ modalId, setGetModal }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  if (modalId === 1) {
    return (
      <div className='modal_portfolio '>
        {/* overlay div to close modal w outside click */}
        <div
          className='modal__outside'
          onClick={() => setGetModal(false)}
        ></div>
        {/* Modal content */}
        <div className='modal__content'>
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos='fade'>
                <h2 className='heading mb-2'>{item.type}</h2>
                <div className='modal__details'>
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className='row open-sans-font'>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          Project:{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.project}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          Client :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.client}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          Tech Stack :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.techStack}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          Preview :{' '}
                          <a
                            className='preview-link'
                            target='_blank'
                            rel='noopener noreferrer nofollow'
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Modal image and close button */}
                <figure className='modal__img'>
                  <img src={item.image} alt='portfolio project' />
                </figure>

                <button
                  className='close-modal'
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt='portfolio project' />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 2) {
    return (
      <div className='modal_portfolio'>
        <div
          className='modal__outside'
          onClick={() => setGetModal(false)}
        ></div>
        <div className='modal__content'>
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos='fade'>
                <h2 className='heading mb-2'>{item.type}</h2>
                <div className='modal__details'>
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className='row open-sans-font'>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          Project:{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.project}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          Client :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.client}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          Tech Stack :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.techStack}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          Preview :{' '}
                          <a
                            className='preview-link'
                            target='_blank'
                            rel='noopener noreferrer nofollow'
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className='modal__img'>
                  <img src={item.image} alt='portfolio project' />
                </figure>

                <button
                  className='close-modal'
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt='portfolio project' />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 3) {
    return (
      <div className='modal_portfolio'>
        <div
          className='modal__outside'
          onClick={() => setGetModal(false)}
        ></div>
        <div className='modal__content'>
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos='fade'>
                <h2 className='heading mb-2'>{item.type}</h2>
                <div className='modal__details'>
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className='row open-sans-font'>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          Project:{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.project}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          Client :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.client}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          Tech Stack :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.techStack}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          Preview :{' '}
                          <a
                            className='preview-link'
                            target='_blank'
                            rel='noopener noreferrer nofollow'
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className='modal__img'>
                  <img src={item.image} alt='portfolio project' />
                </figure>

                <button
                  className='close-modal'
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt='portfolio project' />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 4) {
    return (
      <div className='modal_portfolio'>
        <div
          className='modal__outside'
          onClick={() => setGetModal(false)}
        ></div>
        <div className='modal__content'>
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos='fade'>
                <h2 className='heading mb-2'>{item.type}</h2>
                <div className='modal__details'>
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className='row open-sans-font'>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          Project:{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.project}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          Client :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.client}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          Tech Stack :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.techStack}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          Preview :{' '}
                          <a
                            className='preview-link'
                            target='_blank'
                            rel='noopener noreferrer nofollow'
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className='modal__img'>
                  <Slider {...settings}>
                    <div>
                      <img src={item.image} alt='portfolio project' />
                    </div>
                    <div>
                      <img src={img4} alt='portfolio project' />
                    </div>
                    <div>
                      <img src={img5} alt='portfolio project' />
                    </div>
                  </Slider>
                </figure>

                <button
                  className='close-modal'
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt='portfolio project' />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 5) {
    return (
      <div className='modal_portfolio'>
        <div
          className='modal__outside'
          onClick={() => setGetModal(false)}
        ></div>
        <div className='modal__content'>
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos='fade'>
                <h2 className='heading mb-2'>{item.type}</h2>
                <div className='modal__details'>
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className='row open-sans-font'>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          Project:{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.project}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          Client :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.client}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          Tech Stack :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.techStack}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          Preview :{' '}
                          <a
                            className='preview-link'
                            target='_blank'
                            rel='noopener noreferrer nofollow'
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className='modal__img'>
                  <img src={item.image} alt='portfolio project' />
                </figure>

                <button
                  className='close-modal'
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt='portfolio project' />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 6) {
    return (
      <div className='modal_portfolio'>
        <div
          className='modal__outside'
          onClick={() => setGetModal(false)}
        ></div>
        <div className='modal__content'>
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos='fade'>
                <h2 className='heading mb-2'>{item.type}</h2>
                <div className='modal__details'>
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className='row open-sans-font'>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          Project:{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.project}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          Client :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.client}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          Tech Stack :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.techStack}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          Preview :{' '}
                          <a
                            className='preview-link'
                            target='_blank'
                            rel='noopener noreferrer nofollow'
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className='modal__img'>
                  <img src={item.image} alt='portfolio project' />
                </figure>

                <button
                  className='close-modal'
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt='portfolio project' />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 7) {
    return (
      <div className='modal_portfolio'>
        <div
          className='modal__outside'
          onClick={() => setGetModal(false)}
        ></div>
        <div className='modal__content'>
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos='fade'>
                <h2 className='heading mb-2'>{item.type}</h2>
                <div className='modal__details'>
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className='row open-sans-font'>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          Project:{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.project}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          Client :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.client}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          Tech Stack :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.techStack}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          Preview :{' '}
                          <a
                            className='preview-link'
                            target='_blank'
                            rel='noopener noreferrer nofollow'
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className='modal__img'>
                  <Slider {...settings}>
                    <div>
                      <img src={item.image} alt='portfolio project' />
                    </div>
                    <div>
                      <img src={img1} alt='portfolio project' />
                    </div>
                    <div>
                      <img src={img2} alt='portfolio project' />
                    </div>
                  </Slider>
                </figure>

                <button
                  className='close-modal'
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt='portfolio project' />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 8) {
    return (
      <div className='modal_portfolio'>
        <div
          className='modal__outside'
          onClick={() => setGetModal(false)}
        ></div>
        <div className='modal__content'>
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos='fade'>
                <h2 className='heading mb-2'>{item.type}</h2>
                <div className='modal__details'>
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className='row open-sans-font'>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          Project:{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.project}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          Client :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.client}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          Tech Stack :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.techStack}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          Preview :{' '}
                          <a
                            className='preview-link'
                            target='_blank'
                            rel='noopener noreferrer nofollow'
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className='modal__img'>
                  <img src={item.image} alt='portfolio project' />
                </figure>

                <button
                  className='close-modal'
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt='portfolio project' />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 9) {
    return (
      <div className='modal_portfolio'>
        <div
          className='modal__outside'
          onClick={() => setGetModal(false)}
        ></div>
        <div className='modal__content'>
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos='fade'>
                <h2 className='heading mb-2'>{item.type}</h2>
                <div className='modal__details'>
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className='row open-sans-font'>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          Project:{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.project}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          Client :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.client}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          Tech Stack :{' '}
                          <span className='ft-wt-600 uppercase'>
                            {details.techStack}
                          </span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          Preview :{' '}
                          <a
                            className='preview-link'
                            target='_blank'
                            rel='noopener noreferrer nofollow'
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <figure className='modal__img'>
                  <Slider {...settings}>
                    <div>
                      <img src={item.image} alt='portfolio project' />
                    </div>
                    <div>
                      <img src={img3} alt='portfolio project' />
                    </div>
                  </Slider>
                </figure>

                <button
                  className='close-modal'
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt='portfolio project' />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Modalcopy;
