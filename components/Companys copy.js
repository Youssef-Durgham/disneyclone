import Image from "next/image";

function Companys2() {
  return (
    <section className="flex flex-row md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1800px] mx-auto">
      <div className="companys group justify-center items-center">
        <Image
          src="/images/jurassic.png"
          className="group-hover:invisible -my-52"
          layout="fill"
          objectFit="contain"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden group-hover:inline rounded-md object-fill"
        >
          <source src="/videos/dinasor.webm" type="video/webm" />
        </video>
      </div>

      <div className="companys group justify-center items-center">
        <Image
          src="/images/dc.png"
          className="group-hover:invisible"
          layout="fill"
          objectFit="contain"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden group-hover:inline rounded-md object-fill"
        >
          <source src="/videos/dc.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}

export default Companys2;
