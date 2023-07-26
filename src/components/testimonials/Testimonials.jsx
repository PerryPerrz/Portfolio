import React from 'react';

import './Testimonials.css';

import Image1 from "../../assets/avatar-1.svg"
import Image2 from "../../assets/avatar-3.svg"

// import Swiper core and required modules (Swiper version ^8.4.6)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id: 1,
        image: Image1,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment:
            "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
    {
        id: 2,
        image: Image2,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment:
            "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
];

function Testimonials() {
    return (
        <section className="testimonials container section">
            <h2 className="section-title">Clients & Reviews</h2>

            <Swiper className="testimonials-container grid"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}
            >
                {data.map(({ id, image, title, subtitle, comment }) => {
                    return (
                        <SwiperSlide className="testimonial-item">
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="testimonials-title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials