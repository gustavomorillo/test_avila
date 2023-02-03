import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

export const Carousel = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <img src="assets/DogHero.png" alt="dog hero 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/DogHero.png" alt="dog hero 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/DogHero.png" alt="dog hero 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/DogHero.png" alt="dog hero 4" />
      </SwiperSlide>
    </Swiper>
  );
};
