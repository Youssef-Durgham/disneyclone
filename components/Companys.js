import Image from "next/image";

function Companys() {
  return (
    <section className="flex flex-row md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1800px] mx-auto">
      <div className="companys group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden group-hover:inline rounded-md object-fill"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="companys group">
        <Image
          src="/images/pixar.png"
          className="group-hover:invisible"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden group-hover:inline rounded-md object-fill"
        >
          <source src="/videos/pixar2.webm" type="video/webm" />
        </video>
      </div>

      <div className="companys group">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden group-hover:inline rounded-md object-fill"
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="companys group">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden group-hover:inline rounded-md object-fill"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="companys group">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden group-hover:inline rounded-md object-fill"
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Companys;
