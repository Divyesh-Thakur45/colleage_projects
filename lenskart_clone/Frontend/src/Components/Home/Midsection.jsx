import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";

export const Midsection = () => {
  const [bigsliderdata, setbigsliderdata] = useState([]);

  const bigSliderFun = () => {
    axios
      .get("https://all-json-server-osax.onrender.com/firstbigslider")
      .then((res) => setbigsliderdata(res.data))
      .catch((err) => alert(err));
  };
  useEffect(() => {
    bigSliderFun();
  }, []);

  return (
    <div>
      <div className="flex justify-between m-auto text-center px-10 py-3 max-sm:grid max-sm:grid-cols-2 sm:flex-row sm:justify-around sm:px-5 md:justify-between md:px-8">
        <Link to={"/eyeglassespage"}>
          <div className="mb-5 p-2.5 text-center max-sm:mb-5 max-sm:p-2.5 sm:mb-5 sm:p-2.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png"
              alt="Eyeglasses"
              width={200}
              className="w-full md:w-[200px]"
            />
            <a href="#" className="">
              Eyeglasses
            </a>
          </div>
        </Link>

        {/* 2 */}
        <Link to={"/screenglasses"}>
          <div className="mb-5 p-2.5 text-center max-sm:mb-5 max-sm:p-2.5 sm:mb-5 sm:p-2.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Apr22/b2.png"
              alt="Sunglasses"
              width={200}
              className="w-full md:w-[200px]"
            />
            <a href="#" className="">
              Sunglasses
            </a>
          </div>
        </Link>
        {/* 3 */}
        <div className="mb-5 p-2.5 text-center max-sm:mb-5 max-sm:p-2.5 sm:mb-5 sm:p-2.5">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Apr22/d2.png"
            alt="Screen Glasses"
            width={200}
            className="w-full md:w-[200px]"
          />
          <a href="#" className="">
            Screen Glasses
          </a>
        </div>

        {/* 4 */}
        <div className="mb-5 p-2.5 text-center max-sm:mb-5 max-sm:p-2.5 sm:mb-5 sm:p-2.5">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Apr22/d.png"
            alt="Content Lenses"
            width={200}
            className="w-full md:w-[200px]"
          />
          <a href="#" className="">
            Content Lenses
          </a>
        </div>

        {/* 5 */}
        <div className="mb-5 p-2.5 text-center max-sm:mb-5 max-sm:p-2.5 sm:mb-5 sm:p-2.5">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Apr22/e2.png"
            alt="Power Sunglasses"
            width={200}
            className="w-full md:w-[200px]"
          />
          <a href="#" className="">
            Power Sunglasses
          </a>
        </div>
      </div>

      <div className="">
        <img
          src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg"
          alt=""
          className="w-full"
        />
      </div>

      <div className="flex overflow-hidden pt-4 max-sm:py-2.5 sm:py-3 md:py-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {bigsliderdata.map((e, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="w-full">
                  <img
                    src={e.image || "/placeholder.svg"}
                    alt=""
                    className="w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* _________________ */}
      <div className="py-5">
        <img
          src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};
