import React, { useEffect, useMemo, useRef, useState } from "react"

interface WordsAndImages {
  [index: string]: string;
}

export default function TextCarousel(props: { words: WordsAndImages, timeBetweenSlideInSeconds: number, carouselWidth: number, arrows?: boolean }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const justWords = useMemo(() => Object.keys(props.words), [props.words]);
  const leftArrow = useRef<HTMLDivElement>(null);
  const rightArrow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const minSize = justWords.length - (justWords.length * 2) + 1;
    const sliderInterval = setInterval(() => {
      setSlideIndex(i => i <= minSize ? 0 : i - 1);
    }, props.timeBetweenSlideInSeconds * 1000);

    return () => {
      clearInterval(sliderInterval);
    }
  }, []);

  function prevSlide() {
    if (slideIndex > justWords.length - (justWords.length * 2) + 1) setSlideIndex(i => i - 1);
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
    <div className="flex">
      {props.arrows && (<div ref={leftArrow} onClick={() => nextSlide()} className="text-carousel-arrows opacity-0 hover:opacity-50 cursor-pointer select-none text-sm px-2 rounded bg-indigo-400 hover:bg-indigo-300 text-white mx-2">&lt;</div>)}
      <div onMouseEnter={revealArrows} onMouseLeave={hideArrows} style={{ width: `${props.carouselWidth}rem` }} className="overflow-hidden relative flex text-nowrap select-none cursor-auto border-b-2 border-indigo-400">
        <div className="text-carousel text-[2rem]" style={{ transform: `translateX(${props.carouselWidth * slideIndex}rem)` }}>
          {justWords.map((text, index) => (
            <div style={{ transform: `translateX(${props.carouselWidth * index}rem)`, width: `${props.carouselWidth}rem` }} className="absolute text-center flex items-center justify-evenly">
              <div>{text}</div>
              {props.words[justWords[index]] && (
                <div>
                  <img src={props.words[justWords[index]]} className="h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {props.arrows && (<div ref={rightArrow} onClick={() => prevSlide()} className="text-carousel-arrows opacity-0 hover:opacity-50 cursor-pointer select-none text-sm px-2 rounded bg-indigo-400 hover:bg-indigo-300 text-white mx-2">&gt;</div>)}
    </div>
  )
}