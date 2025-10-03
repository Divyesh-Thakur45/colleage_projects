import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Description = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const id = params?.id;

  const AddCard = (id) => {
    axios
      .post(`http://localhost:8080/addtocart/add`, product)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div>
      {/* Product Container */}
      <div className="p-2.5">
        {/* Breadcrumb */}
        <nav className="text-sm mb-5 max-[576px]:text-xs sm:text-[13px] md:text-sm">
          <a href="#" className="text-[#007bff] no-underline mr-1.5">
            Eyewear
          </a>{" "}
          /
          <a href="#" className="text-[#007bff] no-underline mr-1.5">
            Eyeglasses
          </a>{" "}
          /
          <a href="#" className="text-[#007bff] no-underline mr-1.5">
            Brands
          </a>{" "}
          /
          <a href="#" className="text-[#007bff] no-underline mr-1.5">
            Lenskart Blu
          </a>{" "}
          /<span className="text-[#333]">Blue Block Screen Glasses</span>
        </nav>

        {/* Product Content */}
        <div className="flex justify-between max-[576px]:flex-col sm:flex-row md:flex-row">
          {/* Product Images */}
          <div className="flex max-[576px]:flex-col sm:flex-col md:flex-row">
            {/* Image 1 */}
            <div className="border border-[#ccc] rounded-[10px] w-[489px] h-[489px] mx-5 my-0 py-[120px] px-2.5 overflow-hidden transition-transform duration-700 hover:scale-110 max-[576px]:w-full max-[576px]:h-auto max-[576px]:mx-0 max-[576px]:my-2.5 max-[576px]:p-2.5 sm:w-full sm:h-auto md:w-[48%] md:mx-[1%] md:my-0">
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt="Front view"
                className="transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Image 2 */}
            <div className="relative border border-[#ccc] rounded-[10px] w-[489px] mx-2.5 my-0 py-[120px] px-5 overflow-hidden transition-transform duration-700 max-[576px]:w-full max-[576px]:h-auto max-[576px]:mx-0 max-[576px]:my-2.5 max-[576px]:p-2.5 sm:w-full sm:h-auto md:w-[48%] md:mx-[1%] md:my-0">
              {/* 360 Degree Icon */}
              <img
                src="https://static.lenskart.com/media/desktop/img/view-360.svg"
                alt="Back view"
                className="absolute top-0 right-0 max-[576px]:w-[30px] max-[576px]:h-[30px]"
              />
              <img
                src={product.imageUrl2 || "/placeholder.svg"}
                alt="Side view"
                className="transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-[415px] flex flex-col justify-evenly p-1.5 mx-[30px] my-0 max-[576px]:w-full max-[576px]:mx-0 sm:w-full md:w-[48%] md:mx-[1%]">
            {/* Brand */}
            <p className="text-[#999]">{product.brand}</p>

            {/* Title */}
            <h1 className="text-2xl mb-2.5 max-[576px]:text-lg sm:text-xl md:text-[22px]">
              Matte Black Full Rim Square Lenskart Blu LB E13526-C1
            </h1>

            {/* Size */}
            <p className="text-base mb-2.5 text-[#999] max-[576px]:text-sm sm:text-[15px] md:text-base">
              {product.sizeCollection}
            </p>

            {/* Price */}
            <p className="text-2xl font-bold mb-2.5 max-[576px]:text-xl sm:text-[22px] md:text-2xl">
              ₹{product.price}{" "}
              <span className="text-sm font-extralight">
                (₹{product.price} with GST)
              </span>
            </p>

            {/* Color Options */}
            <div className="flex gap-2.5 mb-2.5">
              <span
                className="w-5 h-5 rounded-full cursor-pointer border border-[#ccc] max-[576px]:w-[15px] max-[576px]:h-[15px] sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                style={{ backgroundColor: "#000" }}
              ></span>
              <span
                className="w-5 h-5 rounded-full cursor-pointer border border-[#ccc] max-[576px]:w-[15px] max-[576px]:h-[15px] sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                style={{ backgroundColor: "#ccc" }}
              ></span>
              <span
                className="w-5 h-5 rounded-full cursor-pointer border border-[#ccc] max-[576px]:w-[15px] max-[576px]:h-[15px] sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                style={{ backgroundColor: "#aaa" }}
              ></span>
              <span
                className="w-5 h-5 rounded-full cursor-pointer border border-[#ccc] max-[576px]:w-[15px] max-[576px]:h-[15px] sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                style={{ backgroundColor: "#333" }}
              ></span>
            </div>

            {/* Offer */}
            <p className="text-start text-base mb-2.5 max-[576px]:text-sm sm:text-[15px] md:text-base">
              with Pre-fitted BLU Screen Glasses <br />
              Get it for ₹700. Coupon: EYECON
            </p>

            {/* Buy Now Button */}
            <button
              className="bg-[#00bfa5] text-white border-none py-2.5 px-5 text-base cursor-pointer rounded-[5px] hover:bg-[#009688] max-[576px]:text-sm max-[576px]:py-2 max-[576px]:px-4 sm:text-[15px] sm:py-[9px] sm:px-[18px] md:text-base md:py-2.5 md:px-5"
              onClick={() => AddCard(id)}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
