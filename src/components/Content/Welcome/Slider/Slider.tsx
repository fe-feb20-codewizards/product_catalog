import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.scss';

export default function Slider() {

	return (
		<Swiper
			className="slider"
			modules={[Pagination, Navigation]}
			spaceBetween={0}
			slidesPerView={1}
			pagination={{ clickable: true }}
			navigation
			loop={true}
			autoplay={{ delay: 2500 }}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				<img src={process.env.PUBLIC_URL + '/images/banner1-full.png'} alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={process.env.PUBLIC_URL + '/images/banner2-full.png'} alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={process.env.PUBLIC_URL + '/images/banner4-full.png'} alt="" />
			</SwiperSlide>
		</Swiper>
	);
}



