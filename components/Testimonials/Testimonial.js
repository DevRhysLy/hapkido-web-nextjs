import React, { Component } from "react";
import Slider from "react-slick";
import StarsRating from 'stars-rating';
import Quote from "components/Typography/Quote.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial({ testimonials = [] }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return (
        <div style={{margin: "32px"}}>
            <h2 style={{textAlign: "center"}}>Testimonials</h2>
            <Slider {...settings}>
                {console.log(testimonials)}
                {testimonials.map((testimonial) => (
                    <div style={{margin: "32px"}}>
                        <div style={{margin: "24px"}}>
                            <Card>
                                <CardHeader style={{alignSelf:"center"}}>
                                    <img src={testimonial.fields.avatar.fields.file.url} style={{ height: "75px", width: "75px", overflow: "hidden", borderRadius: "50%" }}/>
                                </CardHeader>
                                <CardBody>
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
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default Testimonial;