import React, { Component } from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function Testimonial({ testimonials = [] }) {
    const sizing = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
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
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
                responsive={sizing}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.sys.id}>
                        <div>
                            <h4>{testimonial.fields.name}</h4>
                            <p>{testimonial.fields.testimonialDescription}</p>
                            <div>{testimonial.fields.rating}</div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
export default Testimonial;