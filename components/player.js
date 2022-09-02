import { useEffect, useRef } from "react";

import Artplayer from "artplayer";
import DropdownMenuDemo from "./Selectseasons";

export default function Player({ option, getInstance, ...rest }) {
  const artRef = useRef();

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      url: "/videos/yourname1-1 1080.mp4",
      container: artRef.current,
      title: "Your Name",
      poster: "https://artplayer.org/assets/sample/poster.jpg",
      volume: 1,
      isLive: false,
      muted: false,
      autoplay: false,
      pip: false,
      autoSize: true,
      screenshot: true,
      setting: true,
      loop: false,
      flip: true,
      playbackRate: true,
      aspectRatio: true,
      fullscreen: true,
      fullscreenWeb: true,
      subtitleOffset: true,
      miniProgressBar: true,
      mutex: true,
      backdrop: true,
      playsInline: true,
      autoPlayback: true,
      airplay: true,
      theme: "#23ade5",
      lang: navigator.language.toLowerCase(),
      whitelist: ["*"],
      moreVideoAttr: {
        crossOrigin: "anonymous",
      },

      settings: [
        {
          width: 200,
          html: "Subtitle",
          tooltip: "Arabic",
          icon: '<img width="22" heigth="22" src="https://artplayer.org/assets/img/subtitle.svg">',
          selector: [
            {
              html: "Display",
              tooltip: "Show",
              switch: true,
              onSwitch: function (item) {
                item.tooltip = item.switch ? "Hide" : "Show";
                art.subtitle.show = !item.switch;
                return !item.switch;
              },
            },
            {
              default: true,
              html: "Arabic",
              url: "/transactions/yourname1-1.srt",
            },
            {
              html: "Chinese",
              url: "https://artplayer.org/assets/sample/subtitle.cn.srt",
            },
            {
              html: "Japanese",
              url: "https://artplayer.org/assets/sample/subtitle.jp.srt",
            },
          ],
          onSelect: function (item) {
            art.subtitle.switch(item.url, {
              name: item.html,
            });
            return item.html;
          },
        },
        {
          html: "Switcher",
          icon: '<img width="22" heigth="22" src="https://artplayer.org/assets/img/state.svg">',
          tooltip: "OFF",
          switch: false,
          onSwitch: function (item) {
            item.tooltip = item.switch ? "OFF" : "ON";
            console.info("You clicked on the custom switch", item.switch);
            return !item.switch;
          },
        },
        {
          html: "Slider",
          icon: '<img width="22" heigth="22" src="https://artplayer.org/assets/img/state.svg">',
          tooltip: "5x",
          range: [5, 1, 10, 0.1],
          onRange: function (item) {
            return item.range + "x";
          },
        },
      ],
      contextmenu: [
        {
          html: "Custom menu",
          click: function (contextmenu) {
            console.info("You clicked on the custom menu");
            contextmenu.show = false;
          },
        },
      ],
      // layers: [
      //     {
      //         html: '<img width="100" src="https://artplayer.org/assets/sample/layer.png">',
      //         click: function () {
      //             window.open('https://aimu.app');
      //             console.info('You clicked on the custom layer');
      //         },
      //         style: {
      //             position: 'absolute',
      //             top: '20px',
      //             right: '20px',
      //             opacity: '.9',
      //         },
      //     },

      // ],
      // controls: [
      //     {
      //       tooltip: "Playlistss",
      //       position: "right",
      //       html: "Seasons & Episode",
      //       click: function () {
      //         setShow((state) => !state);
      //       }
      //     }
      //   ],
      quality: [
        {
          default: true,
          html: "SD 480P",
          url: "https://artplayer.org/assets/sample/video.mp4",
        },
        {
          html: "HD 720P",
          url: "/videos/yourname1-1 720.mp4",
        },
        {
          html: "FHD 1080P",
          url: "/videos/yourname1-1 1080.mp4",
        },
      ],

      subtitle: {
        url: "/transactions/yourname1-1.srt",
        type: "srt",
        style: {
          color: "#00000",
          fontSize: "40px",
          Offset: "100px",
          bottom: "80px",
          Transparency: "52%",
        },
        encoding: "utf-8",
      },
      // highlight: [
      //     {
      //         time: 15,
      //         text: 'One more chance',
      //     },
      //     {
      //         time: 30,
      //         text: '谁でもいいはずなのに',
      //     },
      //     {
      //         time: 45,
      //         text: '夏の想い出がまわる',
      //     },
      //     {
      //         time: 60,
      //         text: 'こんなとこにあるはずもないのに',
      //     },
      //     {
      //         time: 75,
      //         text: '终わり',
      //     },
      // ],
      icons: {
        loading: '<img src="https://artplayer.org/assets/img/ploading.gif">',
        state:
          '<img width="150" heigth="150" src="https://artplayer.org/assets/img/state.svg">',
        indicator:
          '<img width="16" heigth="16" src="https://artplayer.org/assets/img/indicator.svg">',
      },
    });
    var img = "/assets/sample/layer.png";
    art.on("ready", () => {
      // art.layers.add({
      //     html: <DropdownMenuDemo />,
      //     style: {
      //         position: 'right',
      //         top: '20px',
      //         right: '20px',
      //         opacity: '.9',
      //     },
      // });
    });

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, []);

  return <div ref={artRef} {...rest}></div>;
}
