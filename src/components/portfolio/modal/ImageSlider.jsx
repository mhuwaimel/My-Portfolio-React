import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/src/core/styles.scss";

import WorkData from "../../../Data/WorkData";
import index from "../../about";

const ImageSlider = ({ modalId }) => {
  return (
    <>
      {WorkData.filter((item) => item.id === modalId).map((item) => {
        return (
          <div key={item.id}>
            {item.imgs.map((details, i) => {
              return (
                <AwesomeSlider key={i}>
                  <div data-src={details.img4} />
                  <div data-src={details.img1} />
                  <div data-src={details.img2} />
                  <div data-src={details.img3} />
                </AwesomeSlider>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
export default ImageSlider;
