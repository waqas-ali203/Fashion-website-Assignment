import React from 'react'

const TestimonialCard = ({title="'Amazing service! The customer support was very helpful.'" , CustomerName="Waqas ali"}) => {
  return (
    <section className="py-12 bg-gray-100">
    <div className="max-w-4xl mx-auto">
      <div className="p-6 gap-8 flex flex-row items-center">
        <img
          src="/Assets/Testimonial-1.jfif"
          alt="User"
          className="w-[230px] h-[230px] rounded-full object-cover"
        />
        <div>
        <p className='text-7xl'>“</p>
        <p className="text-gray-700 italic font-bold">
          {title}
        </p>
        <p className="mt-4 justify-start font-semibold">{CustomerName}</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TestimonialCard
