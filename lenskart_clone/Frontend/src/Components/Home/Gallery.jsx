import { useEffect, useState } from "react";
import axios from "axios";
export const Gallery = () => {
  const [Secondsliderdata, setSecondsliderdata] = useState([]);
  const SecondsliderdataFun = () => {
    axios
      .get("https://all-json-server-osax.onrender.com/secondSlider")
      .then((res) => setSecondsliderdata(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    SecondsliderdataFun();
  }, []);
  return (
    <div>
      <div>
        <div className="text-center p-5 flex items-center mx-2.5 justify-around max-sm:flex-col">
          <div className="text-5xl text-gray-800 text-start max-sm:text-2xl max-sm:text-center sm:max-md:text-4xl md:max-lg:text-5xl">
            WEAR THE
            <div
              style={{ marginTop: "-19px" }}
              className="font-bold text-gray-800"
            >
              TREND
            </div>
            <div className="text-base text-gray-800">
              Our hottest collections
            </div>
          </div>
          <div className="flex overflow-x-auto max-sm:flex-col max-sm:items-center">
            {Secondsliderdata.map((e, idx) => {
              return (
                <div
                  className="rounded border border-gray-800 p-2.5 mx-1.5 max-sm:my-2.5 max-sm:w-full"
                  key={idx}
                >
                  <img
                    src={e.image || "/placeholder.svg"}
                    alt={e.title}
                    className="w-64 max-sm:w-52 sm:max-md:w-56 md:max-lg:w-60"
                  />
                  <p className="m-0 mb-2.5 text-base font-bold">{e.title}</p>
                  <button className="bg-cyan-500 text-white border-0 py-2.5 px-5 cursor-pointer rounded hover:bg-cyan-700">
                    Explore
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* FREE PROGRESSIVE LENSES */}
      <div>
        <div>
          <div className="line-container">
            <span className="font-bold text-2xl text-center flex justify-center my-2">
              FREE PROGRESSIVE LENSES
            </span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/2024/may/prog/New%20Web%20Banner.jpg"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="font-bold text-2xl text-center flex justify-center my-2">
              BOOK EYE TEST AT HOME
            </span>
          </div>
          <img
            src="https://static5.lenskart.com/media/uploads/hechome11.png"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="font-bold text-2xl text-center flex justify-center my-2">
              FREE ONLINE EYE TEST
            </span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="font-bold text-2xl text-center flex justify-center my-2">
              PREMIUM EYE WEAR
            </span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/oct23/home/13-10-23/As%20seen%20on%20Desk.jpg"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="font-bold text-2xl text-center flex justify-center my-2">
              AS SEEN ON ROY
            </span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="font-bold text-2xl text-center flex justify-center my-2">
              AS SEEN ON SHARK TANK
            </span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="font-bold text-2xl text-center flex justify-center my-2">
              AS SEEN ON
            </span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
            alt=""
          />
        </div>

        <div>
          <div className="line-container">
            <span className="font-bold text-2xl text-center flex justify-center my-2">
              TRENDING SUNGLASSES
            </span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
            alt=""
          />
        </div>
        <div>
          <div className="line-container2">
            <span className="font-bold text-2xl text-center flex justify-center my-22">
              GLAM UP WITH COLOR LENSES
            </span>
          </div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
            alt=""
          />
        </div>
      </div>

      <div className="container">
        <div className="line-container">
          <span className="font-bold text-2xl text-center flex justify-center my-2">
            FIND THE PERFECT FIT
          </span>
        </div>
        <div className="w-4/5 p-2.5 flex mx-auto">
          <div className="w-1/2 mr-1.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 my-1.5 ml-2.5">
            <div className="mb-1.5 h-1/2">
              <img
                src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
                alt=""
              />
            </div>
            <div className="mt-1.5 h-1/2">
              <img
                src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex p-2.5 w-4/5 mx-auto">
          <div className="mr-2.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg"
              alt=""
            />
          </div>
          <div className="mr-2.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
        <div className="line-container">
          <span className="font-bold text-2xl text-center flex justify-center my-2">
            CONTACT LENSES & MORE
          </span>
        </div>
        <div className="flex mx-auto w-4/5">
          <div className="mx-1.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg"
              alt=""
            />
          </div>
          <div className="mx-1.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
        <div className="line-container">
          <span className="font-bold text-2xl text-center flex justify-center my-2">
            BUY IT YOUR WAY
          </span>
        </div>
        <div className="w-[90%] flex mx-auto">
          <div className="m-2.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/republic/celb-new/call.png"
              alt=""
            />
          </div>
          <div className="m-2.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/republic/celb-new/wts-up.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[90%] flex mx-auto">
          <div className="m-2.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg"
              alt=""
            />
          </div>
          <div className="m-2.5">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* OUR BRANDS */}
      <div>
        <div className="line-container">
          <span className="font-bold text-2xl text-center flex justify-center my-2">
            OUR BRANDS
          </span>
        </div>
        <div>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full max-w-6xl my-2.5 mx-auto overflow-hidden relative my-[2%]">
        <div className="flex justify-between items-center mb-5 px-5">
          <h2 className="text-2xl font-bold max-sm:text-lg sm:max-md:text-xl md:max-lg:text-[22px]">
            EYEGLASSES
          </h2>
          <a
            href="/view-range"
            className="text-base text-[#00a9a5] no-underline max-sm:text-sm sm:max-md:text-[15px]"
          >
            View Range
          </a>
        </div>

        <div className="flex transition-transform duration-500 ease-in-out">
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-gold-full-rim-rectangle-lenskart-air-essentials-la-e13517-c2-eyeglasses_csvfile-1695816767916-g_7546_27_09_2023.jpg"
              alt="Eyeglass 1"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13634-ful-ram-ale-metl-stlbr-c1-eyeglasaas_g_4921.jpg"
              alt="Eyeglass 2"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0532.jpg"
              alt="Eyeglass 3"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg"
              alt="Eyeglass 4"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-ls-e15666-c6-eyeglasses_img_9630_29_dec23.jpg"
              alt="Eyeglass 5"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/brown-transparent-full-rim-rectangle-lenskart-air-essentials-la-e15844-c4-eyeglasses_g_0279_25_05_2023.jpg"
              alt="Eyeglass 6"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
        </div>
        <div className="absolute top-1/2 w-full flex justify-between -translate-y-1/2 items-center my-5">
          <button className="bg-transparent border-none text-[50px] cursor-pointer text-gray-300 hover:text-black max-sm:text-[30px] sm:max-md:text-[40px] md:max-lg:text-[45px]">
            ❮
          </button>
          <button className="bg-transparent border-none text-[50px] cursor-pointer text-gray-300 mr-5 hover:text-black max-sm:text-[30px] sm:max-md:text-[40px] md:max-lg:text-[45px]">
            ❯
          </button>
        </div>
      </div>

      <div className="w-full max-w-6xl my-2.5 mx-auto overflow-hidden relative my-[2%]">
        <div className="flex justify-between items-center mb-5 px-5">
          <h2 className="text-2xl font-bold max-sm:text-lg sm:max-md:text-xl md:max-lg:text-[22px]">
            SUNGLASSES
          </h2>
          <a
            href="/view-range"
            className="text-base text-[#00a9a5] no-underline max-sm:text-sm sm:max-md:text-[15px]"
          >
            View Range
          </a>
        </div>
        <div className="flex transition-transform duration-500 ease-in-out">
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-gradient-black-full-rim-wayfarer-john-jacobs-jj-tints-jj-s13227-c4-sunglasses_csvfile-1708406002394-img_7007.jpg"
              alt="Eyeglass 1"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-s12808-c2-sunglasses_g_8841.jpg"
              alt="Eyeglass 2"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-s12808-c1-sunglasses_g_8864_image_pla.jpg"
              alt="Eyeglass 3"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg"
              alt="Eyeglass 4"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-ls-e15666-c6-eyeglasses_img_9630_29_dec23.jpg"
              alt="Eyeglass 5"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/brown-transparent-full-rim-rectangle-lenskart-air-essentials-la-e15844-c4-eyeglasses_g_0279_25_05_2023.jpg"
              alt="Eyeglass 6"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
        </div>
        <div className="absolute top-1/2 w-full flex justify-between -translate-y-1/2 items-center my-5">
          <button className="bg-transparent border-none text-[50px] cursor-pointer text-gray-300 hover:text-black max-sm:text-[30px] sm:max-md:text-[40px] md:max-lg:text-[45px]">
            ❮
          </button>
          <button className="bg-transparent border-none text-[50px] cursor-pointer text-gray-300 mr-5 hover:text-black max-sm:text-[30px] sm:max-md:text-[40px] md:max-lg:text-[45px]">
            ❯
          </button>
        </div>
      </div>

      {/* 1 img */}
      <div>
        <img
          src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg"
          alt=""
        />
      </div>

      <div className="w-full max-w-6xl my-2.5 mx-auto overflow-hidden relative my-[2%]">
        <div className="flex justify-between items-center mb-5 px-5">
          <h2 className="text-2xl font-bold max-sm:text-lg sm:max-md:text-xl md:max-lg:text-[22px]">
            EYEGLASSES
          </h2>
          <a
            href="/view-range"
            className="text-base text-[#00a9a5] no-underline max-sm:text-sm sm:max-md:text-[15px]"
          >
            View Range
          </a>
        </div>

        <div className="flex transition-transform duration-500 ease-in-out">
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12947-c2-eyeglasses_vincent-chase-vc-e12947-c2-eyeglasses_G_1969_1.jpg"
              alt="Eyeglass 1"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-lk-e12617-c4-eyeglasses_vincent-chase-lk-e12617-c4-eyeglasses_vincent-chase-lk-e12617-c4-eyeglasses_j_5175_1.jpg"
              alt="Eyeglass 2"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e11378-c9-eyeglasses_vincent-chase-vc-e11378-c9-eyeglasses_g_1393.jpg"
              alt="Eyeglass 3"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg"
              alt="Eyeglass 4"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-ls-e15666-c6-eyeglasses_img_9630_29_dec23.jpg"
              alt="Eyeglass 5"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/brown-transparent-full-rim-rectangle-lenskart-air-essentials-la-e15844-c4-eyeglasses_g_0279_25_05_2023.jpg"
              alt="Eyeglass 6"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
        </div>
        <div className="absolute top-1/2 w-full flex justify-between -translate-y-1/2 items-center my-5">
          <button className="bg-transparent border-none text-[50px] cursor-pointer text-gray-300 hover:text-black max-sm:text-[30px] sm:max-md:text-[40px] md:max-lg:text-[45px]">
            ❮
          </button>
          <button className="bg-transparent border-none text-[50px] cursor-pointer text-gray-300 mr-5 hover:text-black max-sm:text-[30px] sm:max-md:text-[40px] md:max-lg:text-[45px]">
            ❯
          </button>
        </div>
      </div>

      {/* CONTACT LENSES 2 img */}
      <div>
        <img
          src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg"
          alt=""
        />
      </div>

      <div className="w-full max-w-6xl my-2.5 mx-auto overflow-hidden relative my-[2%]">
        <div className="flex justify-between items-center mb-5 px-5">
          <h2 className="text-2xl font-bold max-sm:text-lg sm:max-md:text-xl md:max-lg:text-[22px]">
            CONTACT LENSES
          </h2>
          <a
            href="/view-range"
            className="text-base text-[#00a9a5] no-underline max-sm:text-sm sm:max-md:text-[15px]"
          >
            View Range
          </a>
        </div>

        <div className="flex transition-transform duration-500 ease-in-out">
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-10h-dailies_csvfile-1706873774153-1_02_02_2024.jpg"
              alt="Eyeglass 1"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-contact-lens-30-lens-box-contact-lens_g_2766_1.jpg"
              alt="Eyeglass 2"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-24h-toric-dailies_aqualens-24-h-daily-disposable-toric-contact-lens--30-lens-box_csvfile-1681127655690-144128.png.png"
              alt="Eyeglass 3"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg"
              alt="Eyeglass 4"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-ls-e15666-c6-eyeglasses_img_9630_29_dec23.jpg"
              alt="Eyeglass 5"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/brown-transparent-full-rim-rectangle-lenskart-air-essentials-la-e15844-c4-eyeglasses_g_0279_25_05_2023.jpg"
              alt="Eyeglass 6"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
        </div>
        <div className="absolute top-1/2 w-full flex justify-between -translate-y-1/2 items-center my-5">
          <button className="bg-transparent border-none text-[50px] cursor-pointer text-gray-300 hover:text-black max-sm:text-[30px] sm:max-md:text-[40px] md:max-lg:text-[45px]">
            ❮
          </button>
          <button className="bg-transparent border-none text-[50px] cursor-pointer text-gray-300 mr-5 hover:text-black max-sm:text-[30px] sm:max-md:text-[40px] md:max-lg:text-[45px]">
            ❯
          </button>
        </div>
      </div>

      <div className="w-full max-w-6xl my-2.5 mx-auto overflow-hidden relative my-[2%]">
        <div className="flex justify-between items-center mb-5 px-5">
          <h2 className="text-2xl font-bold max-sm:text-lg sm:max-md:text-xl md:max-lg:text-[22px]">
            CONTACT LENSES
          </h2>
          <a
            href="/view-range"
            className="text-base text-[#00a9a5] no-underline max-sm:text-sm sm:max-md:text-[15px]"
          >
            View Range
          </a>
        </div>

        <div className="flex transition-transform duration-500 ease-in-out">
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-dusk-blue-premium-zero-power-monthly_dusk_blue_kiara_01_09_2023.jpg"
              alt="Eyeglass 1"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-gray-premium-zero-power-monthly_gray_kiara_01_09_2023.jpg"
              alt="Eyeglass 2"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-silver-gray-premium-zero-power-monthly_silver_grey_kiara_01_09_2023.jpg"
              alt="Eyeglass 3"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg"
              alt="Eyeglass 4"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-ls-e15666-c6-eyeglasses_img_9630_29_dec23.jpg"
              alt="Eyeglass 5"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
          <div className="min-w-[33.33%] box-border px-2.5 max-sm:min-w-full max-sm:px-1.5 sm:max-md:min-w-1/2 sm:max-md:px-2">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/brown-transparent-full-rim-rectangle-lenskart-air-essentials-la-e15844-c4-eyeglasses_g_0279_25_05_2023.jpg"
              alt="Eyeglass 6"
              className="w-4/5 h-auto mx-auto block max-sm:w-full sm:max-md:w-[90%]"
            />
          </div>
        </div>
        <div className="absolute top-1/2 w-full flex justify-between -translate-y-1/2 items-center my-5">
          <button className="bg-transparent border-none text-[50px] cursor-pointer text-gray-300 hover:text-black max-sm:text-[30px] sm:max-md:text-[40px] md:max-lg:text-[45px]">
            ❮
          </button>
          <button className="bg-transparent border-none text-[50px] cursor-pointer text-gray-300 mr-5 hover:text-black max-sm:text-[30px] sm:max-md:text-[40px] md:max-lg:text-[45px]">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

