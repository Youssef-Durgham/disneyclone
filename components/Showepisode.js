import Image from "next/future/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import Artplayer from "./player";
import { useRef } from "react";
import Inplay from "./Inplay";

function Showepisode({ result, imges, vote, season, results, key, elements }) {
  const showplayerref = useRef();
  const [showPlayer, setShowPlayer] = useState(false);
  function getplayer(event) {
    console.log(event);
    setShowPlayer(true);
  }
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const router = useRouter();
  return (
    <>
      <div className={` ${showPlayer ? "" : ""}`}>
        <div
          ref={showplayerref}
          className=" flex  h-[100px] w-[100px] sm1:w-[180px] sm1:h-[180px] rounded-2xl overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 snap-end"
          onClick={(event) => {
            getplayer(event.currentTarget);
          }}
          key={key}
        >
          <Image
            src={`${BASE_URL}${imges}`}
            width={330}
            height={210}
            objectfit="fill"
            className="rounded-lg hover:brightness-125"
          />
        </div>
        <div className="text-[11px] pt-1 font-sans font-bold text-base">{`Episode ${result}`}</div>
        <div className="inline-flex mt-1">
          <Image
            src="/images/imdb.png"
            width={20}
            height={10}
            objectfit="fill"
            className="rounded-sm w-5 h-[15px]"
          ></Image>
          <div className="text-[11px] ml-2 -mt-1.5 font-sans lining-nums">
            {vote.toFixed(1)}
          </div>
        </div>
      </div>
      {showPlayer && (
        <Inplay showPlayer={showPlayer} setShowPlayer={setShowPlayer} result={season} elements={elements} />
      )}
    </>
  );
}

export default Showepisode;
