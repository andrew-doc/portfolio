import React, { useState } from "react";
import NavBar from "./NavBar";
import AboutPage from "./AboutPage";


export default function Index() {
  const [selected, setSelected] = useState<"about" | "skills" | "get-in-contact">("about");

  return (
    <>
      <NavBar selected={selected} setSelected={setSelected} />
      {selected == "about" && (
        <AboutPage />
      )}
    </>
  )
}