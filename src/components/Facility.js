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
    <div className="flex flex-row p-5 gap-10">
      <span className="mt-2">{Icon}</span>
      {/* <img src={Icon} className="w- h-10"/> */}
      <div className="flex flex-col mt-2">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default Facility;
