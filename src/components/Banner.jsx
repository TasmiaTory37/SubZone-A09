import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.jpg'
import s6 from '../assets/s6.jpg'
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    return (
        <div className=''>
             <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={s1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s2} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s3} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s4} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s5} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s6} />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;
