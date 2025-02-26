import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

const testimonials = [
  {
    name: "John Doe",
    text: "The Maasai Mara tour was an unforgettable experience! The guides were amazing, and the wildlife was breathtaking.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    text: "Absolutely loved every moment! The accommodations were comfortable, and the safari experience was top-notch.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Lee",
    text: "A well-organized and thrilling adventure. Seeing the Big Five in their natural habitat was a dream come true!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Travelers Say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="testimonial-slider"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} />
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
