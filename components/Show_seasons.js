import Showscollection from "./Showscollection";
import Showepisode from "./Showepisode";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";

export default function Seasons({ results, sugestion, vote }) {
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
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [names, setNames] = useState([0]);
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const createElements = (n, s) => {
    var elements = [];
    var season = 0;
    var i = 1;
    for (i = 1; i <= n; i++) {
      elements.push(i);
    }
    season = s;
    return (
      <div className="relative flex flex-col space-y-2 my-7 md:my-10 px-2 md:px-8 max-w-screen mx-auto snap-x snap-mandatory">
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
            {elements.map((a, i) => (
              <Showepisode
                key={i}
                result={a}
                imges={results[activeTabIndex].poster_path}
                vote={vote}
                season={season}
                results={results}
                elements={elements}
              />
            ))}
          </div>
          <ChevronRightIcon
            className="invisible md:visible absolute top-0 bottom-10 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ring-4 rounded-full ring-gray-50"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="md:text-lg sm1:text-lg text-xs">
        <div className="space-x-7 border-2 rounded-2xl pl-7  pb-0 bg-black bg-opacity-50  ">
          {/* Loop through tab data and render button for each. */}
          {results.map((seasons, idx) => {
            return (
              <button
                key={idx}
                className={`py-2 border-b-4 transition-colors duration-300  ${
                  idx === activeTabIndex
                    ? "border-teal-500"
                    : "border-transparent hover:border-gray-200"
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}
              >
                {`season ${seasons.season_number}`}
              </button>
            );
          })}
        </div>
        {/* Show active tab content. */}
        <div className="py-4">
          <p>
            {createElements(
              results[activeTabIndex].episode_count,
              activeTabIndex
            )}
          </p>
        </div>
      </div>
      <Showscollection results={sugestion} title="Similar series" />
    </>
  );
}
