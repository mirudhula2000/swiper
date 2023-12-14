import React from 'react'
import './Body.css'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Body = () => {
  return (
   <body>
    <div>
    <Swiper className='swiper'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><h2 className='slide1'>Diwali dhamaka sale is on!!!!</h2></SwiperSlide>
      <SwiperSlide><div className='slide2'>
        <img  className='s2' src={slide2} alt=''/>
        <h1 className='sl2'>Starting @ 999/-</h1>
        </div>
        </SwiperSlide>
      <SwiperSlide><div className='slide2'>
        <img  className='s3' src={slide3} alt=''/>
        <h1 className='sl3'>Customize your own....
            Starting from 1299/-
        </h1>
        </div></SwiperSlide>
      
      
    </Swiper>
    </div>
   </body>
  )
}

export default Body