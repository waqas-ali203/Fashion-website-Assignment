import React from 'react';
import Button from "@/components/Button";

const BlackCard = ({ title = "Card Heading", description = "Card detail" }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-12 bg-black text-white w-[350px] h-[250px]">
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-sm my-4">{description}</p>
      <Button title="BUY NOW" />
    </div>
  );
};

export default BlackCard;
