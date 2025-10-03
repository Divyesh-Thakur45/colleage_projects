export const Footer = () => {
  return (
    <div>
      <div className="bg-yellow-200 py-4 px-4 text-center sm:py-5 sm:px-5 md:py-6 md:px-6 lg:py-5 lg:px-5">
        <p className="text-2xl mb-4 text-gray-800 font-medium sm:text-2xl sm:mb-4 md:text-3xl md:mb-5 lg:text-3xl lg:mb-5">
          MEET OUR HAPPY CUSTOMERS
        </p>
        <div className="flex justify-center gap-5 flex-wrap px-5 sm:px-8 md:px-10 lg:px-12">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HYPqf_eVvvM"
            title="Customer Reviews"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="max-w-full flex-1 min-w-[300px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px]"
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SQm3RxXRunw"
            title="Lenskart Customer Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="max-w-full flex-1 min-w-[300px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px]"
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IZpUQ-S_LcM"
            title="Lenskart - The Customer Diaries"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="max-w-full flex-1 min-w-[300px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px]"
          ></iframe>
        </div>
      </div>

      <div className="bg-slate-900 text-white py-5 px-8 text-center sm:py-8 sm:px-10 md:py-9 md:px-12 lg:py-10 lg:px-15">
        <div className="text-left max-w-4xl pb-8">
          <h2 className="text-2xl mb-5 font-bold sm:text-2xl md:text-3xl lg:text-3xl">
            Buy The Best Eyewear From Lenskart
          </h2>
          <p className="mb-5 leading-relaxed">
            Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It
            Has Revolutionised The Eyewear Industry In The Country With Its
            Omni-Channel Approach. From An Ever-Growing Number Of Offline Stores
            Across Major Cities In The Country To Innovative Integration Of
            Technology While Purchasing Online, Lenskart Caters To Every
            Customer With Several Deals And Offers.
          </p>
          <p className="mb-5 leading-relaxed">
            A One-Stop Online Solution For Purchasing Eyewear And Its
            Accessories, Lenskart Delivers Them Right At Your Doorstep With
            Convenient Methods Of Payment.{" "}
            <a href="#" className="text-sky-400 no-underline">
              Sunglasses
            </a>{" "}
            as well as{" "}
            <a href="#" className="text-sky-400 no-underline">
              Eyeglasses
            </a>{" "}
            Are Available For Men And Women In A Diverse Array Of Styles And
            Trendy Colours. If You Want To Try Out{" "}
            <a href="#" className="text-sky-400 no-underline">
              Contact Lenses
            </a>
            , Pick The Ones Of Your Choice From The Extensive Variety Of
            Coloured Contact Lenses From Our Online Store.
          </p>
        </div>
        <div className="flex justify-between flex-wrap mb-5">
          <div className="my-1 flex-1 min-w-full text-left sm:min-w-[45%] sm:my-2 md:min-w-[40%] lg:min-w-[200px] lg:my-2">
            <h3 className="text-lg mb-2">Services</h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#" className="text-white no-underline">
                  Store Locator
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline">
                  Buying Guide
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline">
                  Frame Size
                </a>
              </li>
            </ul>
          </div>
          <div className="my-1 flex-1 min-w-full text-left sm:min-w-[45%] sm:my-2 md:min-w-[40%] lg:min-w-[200px] lg:my-2">
            <h3 className="text-lg mb-2">About Us</h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#" className="text-white no-underline">
                  We Are Hiring
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline">
                  Refer And Earn
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline">
                  Lenskart Coupons
                </a>
              </li>
            </ul>
          </div>
          <div className="my-1 flex-1 min-w-full text-left sm:min-w-[45%] sm:my-2 md:min-w-[40%] lg:min-w-[200px] lg:my-2">
            <h3 className="text-lg mb-2">Help</h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#" className="text-white no-underline">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>
          <div className="my-1 flex-1 min-w-full text-left sm:min-w-[45%] sm:my-2 md:min-w-[40%] lg:min-w-[200px] lg:my-2">
            <a href="#" className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play Store"
                className="max-w-[100px] my-2 mx-2 sm:max-w-[120px] sm:my-2 sm:mx-2 md:max-w-[130px] lg:max-w-[140px] lg:my-0 lg:mx-2"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="max-w-[100px] my-2 mx-2 sm:max-w-[120px] sm:my-2 sm:mx-2 md:max-w-[130px] lg:max-w-[140px] lg:my-0 lg:mx-2"
              />
            </a>
            <p className="mt-2">
              Download Lenskart App to buy Eyeglasses, Sunglasses and Contact
              Lenses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
