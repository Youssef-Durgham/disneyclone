import React from "react";
import { useState, useEffect } from "react";
import { XIcon } from "@heroicons/react/outline";
import Artplayer from "./player";
import { createPortal } from "react-dom";
import DropdownMenuDemo from "./Selectseasons";


function Inplay({ setShowPlayer, showPlayer, result, elements }) {
  console.log(showPlayer);

  //get window size
  const [size, setSize] = useState({ width: -1, height: -1 });
  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    window.addEventListener("resize", (e) => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  }, []);
  
  
  const w = size[Object.keys(size)[0]]

  const [art, setArt] = useState(null);

  return (
    <div
      className="fixed top-1/4 left-[94%] sm1:left-[70%] lgx:left-[5%] xl:left-[10%] 1xl:left-[15%] 2xl:left-[20%] 3xl:left-[25%]  z-50
    "
    >
      <div className="m-auto absolute z-20  ">
        <div
          className={` ${
            showPlayer ? "visible opacity-100 z-20" : "invisible opacity-0"
          }`}
        >
          
          <div className="media-box">
            <div className="-ml-[350px] w-96 justify-center items-center mx-auto my-auto">
              <Artplayer
                option={{
                  url: "/videos/yourname1-1 1080.mp4",
                  layers: [
                    {
                      html: "",
                      name: "playlist",
                      style: {
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                      },
                    },
                    {
                      html: "",
                      name: "close",
                      style: {
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                      },
                    },
                  ],
                }}
                
                style={w<=1100 ? {width:"340px",height:"600px"} : {width:"1599px",height:"500px"}}
                
                getInstance={(art) => {
                  art.on("ready", () => setArt(art));
                }}
              />

              {art
                ? createPortal(
                    <div className="mt-10 ml-10">
                      <DropdownMenuDemo result={result} elements={elements} />
                    </div>,
                    art.layers.playlist
                  )
                : null}
                {art
                ? createPortal(
                    <div className="mb-10 mr-100">
                      <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 bg-black/50 hover:opacity-75 hover:bg-[#0F0F0F]"
              onClick={() => setShowPlayer(false)}
            >
              <XIcon className="h-5" />
            </div>
                    </div>,
                    art.layers.close
                  )
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inplay;
