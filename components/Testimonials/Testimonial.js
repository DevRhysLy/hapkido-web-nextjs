import React, { Component } from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import StarsRating from 'stars-rating';
import Quote from "components/Typography/Quote.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

function Testimonial({ testimonials = [] }) {
    const sizing = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={sizing}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.sys.id}>
                        <div>
                            <Card>
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
            </Carousel>
        </div>
    )
}
export default Testimonial;