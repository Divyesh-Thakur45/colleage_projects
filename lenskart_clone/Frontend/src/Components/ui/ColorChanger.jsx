"use client";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";

const ColorChanger = ({ obj }) => {
  const [CurrentColor, setCurrentColor] = useState(obj.Colors[0]);
  console.log(CurrentColor);

  const ImageChange = (el) => {
    setCurrentColor(el);
  };

  return (
    <div>
      <div
        className="border border-[#e0e0e0] rounded-[10px] my-[15px] mx-[10px] w-[374px] bg-white"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <div className="relative h-[34vh] pt-[26px] group">
          <CiHeart className="text-[30px] absolute right-[5%] top-[5%]" />

          <div className="overflow-hidden h-[170px] w-[300px] flex items-center m-auto p-[10px] block group-hover:hidden">
            <img
              src={CurrentColor.imageUrl || "/placeholder.svg"}
              alt={obj.brand}
            />
          </div>

          <div className="overflow-hidden h-[170px] w-[300px] flex items-center m-auto p-[10px] hidden group-hover:block">
            <img
              src={obj.imageUrlAfter || "/placeholder.svg"}
              alt={obj.brand}
            />
          </div>
        </div>

        <div className="pl-[12px] pr-[15px] py-0">
          <div className="flex items-center mb-[10px]">
            <span className="text-[#4caf50] font-bold mr-[5px]">
              {obj.rating}
            </span>
            <span className="text-[#757575]">{obj.reviews}</span>
          </div>

          <h2 className="text-[14px] m-0 mb-[5px]">{obj.brand}</h2>

          <div className="flex justify-between">
            <div>
              <p className="text-[#757575] m-0 mb-[10px] text-[12px]">
                {obj.sizeCollection}
              </p>
              <p className="text-[14px] font-bold m-0 mb-[10px]">
                ₹{obj.price}
              </p>
            </div>

            <div>
              <div className="flex items-center mb-[10px]">
                {obj.Colors.map((el, index) => (
                  <span
                    key={index}
                    className="inline-block w-5 h-5 rounded-full mr-[5px] cursor-pointer border border-dotted border-red-500"
                    style={{ backgroundColor: el.color }}
                    onClick={() => ImageChange(el)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorChanger;
