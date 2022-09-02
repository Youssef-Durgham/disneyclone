import MovieThumbnail from "./MovieThumbnail";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";

function Moviescollection({ results, title }) {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="relative flex flex-col space-y-2 my-7 md:my-10 px-2 md:px-8 max-w-screen mx-auto  snap-x snap-mandatory">
      <h2 className="font-semibold">{title}</h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`invisible md:visible absolute top-0 bottom-10 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ring-4 rounded-full ring-gray-50 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="flex space-x-2 md:space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2 touch-auto"
        >
          {results.map((result) => (
            <MovieThumbnail key={result.id} result={result} />
          ))}
        </div>
        <ChevronRightIcon
          className="invisible md:visible absolute top-0 bottom-10 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ring-4 rounded-full ring-gray-50"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Moviescollection;
