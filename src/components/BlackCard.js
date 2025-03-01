import React from 'react';
import Button from "@/components/Button";

const BlackCard = ({ title = "Card Heading", description = "Card detail" }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-black text-white w-[600px] h-[330px] p-6">
      <h1 className="text-2xl font-thin  mb-3">{title}</h1>
      <p className="text-sm my-6 max-w-[60%] line-clamp-2">{description}</p>
      <Button title="BUY NOW" className="mt-4 px-8 py-3 bg-white text-white border-white" />
    </div>
  );
};

export default BlackCard;
