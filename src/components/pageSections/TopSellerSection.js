import React from "react";
import PriceCard from "../PriceCard";

const TopSellerSection = () => {
  const Card = [
    {
      image: "/Assets/Topseller-Card1.jfif",
      title: "Gray Polo Shirt",
      price: "$29.00",
    },
    {
      image: "/Assets/Topseller-Card2.jfif",
      title: "Red Shirt",
      price: "$69.00",
    },
    {
      image: "/Assets/Topseller-Card3.jfif",
      title: "Polo White Shirt",
      price: "$49.00",
    },
    {
      image: "/Assets/Topseller-Card4.jfif",
      title: "Pink Casual Shirt",
      price: "$40.00",
    },
   
  ];
  return (
    <div className="flex flex-wrap justify-center m-0">
      {Card.map((item, index) => (
        <PriceCard
          key={index}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default TopSellerSection;
