import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './_slider.scss'

import {EffectCoverflow, Pagination} from 'swiper/modules';

function Slider({slides}) {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className='mySwiper'
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.source}>
                        <img src={slide.source} alt={slide.title} className="sliderImage" />
                        <div className='slide-infos'>
                            <h3 className="slide-infos__title">
                                {slide.title}
                            </h3>
                            <p className="slide_infos__description">
                                {slide.infos.type}
                            </p>
                        </div>
                    </SwiperSlide>  
                ))}
            </Swiper>
        </>
    )
}

export default Slider;

