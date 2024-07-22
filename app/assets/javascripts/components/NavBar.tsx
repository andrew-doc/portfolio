import React, { useState } from "react"
import FeatherIcon from 'feather-icons-react';

interface NavBarOptionProps {
  optionText: string,
  name: "about" | "skills" | "get-in-contact",
  selected: string,
  setSelected: React.Dispatch<React.SetStateAction<"about" | "skills" | "get-in-contact">>
}

function NavBarOption(props: NavBarOptionProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className="cursor-pointer relative flex items-center h-9" onClick={() => props.setSelected(props.name)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="">{props.optionText}</div>
      <div id="option-highlight" className={`absolute ${(hover || props.selected == props.name) ? "w-full" : "w-0"} bottom-0 bg-indigo-400 py-[1px] rounded-full`} />
    </div>
  )
}

export default function NavBar(props: { selected: "about" | "skills" | "get-in-contact", setSelected:  React.Dispatch<React.SetStateAction<"about" | "skills" | "get-in-contact">> }) {

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div>
      <div id="topnav" className="relative bg-white text-black dark:bg-black dark:text-white shadow dark:shadow-white items-center flex justify-between py-2">
        <div onClick={() => toggleDarkMode()} className="absolute left-0 top-1 cursor-pointer p-1 pl-2">
          <FeatherIcon icon="moon" fill="black" />
        </div>
        <div className="flex justify-evenly text-interact-light w-full">
          <NavBarOption optionText="About" name="about" selected={props.selected} setSelected={props.setSelected} />
          <NavBarOption optionText="Skills" name="skills" selected={props.selected} setSelected={props.setSelected} />
          <NavBarOption optionText="Get In Contact" name="get-in-contact" selected={props.selected} setSelected={props.setSelected} />
        </div>
        <div className="flex px-1 select-none bg-indigo-400 hover:bg-indigo-300 rounded-full mx-2 cursor-pointer text-white">
          <div className="flex items-center space-x-2 w-max py-3 px-4 rounded-full">
            <FeatherIcon icon="download" size={15} />
            <div>Download CV</div>
          </div>
        </div>
      </div>
    </div>
  )

}