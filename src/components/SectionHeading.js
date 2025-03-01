import React from "react";

const SectionHeading = ({title="Section Heading" , description="Description"}) => {
  return (
    <div class="flex flex-col items-center justify-center">
            <h1 class="text-2xl font-bold">{title}</h1>
            <p class="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default SectionHeading;
