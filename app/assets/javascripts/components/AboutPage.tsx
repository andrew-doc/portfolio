import React, { useEffect, useRef, useState } from "react"
import TextCarousel from "./TextCarousel"
//@ts-ignore
import reactImg from "../../images/react.svg";
//@ts-ignore
import solidImg from "../../images/solid.svg";
//@ts-ignore
import postgresImg from "../../images/postgresql.svg";
//@ts-ignore
import railsImg from "../../images/rails.svg";
//@ts-ignore
import tailwindImg from "../../images/tailwind.svg";
import ExperienceTopic from "./ExperienceTopic";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [experienceSelected, setExperienceSelected] = useState("React");
  const [experienceHover, setExperienceHover] = useState("");


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aboutPageCarouselText = [
    "SolidJS",
    "React",
    "Ruby",
    "Rails",
    "Tailwind",
    "Postgres",
  ]

  /* dark mode colour #212121 */

  return (
    <div className="justify-center items-center flex flex-col dark:text-white">
      <div className="flex text-[2.5rem] font-bold items-center justify-center w-full h-[65vh] relative bg-blue-100 shadow-inner shadow-gray-300">
        <div className="flex flex-col">
          <div>Hello!</div>
          <div>Andrew Docherty,</div>
          <div className="flex text-indigo-400 space-x-2">
            <TextCarousel words={aboutPageCarouselText} timeBetweenSlideInSeconds={5} carouselWidth={11} />
            <div className="text-black dark:text-white">Developer</div>
          </div>
        </div>
      </div>
      <div style={{ transform: `translateY(${scrollY * -1}px)`, }} className="flex space-y-32 bg-white flex-col items-center pt-20 w-full h-full">
        <div>
          <div className="text-[2rem] flex justify-center font-bold">About Me</div>
          <div className="p-4 mx-10 text-center w-[50vw]">
            I'm Andrew, and I’m a Web Developer with five years of experience building web apps with tools such as React, SolidJS, TypeScript, Ruby on Rails, TailwindCSS and PostgreSQL. I enjoy creating smooth, responsive interfaces and well-structured backends that make applications fast and easy to use. I like working with modern tools, keeping things clean and maintainable, and always learning better ways to build great software. Feel free to explore my work and see what I’ve been up to!
          </div>
        </div>
        <div>
          <div className="text-[2rem] flex justify-center font-bold">Experience</div>
          <div className="flex justify-evenly mt-10">

            <ExperienceTopic experienceHover={[experienceHover, setExperienceHover]} experienceSelected={[experienceSelected, setExperienceSelected]} image={reactImg} name="React" />
            <ExperienceTopic experienceHover={[experienceHover, setExperienceHover]} experienceSelected={[experienceSelected, setExperienceSelected]} image={solidImg} name="Solid" />
            <ExperienceTopic experienceHover={[experienceHover, setExperienceHover]} experienceSelected={[experienceSelected, setExperienceSelected]} image={postgresImg} name="Postgres" />
            <ExperienceTopic experienceHover={[experienceHover, setExperienceHover]} experienceSelected={[experienceSelected, setExperienceSelected]} image={railsImg} name="Rails" />
            <ExperienceTopic experienceHover={[experienceHover, setExperienceHover]} experienceSelected={[experienceSelected, setExperienceSelected]} image={tailwindImg} name="Tailwind" />

          </div>
          <div className="p-4 mx-10 text-center w-[50vw]">
          </div>
        </div>
        <div className="flex flex-col py-20">
          <div className="flex px-1 select-none bg-indigo-400 hover:bg-indigo-300 rounded-full mx-2 cursor-pointer text-white">
            <div className="flex items-center space-x-2 w-max py-3 px-4 rounded-full" onClick={() => window.location.href = "/projects"}>
              <div>View Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}