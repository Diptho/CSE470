import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import vg1 from '../../public/BG/3318154.jpg'
import vg2 from '../../public/BG/3319458.jpg'
import vg3 from '../../public/BG/5678546.jpg'
import vg4 from '../../public/BG/5678551.jpg'
const Banner = () => {
    return (
        <div>
              <div>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
            
              <SwiperSlide className='max-h-[700px]'>
                    <img src={vg1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='max-h-[700px]'>
                    <img src={vg4} alt="" />
                </SwiperSlide>
                <SwiperSlide className='max-h-[700px]'>
                    <img src={vg1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='max-h-[700px]'>
                    <img src={vg2} alt="" />
                </SwiperSlide>
            
               
            </Swiper>

        </div>      
        </div>
    );
};

export default Banner;