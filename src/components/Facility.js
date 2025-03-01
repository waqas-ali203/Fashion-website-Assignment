import React from "react";

const Facility = ({
  title = "Heading of facility",
  Description = "decroption",
  Icon = (<svg
        class="w-10 h-10 text-blue-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
        />
      </svg>),
}) => {
  return (
    <div className="flex flex-row items-start p-3 gap-5 w-[22%] min-w-[250px]">
    <span className="mt-2">{Icon}</span>
    <div className="flex flex-col mt-2 max-w-xs">
      <h3 className="font-semibold text-black">{title}</h3>
      <p className="text-wrap mt-5 line-clamp-2">{Description}</p>
    </div>
    </div>
  );
};

export default Facility;
