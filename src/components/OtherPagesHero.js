import React from 'react'

const OtherPagesHero = ({title="About Northstar"}) => {
  return (
    <div className="bg-[url('/Assets/About-hero-background.jfif')] bg-cover bg-center h-[348px] flex items-end pb-8">
      <div className="flex flex-col justify-end items-start pl-10">
        <h1 className="text-white font-thin text-5xl leading-relaxed">{title}
        </h1>
      </div>
    </div>
  )
}

export default OtherPagesHero
