import React from "react";

const PriceCard = ({
  title = "Heading of Card",
  price = "Price of Card",
  image = "/Assets/Topseller-Card3.jfif",
}) => {
  return (
    <div className="flex justify-center items-center my-2">
      <div className=" mx-auto">
        <div className="relative flex-col rounded-xl">
          <div className="relative mx-3 mt-4 overflow-hidden">
            <img
              src={image}
              alt="Product Image"
              className="w-[280px] h-[315px]"
            />
          </div>
          <div className="p-6 text-center">
            <h5 className="text-xl font-semibold">{title}</h5>
            <p
              className="text-base mt-3 font-normal text-[#024E82;]"
            >
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
