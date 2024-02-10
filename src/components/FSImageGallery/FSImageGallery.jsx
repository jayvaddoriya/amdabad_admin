import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import clsx from 'clsx';
// Custom style
import styles from "./FSImageGallery.module.css";
import { Image } from 'antd';
export const FSImageGallery = ({
  imageGallerySliderItem
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // Ref Swiper
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return(
    <>
      <div className={clsx(styles.gallerySwipperWrap, "mx-auto")}>
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={clsx(styles.productSliderBigBanner, "mb-2")}
        >
          {imageGallerySliderItem.map((item, index) => {
            return <>
              <SwiperSlide key={index}>
                <Image src={item.productImage} className={clsx(styles.borderRadiusInherit, "w-100 h-100")} preview={false}/>
              </SwiperSlide>
            </>
        })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={clsx(styles.productSliderSmallBanner)}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {imageGallerySliderItem.map((item, index) => (
            <>
              <SwiperSlide className='cover-image' key={index}>
                <Image src={item.thumbnailImage} className={clsx(styles.borderRadiusInherit, "pointer")} preview={false}/>
              </SwiperSlide>
            </>
          ))}
          <div className="swiper-button-arrow swiper-button-arrow-left d-flex align-center justify-center pointer position-absolute z-1" ref={prevRef}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.52385 6.16658H13.6668V7.83325H3.52385L7.99383 12.3032L6.81533 13.4817L0.333496 6.99992L6.81533 0.518066L7.99383 1.69657L3.52385 6.16658Z" fill="white"/>
              </svg>
          </div>
          <div className="swiper-button-arrow swiper-button-arrow-right d-flex align-center justify-center pointer position-absolute z-1" div ref={nextRef}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4761 7.83342L0.333171 7.83342L0.333172 6.16675L10.4761 6.16675L6.00617 1.69683L7.18467 0.518333L13.6665 7.00008L7.18467 13.4819L6.00617 12.3034L10.4761 7.83342Z" fill="white"/>
              </svg>
          </div>
        </Swiper>
      </div>
    </>
  )
}