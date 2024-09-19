import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

interface ISliderTitle {
  sliderSubject: string,
  sliderSubtitle?: string,
}

interface ISlide {
  slideImage: StaticImageData;
  imageWidth: number;
  imageheight: number;
  slideTite: string;
  slideSubtitle: string;
  linkPaht?: string;
}

interface ISlider {
  identifier?: string;
  sliderList: ISlide[];
  sliderTitle: ISliderTitle;
}

const Slide = ({ sliderTitle, sliderList }: ISlider ) => {

  return(
    <div className='inside-qasr-inner container'>
      <h2 className={`${playfair.className} inside-qasr-title`}>{sliderTitle.sliderSubject}</h2>
      {sliderTitle.sliderSubtitle && <p className='inside-qasr-subtitle'>{sliderTitle.sliderSubtitle}</p>}

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        scrollbar={{ draggable: true }}
        loop={true}
        breakpoints={{
          915: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1,
          },
        }}
      >

        {sliderList.map((slide, index) => {
          return(
            <SwiperSlide key={index + 'slide'}>
              <div className='slide'>
                <Image
                  className='slide-image'
                  src={slide.slideImage}
                  width={slide.imageWidth}
                  height={slide.imageheight}
                  alt={slide.slideTite}
                />
                <h3 className={`${montserrat.className} slide-title`}>{slide.slideTite}</h3>
                <p className={`${montserrat.className} slide-subtitle`}>{slide.slideSubtitle}</p>
                {slide.linkPaht && <Link className='slide-link' href={slide.linkPaht}>Buy Now</Link>}
              </div>
            </SwiperSlide>
          )
        })}

        <div className="swiper-pagination"></div>

      </Swiper>
    </div>
  )
}

export default Slide