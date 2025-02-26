import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./index.css";

import deers from "../../assets/deers.jpg";
import elephants from "../../assets/elephant.jpg";
import lion from "../../assets/lion.jpg";

const images = [deers, elephants, lion];

const HeroSection = () => {
  return (
    <section id="herosection" className="hero">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <img src={img} alt={`Slide ${index + 1}`} className="hero-image" />
              <div className="hero-content">
              <h1 className="hero-title">Big Cats Week at Maasai Mara - Diwali 2023 Special</h1>
                <p className="hero-subtitle">
                  November is one of the best times to visit Kenya, especially Maasai Mara.
                  The large migratory herds return to Tanzania, making it an excellent
                  time to spot big cats hunting. Short rains make the plains lush green,
                  and the dramatic skies create breathtaking sunrises and sunsets.
                </p>
                <p className="paragraph">
                  November is also a time for holidays and family gatherings. To
                  commemorate our first anniversary in Nairobi, we have curated this
                  itinerary at an affordable cost without compromising on services.
                </p>
                <p className="paragraph"><strong>Join us on this unforgettable journey of a lifetime!</strong></p>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
