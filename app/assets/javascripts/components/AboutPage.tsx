import React from "react"
import TextCarousel from "./TextCarousel"
//@ts-ignore
import crystalImg from "../../images/crystal.svg";
//@ts-ignore
import reactImg from "../../images/react.svg";

export default function AboutPage() {

  const aboutPageCarouselText = {
    "React": reactImg,
    "Rails": "",
    "SolidJS": "",
    "Crystal": crystalImg,
    "Amber": "",
    "Tailwind": "",
    "Node": "",
    "Postgres": "",
  }


  return (
    <div className="justify-center items-center pt-1 flex dark:text-white">
      <div className="flex flex-col text-[2rem] font-bold">
        <div>Hello!</div>
        <div>Andrew Docherty,</div>
        <div className="flex text-indigo-400 space-x-2">
          <TextCarousel words={aboutPageCarouselText} timeBetweenSlideInSeconds={5} carouselWidth={8.9} />
          <div className="text-black dark:text-white">Developer</div>
        </div>
      </div>
    </div>
  )
}