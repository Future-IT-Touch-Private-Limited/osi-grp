import Image from "next/image";

export default function InternationalTieups() {
  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat text-black"
      style={{ backgroundImage: "url('/img/LandingPage/map.png')" }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-10 md:mb-0 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our International Tie-Ups and Collaborations
          </h2>
        </div>

        <div>
          <Image
            src="/img/LandingPage/tie-ups.png"
            alt="Global Partnerships"
            width={2000}
            height={600}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
