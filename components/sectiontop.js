import Image from "next/image";

function Top() {
  return (
    <section className="flex flex-row md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1800px] mx-auto">
      <div className="companys group justify-center items-center font-sans text-3xl">
        <Image
          src="/images/anime1.png"
          className="bg-slate-800"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="companys group justify-center items-center font-sans text-3xl">
        <Image
          src="/images/horror.png"
          className="bg-slate-800"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="companys group justify-center items-center font-sans text-3xl">
        <Image
          src="/images/drama.png"
          className="bg-slate-800"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="companys group justify-center items-center font-sans text-3xl">
        <Image
          src="/images/action.png"
          className="bg-slate-800"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="companys group justify-center items-center font-sans text-3xl">
        <Image
          src="/images/scifi.png"
          className="bg-slate-800"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}

export default Top;
