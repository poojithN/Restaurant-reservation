import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { cls: "poster-noodle", big: "50% OFF", small: "Fresh noodles, hot and fast" },
  { cls: "poster-dark", big: "SUPER DELICIOUS FOOD", small: "Up to 50% off · Limited offer" },
  { cls: "poster-noodle", big: "50% OFF", small: "Fresh noodles, hot and fast" },
  { cls: "poster-dark", big: "ORDER NOW", small: "Free home delivery" },
];

// Responsive carousel: 1 slide on mobile, 2 on tablet, 3 on desktop
export default function HeroSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={16}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 1 },
        700: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="hero-swiper"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className={"poster " + slide.cls}>
            <div className="poster-bowl" />
            <h2>{slide.big}</h2>
            <p>{slide.small}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
