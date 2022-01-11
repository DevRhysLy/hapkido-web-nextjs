import React, { Component } from "react";
import Slider from "react-slick";
import StarsRating from "stars-rating";
import Quote from "components/Typography/Quote.js";
import TestimonialCard from "components/TestimonialCard/TestimonialCard.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import ReactMarkdown from "react-markdown";

import style from "components/Markdown/markdown.module.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./news.module.css";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "black",
        height: "50%",
        alignItems: "center",
        textAlign: "center",
        opacity: "50%",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function News({ news = [] }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };
  return (
    <div style={{ margin: "32px" }}>
      <h2 style={{ textAlign: "center" }}>What's Happening at HCA</h2>
      <Slider {...settings}>
        {news.map((singleNews) => (
          <div style={{ margin: "32px" }}>
            <div style={{ margin: "24px" }}>
            {new Date(singleNews.fields.date).toDateString()}
              <ReactMarkdown className={style.reactMarkDown}>
                {singleNews.fields.description}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default News;
