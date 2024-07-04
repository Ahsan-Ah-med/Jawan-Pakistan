import React from 'react';
import styles from "./Banner.module.css";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = ({ data }) => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        autoplay={true}
        loop={true}
      >
        {data?.map((e, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <div className={styles.image}>
                  <img src={e?.image} />
                </div>
                <div className={styles.content}>
                  <div className={styles.sologen}>{e?.sologen}</div>
                  <div className={styles.title}>{e?.title}</div>
                  <a className={styles.btn}>{e?.btnText}</a>
                </div>
              </SwiperSlide>
            </>
          )
        })}
      </Swiper>
    </>
  )
}

export default Banner