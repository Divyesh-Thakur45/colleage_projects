import { useContext } from "react";
import { SearchContext } from "../Context/UseContext";

export const LeftSideBar = () => {
  const { setProductFilter, setBrand, setPrice, setGender } =
    useContext(SearchContext);

  return (
    <>
      {/* ${
          open
            ? "-translate-x-[400px] sm:translate-x-0"
            : "translate-x-0 sm:-translate-x-[400px]"
        } */}
      <div
        className={`bg-white w-80 block absolute sm:relative z-[99] transform duration-500 max-sm:w-[90%]`}
      >
        <div className="w-full p-5 border border-[#ccc] sm:p-5 max-[576px]:p-2.5">
          <div className="mb-5">
            <h3 className="mb-2.5 text-base font-bold">AGE GROUP</h3>
            <label className="block mb-2.5 text-sm">
              <input
                type="checkbox"
                onClick={() => setProductFilter("Aviator")}
              />
              2-5 yrs(21)
            </label>
            <label className="block mb-2.5 text-sm">
              <input
                type="checkbox"
                onClick={() => setProductFilter("HalfRim")}
              />
              5-8 yrs(40)
            </label>
            <label className="block mb-2.5 text-sm">
              <input
                type="checkbox"
                onClick={() => setProductFilter("FullRim")}
              />
              8-12 yrs(53)
            </label>
          </div>

          <div className="mb-5">
            <h3 className="mb-2.5 text-base font-bold">FRAME TYPE</h3>
            <div className="flex flex-wrap">
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("FullRim")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
                  alt=""
                />
                <p>Full Rim</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("RimLess")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
                  alt=""
                />
                <p>Rimless</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("HalfRim")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
                  alt=""
                />
                <p>Half Rim</p>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="mb-2.5 text-base font-bold">FRAME SHAPE</h3>
            <div className="flex flex-wrap">
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("Rectangle")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"
                  alt=""
                />
                <p>Rectangle</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("Square")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png"
                  alt=""
                />
                <p>Square</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("Round")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png"
                  alt=""
                />
                <p>Round</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("CatEye")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png"
                  alt=""
                />
                <p>Cat Eye</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("Geometric")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"
                  alt=""
                />
                <p>Geometric</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("Aviator")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png"
                  alt=""
                />
                <p>Aviator</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("Wayfarer")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png"
                  alt=""
                />
                <p>Wayfarer</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("Hexagonal")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png"
                  alt=""
                />
                <p>Hexagonal</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("Oval")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Oval.png"
                  alt=""
                />
                <p>Oval</p>
              </div>
              <div
                className="w-[70px] h-[70px] m-1.5 border border-[#ccc] flex items-center justify-center text-sm text-center flex-col cursor-pointer hover:border-black max-[576px]:w-[60px] max-[576px]:h-[60px] max-[576px]:m-[3px] sm:max-md:w-[65px] sm:max-md:h-[65px] sm:max-md:m-1"
                onClick={() => setProductFilter("Clubmaster")}
              >
                <img
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png"
                  alt=""
                />
                <p>Clubmaster</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-52 sm:max-md:w-full max-[576px]:w-full">
            {/* Brand */}
            <select
              className="mb-2.5 border border-[#ccc] py-2 pr-[38px] pl-5 max-[576px]:py-1.5 max-[576px]:px-5 sm:max-md:py-[7px] sm:max-md:px-[30px]"
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="" disabled>
                BRAND
              </option>
              <option value="John Jacobs">John Jacobs (841)</option>
              <option value="Lenskart Air">Lenskart Air (516)</option>
              <option value="Vincent Chase">Vincent Chase (501)</option>
            </select>

            {/* Price */}
            <select
              className="mb-2.5 border border-[#ccc] py-2 pr-[38px] pl-5 max-[576px]:py-1.5 max-[576px]:px-5 sm:max-md:py-[7px] sm:max-md:px-[30px]"
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="" disabled>
                PRICE
              </option>
              <option value="asc">Low To High</option>
              <option value="desc">High To Low</option>
            </select>

            {/* Gender */}
            <select
              className="mb-2.5 border border-[#ccc] py-2 pr-[38px] pl-5 max-[576px]:py-1.5 max-[576px]:px-5 sm:max-md:py-[7px] sm:max-md:px-[30px]"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                GENDER
              </option>
              <option value="Kids">Kids</option>
              <option value="Mans">Mans</option>
              <option value="Females">Females</option>
            </select>
          </div>
          <div>
            <button
              className="text-white px-5 py-2 text-md font-medium rounded-xl bg-blue-500"
              onClick={() => {
                setProductFilter(null);
                setBrand(null);
                setPrice(null);
                setGender(null);
              }}
            >
              Reset filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
