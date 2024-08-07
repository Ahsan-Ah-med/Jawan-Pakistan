import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ image }) => {
//   console.log(image);
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]} 
      spaceBetween={50}
      slidesPerView={1}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={true}
    >
      {image &&
        image.map((e, i) => {
        //   console.log(e);
          return (
            <SwiperSlide key={i}>
              <img src={e.url} />
            </SwiperSlide>
          );
        })}
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
      */}
    </Swiper>
  );
};
export default Slider;
