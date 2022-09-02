import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useRouter } from "next/router";

function Slider({ trending_show_week, trending_movie_week }) {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const size = 4;
  const show = trending_show_week.slice(0, size);
  const movie = trending_movie_week.slice(0, size);
  const show_with_movie = show.concat(movie);
  console.log(show_with_movie);
  return (
    <section className="relative mt-7 shadow-2xl max-w-full mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
        swipeable={true}
      >
        {show_with_movie.map((element) => (
          <div
            className="cursor-pointer w-[100vh] h-[25vh] ssm:h-[25vh] sm:h-[25vh] mdb:h-[30vh] md:h-[30vh] lg:h-[50vh] "
            onClick={
              element.media_type != "movie"
                ? () => router.push(`/Show/${element.id}`)
                : () => router.push(`/Movie/${element.id}`)
            }
          >
            <Image
              objectFit="fill"
              layout="fill"
              loading="lazy"
              src={`${BASE_URL}${element.backdrop_path}`}
              alt=""
            />

            <h2 class="absolute text-2xl sm1:text-3xl lg:text-4xl 1xl:text-5xl  text-amber-400 bottom-4 left-1/2 -translate-x-1/2 ">
              {element.name || element.title}
            </h2>

            <h3 class="absolute text-2xl text-green-300 bottom-5 left-5 flex ">
            <div className="h-[15px] w-[20px] sm1:h-[20px] sm1:w-[25px] lg:h-[25px] lg:w-[30px] 1xl:h-[30px] 1xl:w-[35px] relative -ml-3">
              <Image
                src="/images/imdb.png"
                layout="fill"
                objectfit="fill"
                className="rounded-sm w-5 h-[15px]"
              />
              </div>
              <div className="">
              <div className="ml-2 text-sm sm:text-base lg:text-lg 1xl:text-xl text-amber-400">
                {element.vote_average.toFixed(1)}
              </div>
            </div>
            </h3>
            
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Slider;
