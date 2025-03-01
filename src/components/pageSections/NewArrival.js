import React from "react";
import PriceCard from "../PriceCard";
const NewArrival = () => {
  const Card = [
    {
      image: "/Assets/NewProduct-Card1.jfif",
      title: "Plain White Shirt",
      price: "$29.00",
    },
    {
      image: "/Assets/NewProduct-Card2.jfif",
      title: "Denim Jacket",
      price: "$69.00",
    },
    {
      image: "/Assets/NewProduct-Card3.jfif",
      title: "Black Polo Shirt",
      price: "$49.00",
    },
    {
      image: "/Assets/NewProduct-Card4.jfif",
      title: "Blue Sweatshirt",
      price: "$40.00",
    },
    {
      image: "/Assets/NewProduct-Card5.jfif",
      title: "Blue Plain Shirt",
      price: "$35.00",
    },
    {
      image: "/Assets/NewProduct-Card6.jfif",
      title: "Dark Blue Shirt",
      price: "$45.00",
    },
    {
      image: "/Assets/NewProduct-Card7.jfif",
      title: "Outcast T Shirts",
      price: "$60.00",
    },
    {
      image: "/Assets/NewProduct-Card8.jfif",
      title: "Polo Plain Shirt",
      price: "$15.00",
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

export default NewArrival;
