"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const SignIn = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [dialog, setDialog] = useState(true);

  const HandleSubmite = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const response = await axios.post(
      "http://localhost:8080/auth/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    console.log(response);
  };

  const handleDialogClose = () => {
    setDialog(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div>
      <div
        className={`fixed inset-0 z-[999] items-center justify-center bg-black bg-opacity-90`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] bg-white rounded-xl shadow-2xl overflow-auto w-full max-w-md">
          <button
            className="absolute top-2.5 right-2.5 bg-transparent border-none text-2xl cursor-pointer text-gray-600 hover:text-gray-800"
            onClick={handleDialogClose}
          >
            &times;
          </button>

          <div className="w-full">
            <img
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
              alt="Sign In"
              className="w-full rounded-t-[10px]"
            />
          </div>

          <form
            className="p-4 sm:p-5 text-center"
            onSubmit={(e) => HandleSubmite(e)}
          >
            <h2 className="mb-4 sm:mb-5 text-xl sm:text-2xl font-semibold">
              Sign In
            </h2>

            <div className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Email"
                className="w-full p-2.5 border border-gray-300 rounded-[5px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2.5 border border-gray-300 rounded-[5px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-center mb-4 sm:mb-5 mt-4 sm:mt-5">
              <input type="checkbox" id="whatsapp-updates" className="mr-2.5" />
              <label htmlFor="whatsapp-updates" className="mr-1.5 text-sm">
                Get updates on WhatsApp
              </label>
              <span className="text-[#25d366] text-lg sm:text-xl">📱</span>
            </div>

            <button className="w-full p-2.5 bg-gray-300 hover:bg-gray-400 border-none rounded-[5px] text-base cursor-pointer transition-colors duration-200">
              Sign In
            </button>

            <p className="mt-4 sm:mt-5 text-sm">
              New member?{" "}
              <a href="" className="text-blue-600 no-underline hover:underline">
                Create an Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
