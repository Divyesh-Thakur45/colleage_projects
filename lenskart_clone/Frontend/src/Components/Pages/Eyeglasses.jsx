import { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SearchContext } from "../Context/UseContext";
import { LeftSideBar } from "../ui/LeftSideBar";

export const Eyeglasses = () => {
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(0);
  const [open, setopen] = useState(true);

  const { productFilter, brand, price, gender, searchData } =
    useContext(SearchContext);

  const [GogglesData, setGogglesData] = useState([]);
  const fetchGogglesData = () => {
    axios
      .get("https://all-json-server-osax.onrender.com/products", {
        params: {
          _page: page,
          _limit: 6,
          frame: productFilter,
          brand: brand,
          gender: gender,
          _sort: "price",
          _order: price,
          q: searchData ? searchData : null,
        },
      })
      .then(
        (res) => (
          setPageLimit(res.headers["x-total-count"]), setGogglesData(res.data)
        )
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchGogglesData();
  }, [productFilter, brand, price, gender, page, searchData]);

  return (
    <div>
      <img
        src="https://static5.lenskart.com/media/uploads/plp-free-lenses-desk.png"
        alt=""
      />
      <div className="block sm:hidden">
        {open ? (
          <AiOutlineAlignLeft onClick={() => setopen(false)} />
        ) : (
          <AiOutlineCloseCircle onClick={() => setopen(true)} />
        )}
      </div>
      <div className="w-full flex relative">
        <>
          <LeftSideBar />
        </>
        <div className="w-4/5 grid grid-cols-3 mx-auto max-[576px]:w-[90%] max-[576px]:grid-cols-1 sm:max-md:w-full sm:max-md:grid-cols-2 md:max-lg:w-[95%] md:max-lg:grid-cols-2">
          {GogglesData.map((el, idx) => {
            return (
              <div
                key={idx}
                className="border border-[#e0e0e0] rounded-[10px] my-[15px] mx-2.5 bg-white max-[576px]:my-0 max-[576px]:mx-0 sm:max-md:my-2.5 sm:max-md:mx-1.5 md:max-lg:my-2.5 md:max-lg:mx-1.5"
              >
                <div>
                  <div className="relative h-[34vh] pt-[26px] max-[576px]:h-auto max-[576px]:pt-0 sm:max-md:h-[30vh] md:max-lg:h-[28vh] group">
                    <CiHeart className="text-[30px] absolute right-[5%] top-[5%] max-[576px]:text-2xl max-[576px]:right-2.5 max-[576px]:top-2.5 max-[576px]:hidden sm:max-md:text-[26px] md:max-lg:text-[28px]" />
                    <Link to={`/description/${el.id}`}>
                      <img
                        src={el.imageUrl || "/placeholder.svg"}
                        alt="Lenskart Air"
                        className="w-[372px] p-2.5 group-hover:hidden"
                      />
                      <img
                        src={el.imageUrl2 || "/placeholder.svg"}
                        alt="Lenskart Air"
                        className="w-[372px] p-2.5 hidden group-hover:block group-hover:cursor-pointer transition-all duration-500"
                      />
                    </Link>
                  </div>
                  <div className="py-[15px] px-[15px] pb-0 pl-3 max-[576px]:p-0">
                    <div className="flex items-center mb-2.5">
                      <span className="text-[#4caf50] font-bold mr-1.5">
                        {el.rating}
                      </span>
                      <span className="text-[#757575]">{el.reviews}</span>
                    </div>
                    <h2 className="text-sm m-0 mb-1.5 max-[576px]:text-xs">
                      {el.brand}
                    </h2>
                    <div className="flex justify-between max-[576px]:flex-col">
                      <div>
                        <p className="text-[#757575] m-0 mb-2.5 text-xs max-[576px]:text-xs">
                          {el.sizeCollection}
                        </p>
                        <p className="text-sm font-bold m-0 mb-2.5 max-[576px]:text-xs">
                          ₹{el.price}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center mb-2.5">
                          <span className="w-5 h-5 rounded-full mr-1.5  outline-[1.5px] outline-dotted outline-red-500 bg-black max-[576px]:w-[15px] max-[576px]:h-[15px] sm:max-md:w-[18px] sm:max-md:h-[18px]"></span>
                          <span className="w-5 h-5 rounded-full mr-1.5  outline-[1.5px] outline-dotted outline-red-500 bg-[#3b5998] max-[576px]:w-[15px] max-[576px]:h-[15px] sm:max-md:w-[18px] sm:max-md:h-[18px]"></span>
                          <span className="w-5 h-5 rounded-full mr-1.5  outline-[1.5px] outline-dotted outline-red-500 bg-[#9e9e9e] max-[576px]:w-[15px] max-[576px]:h-[15px] sm:max-md:w-[18px] sm:max-md:h-[18px]"></span>
                          <span className="w-5 h-5 rounded-full mr-1.5 flex items-center justify-center bg-[#f5f5f5] text-[#757575] text-sm max-[576px]:w-[15px] max-[576px]:h-[15px] sm:max-md:w-[18px] sm:max-md:h-[18px]">
                            {el.discount}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="bg-[#fff8e1] p-1.5 rounded-[5px] text-center text-[#757575] text-xs max-[576px]:text-[4px] max-[576px]:p-0 sm:max-md:text-[11px] sm:max-md:p-1 md:max-lg:text-xs md:max-lg:p-1.5">
                      Get FREE BLU Screen Lenses
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center my-5 mx-0">
          <button
            disabled={page === 1}
            onClick={() => page > 1 && setPage(page - 1)}
            className="py-2.5 px-5 my-0 mx-2.5 bg-[#007bff] text-white border-none rounded-[5px] cursor-pointer text-base hover:bg-[#0056b3]"
          >
            Previous
          </button>
          <span className="text-lg my-0 mx-5">Page {page}</span>
          <button
            disabled={page === pageLimit / 6}
            onClick={() => setPage(page + 1)}
            className="py-2.5 px-5 my-0 mx-2.5 bg-[#007bff] text-white border-none rounded-[5px] cursor-pointer text-base hover:bg-[#0056b3]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
