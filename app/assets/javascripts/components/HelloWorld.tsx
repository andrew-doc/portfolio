import React, { useState } from "react";


export default function HelloWorld() {
  const [test, setTest] = useState(-1);

  return (
    <div onClick={() => setTest(t => t + 1)} className="text-lg p-1 w-[20rem]">
      {test} 
    </div>
  )
}