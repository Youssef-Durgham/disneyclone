import Image from "next/future/image";
import { useRouter } from "next/router";

function ShowThumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/Show/${result.id}`)}
      className="cursor-pointer  hover:text-cyan-200"
    >
      <div className=" flex min-w-[100px] min-h-[150px] sm1:min-w-[140px] sm1:min-h-[170px] rounded-2xl overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300  snap-center">
        <Image
          src={
            `${BASE_URL}${result.poster_path || result.backdrop_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          width={330}
          height={210}
          objectfit="fill"
          className="rounded-lg hover:brightness-125"
        />
      </div>
      <div className="text-[11px] pt-1 font-sans">{result.name}</div>
      <div className="inline-flex mt-1">
        <Image
          src="/images/imdb.png"
          width={20}
          height={10}
          objectfit="fill"
          className="rounded-sm w-5 h-[15px]"
        ></Image>
        <div className="text-[11px] ml-2 font-sans lining-nums">
          {result.vote_average.toFixed(1)}
        </div>
      </div>
    </div>
  );
}

export default ShowThumbnail;
