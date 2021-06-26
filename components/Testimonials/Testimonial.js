import React, { Component } from "react";
import Slider from "react-slick";
import StarsRating from 'stars-rating';
import Quote from "components/Typography/Quote.js";
import TestimonialCard from "components/TestimonialCard/TestimonialCard.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./testimonial.module.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",
        background: "black",
        height: "50%",
        alignItems: "center",
        textAlign: "center",
        opacity: "50%",
        zIndex: "1"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            display: "flex",
            background: "black",
            height: "50%",
            alignItems: "center",
            textAlign: "center",
            opacity: "50%",
            zIndex: "1"}}
        onClick={onClick}
      />
    );
  }

function Testimonial({ testimonials = [] }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div style={{margin: "32px"}}>
            <h2 style={{textAlign: "center"}}>Testimonials</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div style={{margin: "32px"}}>
                        <div style={{margin: "24px"}}>
                            <TestimonialCard>
                                <CardHeader style={{alignSelf:"center"}}>
                                    <img src={testimonial.fields.avatar.fields.file.url} style={{ height: "75px", width: "75px", overflow: "hidden", borderRadius: "50%" }}/>
                                </CardHeader>
                                <div className={styles.quoteDiv}>
                                    <Quote
                                        text={testimonial.fields.testimonialDescription}
                                        author={testimonial.fields.name}
                                    />
                                    <StarsRating
                                        count={5}
                                        value={testimonial.fields.rating}
                                        size={24}
                                        color2={'#ffd700'}
                                        edit={false} />
                                        </div>
                            </TestimonialCard>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default Testimonial;