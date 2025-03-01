import React from 'react';

const PriceCard = ({ 
  title = 'Heading of Card', 
  price = 'Price of Card', 
  image = '/Assets/Topseller-Card3.jfif'
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[720px] mx-auto">
        <div className="relative flex-col rounded-xl">
          <div className="relative mx-4 mt-4 overflow-hidden">
            <img src={image} alt="Product Image" className="w-[295px] h-[342px]" />
          </div>
          <div className="p-6 text-center">
            <h5 className="text-xl font-medium">{title}</h5>
            <p className="text-base font-normal">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
