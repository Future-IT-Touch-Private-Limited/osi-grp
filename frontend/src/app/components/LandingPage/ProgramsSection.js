"use client";
import { useRef, useEffect, useState } from "react";

export default function ProgramsSection({ setPopOpen }) {
  const scrollContainerRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  // Determine how many cards should be visible based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        // md
        setCardsPerView(2);
      } else {
        // sm
        setCardsPerView(1);
      }
    };

    // Set initial value
    handleResize();

    // Update on window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate card width and initialize scroll position
  useEffect(() => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const gap = 32; // 32px for gap-8
      const calculatedCardWidth =
        (containerWidth - gap * (cardsPerView - 1)) / cardsPerView;
      setCardWidth(calculatedCardWidth);

      // Reset scroll position to start
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "auto" });
    }
  }, [cardsPerView]);

  const scrollLeft = () => {
    if (scrollContainerRef.current && cardWidth > 0) {
      const totalCardWidth = cardWidth + 32; // card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = Math.max(0, currentScroll - totalCardWidth);

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && cardWidth > 0) {
      const totalCardWidth = cardWidth + 32; // card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const maxScroll =
        scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth;
      const newScroll = Math.min(maxScroll, currentScroll + totalCardWidth);

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  const countries = [
    {
      name: "Canada",
      flag: "🇨🇦",
      image: "/img/LandingPage/study-in-canada.jpg",
      flagImage: "/img/LandingPage/canada-flag.png",
      description:
        "Canada offers a high quality of life and numerous pathways to permanent residency. With a vibrant culture and a welcoming society for immigrants, this North American country is home to multiple universities and colleges ranked among the top education institutions in the world.",
      stats: {
        institutions: "200+ Universities & Colleges",
        courses: "3000+ Course Options",
      },
    },
    {
      name: "USA",
      flag: "🇺🇸",
      image: "/img/LandingPage/study-in-canada.jpg",
      flagImage: "/img/LandingPage/canada-flag.png",
      description:
        "The USA boasts of the world's top-ranked universities, producing highly skilled professionals. It is a preferred destination for students seeking to build a successful career.",
      stats: {
        institutions: "300+ Universities & Colleges",
        courses: "5000+ Course Options",
      },
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      image: "/img/LandingPage/study-in-canada.jpg",
      flagImage: "/img/LandingPage/canada-flag.png",
      description:
        "As visa restrictions tighten in several countries, Germany is gaining popularity among international students. With no tuition fees at most public universities, It has become the top choice for those willing to pursue higher education abroad.",
      stats: {
        institutions: "100+ Universities & Colleges",
        courses: "1000+ Course Options",
      },
    },
    {
      name: "UK",
      flag: "🇬🇧",
      image: "/img/LandingPage/study-in-canada.jpg",
      flagImage: "/img/LandingPage/canada-flag.png",
      description:
        "The U.K. is another leading destination for international students, offering world-class higher education. Additionally, the country supports a good work-life balance for professionals and better health care facilities.",
      stats: {
        institutions: "150+ Universities & Colleges",
        courses: "2000+ Course Options",
      },
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      image: "/img/LandingPage/study-in-canada.jpg",
      flagImage: "/img/LandingPage/canada-flag.png",
      description:
        "Australia is a popular choice among international students due to its stable income prospects and abundant professional opportunities. Its top-tier universities equip students with the skills needed to thrive in their careers.",
      stats: {
        institutions: "120+ Universities & Colleges",
        courses: "1500+ Course Options",
      },
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      image: "/img/LandingPage/study-in-canada.jpg",
      flagImage: "/img/LandingPage/canada-flag.png",
      description:
        "Known for its stunning landscapes, New Zealand has become one of the most attractive destinations for higher education. Its universities are dedicated to helping students build successful careers in their chosen fields.",
      stats: {
        institutions: "50+ Universities & Colleges",
        courses: "800+ Course Options",
      },
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Select Your Dream Destination
        </h2>
        <p className="text-center mb-12 text-gray-600 uppercase">
          We have partnered with over 500 education institutes around the globe
        </p>

        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Responsive Card Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 mx-12"
          >
            {countries.map((country, index) => (
              <div
                key={index}
                className="country-card flex-shrink-0 snap-center border-2 border-black rounded-lg shadow-lg"
                style={{
                  width: cardWidth > 0 ? `${cardWidth}px` : "100%",
                  minWidth: cardWidth > 0 ? `${cardWidth}px` : "280px",
                  maxWidth: "500px",
                }}
              >
                <div className="relative p-6 rounded-lg shadow-lg bg-white overflow-hidden flex flex-col h-full">
                  {/* Transparent flag background */}
                  <div
                    className="absolute inset-0 bg-center bg-cover opacity-10 blur-sm"
                    style={{ backgroundImage: `url('${country.flagImage}')` }}
                  ></div>

                  {/* Content layer with flex column */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Image */}
                    <div
                      className="h-48 bg-cover bg-center rounded-t-lg"
                      style={{ backgroundImage: `url('${country.image}')` }}
                    ></div>

                    {/* Flag */}
                    <div className="flex justify-end -mt-10 mr-3 text-4xl">
                      {country.flag}
                    </div>

                    {/* Content (will grow to fill space) */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mt-8 mb-4">
                        Study in {country.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {country.description}
                      </p>
                      <div className="flex flex-col space-y-2 mb-6">
                        <span className="font-bold text-gray-700">
                          • {country.stats.institutions}
                        </span>
                        <span className="italic text-gray-700">
                          • {country.stats.courses}
                        </span>
                      </div>
                    </div>

                    {/* Button fixed at bottom */}
                    <div className="mt-auto pt-4">
                      <button
                        className="w-full bg-red-700 hover:bg-red-800 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center transition-colors"
                        onClick={() => {
                          setPopOpen(true);
                        }}
                      >
                        Apply Now
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Action Buttons
        <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition-colors">
            <span className="mr-2">💬</span> Chat with us
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
            Book Free Counselling
          </button>
        </div> */}
      </div>
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
}
