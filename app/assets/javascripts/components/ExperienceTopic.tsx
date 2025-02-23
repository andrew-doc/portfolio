import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

type State<S> = [S, Dispatch<SetStateAction<S>>]

export default function ExperienceTopic(props: { experienceSelected: State<string>, experienceHover: State<string>, image: string, name: string }) {
  const [experienceSelected, setExperienceSelected] = props.experienceSelected;
  const [experienceHover, setExperienceHover] = props.experienceHover;

  return (
    <div className="flex flex-col items-center space-y-1">
      <div style={{transition: "opacity 400ms ease"}} className={`text-sm opacity-${experienceSelected == props.name || experienceHover == props.name ? "100" : "0"} text-indigo-400`}>{props.name}</div>
      <img onClick={() => setExperienceSelected(props.name)} onMouseEnter={() => setExperienceHover(props.name)} onMouseLeave={() => setExperienceHover("")} src={props.image} className="cursor-pointer h-10 w-10" />
      <div id="option-highlight" className={`my-1 ${experienceSelected == props.name || experienceHover == props.name ? "w-full" : "w-0"} bg-indigo-400 py-[1px] rounded-full`} />
    </div>
  );
}