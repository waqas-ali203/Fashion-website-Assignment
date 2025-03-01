import React from "react";

const Navbar = () => {
  return (
    <div>
      <div class="bg-white">
        <div class="pt-2 px-6">
          <div class="flex justify-between">
            <div>
              <p class="font-semibold text-black">NorthStar</p>
            </div>

            <div>
              <div class="flex cursor-pointer items-center gap-x-2 rounded-md  py-2 px-4 text-black">
                <a
                  href="/"
                  class="flex-no-grow flex-no-shrink relative rounded-lg py-2 px-4 leading-normal no-underline flex items-center hover:bg-gray-300"
                >
                  Home
                </a>
                <a
                  href="/about"
                  class="flex-no-grow flex-no-shrink relative py-2 rounded-lg px-4 leading-normal no-underline flex items-center hover:bg-gray-300"
                >
                  About
                </a>
                <a
                  href="/contact"
                  class="flex-no-grow flex-no-shrink relative rounded-lg py-2 px-4 leading-normal no-underline flex items-center font-bold hover:bg-gray-300"
                >
                  Contact us
                </a>
              </div>
            </div>

            <div class="ml-2 flex">
              <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-300">
                <svg
                  className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>

              <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-300">
                <svg
                  className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </div>

              <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-300">
                <div class="relative">
                  <svg
                    className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                    />
                  </svg>

                  <span class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-900 p-2 text-xs text-white">
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
