import React from "react";
import './testimonials.css'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const data = [
    {
        name: "Ben",
        review: '"everything was done well, first Vitor made sure to understand all the specs before starting dev, he always delivered on time, made sure we made enough testings before deploying. Everything is working exactly as we wanted. Im definitely recommending him"'
    },
    {
        name: "Khurram",
        review: '"Vitor delivered what was required, how it was required and when it was required - satisfaction all around. i will be working with him for future requirements for sure"'
    },
    {
        name: "Tim",
        review: '"He was amazing!! Very responsive, very helpful, and did an excellent job. I would highly recommend him to anyone!!!"'
    }
]

function Testimonials() {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <h5>(Testimonials are not necessarily related to web dev)</h5>
        <Swiper className="container testimonials__container" spaceBetween={40} pagination={{dynamicBullets: true,}}modules={[Pagination]}>
            {
                data.map(({name, review}, index) =>{
                    return(
                        <SwiperSlide key={index} className='testimonial'>
                            <div className="client__avatar">
                                <h5 className='client__name'>{name}</h5>
                                <small className="client__review">
                                    {review}                                    
                                    </small>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            
            
        </Swiper>
    </section>
  )
}

export default Testimonials