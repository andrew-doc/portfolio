import React, { useEffect, useMemo, useRef, useState } from "react"

export default function TextCarousel(props: { words: string[], timeBetweenSlideInSeconds: number, carouselWidth: number, arrows?: boolean }) {
  const [slideIndex, setSlideIndex] = useState(0); // de-increments into negatives because translateX needs to be negative to scroll to the right
  const [justWords, setJustWords] = useState(() => props.words);
  const leftArrow = useRef<HTMLDivElement>(null);
  const rightArrow = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const turnNumberNegative = (num: number): number => {
    return num - (num * 2);
  }

  useEffect(() => {
    // Note: "+ 1" is just "- 1" for negative indexing
    const minSize = turnNumberNegative(justWords.length) + 1;

    const sliderInterval = setInterval(() => {

      if (slideIndex == turnNumberNegative(justWords.length) + 1) {
        carouselRef.current!.style.transition = "none";
        const justWordsWithoutOneOnEnd = justWords.filter(w => w != justWords[justWords.length - 1]); // .pop() without mutation
        setJustWords(w => [w[w.length - 1], ...justWordsWithoutOneOnEnd]);
        setTimeout(() => {
          carouselRef.current!.style.transition = "";
        }, 400);
      }
      
      setSlideIndex(i => i <= minSize ? 0 : i - 1);
    }, props.timeBetweenSlideInSeconds * 1000);

    return () => {
      clearInterval(sliderInterval);
    }
  }, [slideIndex]);

  function prevSlide() {
    if (slideIndex > turnNumberNegative(justWords.length) + 1) setSlideIndex(i => i - 1);
  }

  function nextSlide() {
    if (slideIndex < 0) setSlideIndex(i => i + 1);
  }

  function revealArrows() {
    leftArrow.current?.classList.remove("opacity-0");
    leftArrow.current?.classList.add("opacity-50");
    rightArrow.current?.classList.remove("opacity-0");
    rightArrow.current?.classList.add("opacity-50");
  }

  function hideArrows() {
    leftArrow.current?.classList.remove("opacity-50");
    leftArrow.current?.classList.add("opacity-0");
    rightArrow.current?.classList.remove("opacity-50");
    rightArrow.current?.classList.add("opacity-0");
  }


  return (
    <div className="flex border-b-4 border-indigo-400">
      {props.arrows && (<div ref={leftArrow} onClick={() => nextSlide()} className="text-carousel-arrows opacity-0 hover:opacity-50 cursor-pointer select-none text-sm px-2 rounded bg-indigo-400 hover:bg-indigo-300 text-white mx-2">&lt;</div>)}
      <div onMouseEnter={revealArrows} onMouseLeave={hideArrows} style={{ width: `${props.carouselWidth}rem` }} className="overflow-hidden relative flex text-nowrap select-none cursor-auto">
        <div ref={carouselRef} className="text-carousel text-[2.5rem]" style={{ transform: `translateX(${props.carouselWidth * slideIndex}rem)` }}>
          {justWords.map((text, index) => (
            <div key={index} style={{ transform: `translateX(${props.carouselWidth * index}rem)`, width: `${props.carouselWidth}rem` }} className="absolute text-center border flex items-center">
              <div>{text}</div>
            </div>
          ))}
        </div>
      </div>
      {props.arrows && (<div ref={rightArrow} onClick={() => prevSlide()} className="text-carousel-arrows opacity-0 hover:opacity-50 cursor-pointer select-none text-sm px-2 rounded bg-indigo-400 hover:bg-indigo-300 text-white mx-2">&gt;</div>)}
    </div>
  )
}