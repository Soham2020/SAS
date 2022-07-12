import React, { useEffect, useState } from "react";
import { SliderData } from "./SliderData";
import Carousel from "react-bootstrap/Carousel";

function ImageSlider({ slides }) {
  return (
    <>
    <Carousel>

      {SliderData.map((slider, key) => {
        return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider.img}
                alt="First slide"
              />
            </Carousel.Item>
        );
      })}
    </Carousel>
    </>
  );
}

export default ImageSlider;
