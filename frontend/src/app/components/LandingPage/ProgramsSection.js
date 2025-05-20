"use client";
import { useRef, useEffect, useState } from "react";

export default function ProgramsSection({ setPopOpen }) {
  const scrollContainerRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Determine how many cards should be visible based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg
        setCardsPerView(3);
        setIsMobile(false);
      } else if (window.innerWidth >= 768) {
        // md
        setCardsPerView(2);
        setIsMobile(false);
      } else if (window.innerWidth >= 640) {
        // sm
        setCardsPerView(1.5);
        setIsMobile(false);
      } else {
        // xs
        setCardsPerView(1.2);
        setIsMobile(true);
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
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
          Select Your Dream Destination
        </h2>
        <p className="text-sm sm:text-base text-center mb-6 sm:mb-8 md:mb-12 text-gray-600 uppercase">
          We have partnered with over 500 education institutes around the globe
        </p>

        <div className="relative">
          {/* Left Scroll Button - Hidden on small mobile */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
            aria-label="Scroll left"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600"
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

          {/* Instructions for mobile users */}
          {isMobile && (
            <div className="text-center text-gray-500 text-sm mb-3">
              Swipe cards to see more options
            </div>
          )}

          {/* Responsive Card Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 mx-8 sm:mx-10 md:mx-12 touch-pan-x"
          >
            {countries.map((country, index) => (
              <div
                key={index}
                className="country-card flex-shrink-0 snap-center border border-gray-200 sm:border-2 sm:border-black rounded-lg shadow-md sm:shadow-lg"
                style={{
                  width: cardWidth > 0 ? `${cardWidth}px` : "100%",
                  minWidth: cardWidth > 0 ? `${cardWidth}px` : "240px",
                  maxWidth: "500px",
                }}
              >
                <div className="relative p-3 sm:p-4 md:p-6 rounded-lg shadow-lg bg-white overflow-hidden flex flex-col h-full">
                  {/* Transparent flag background */}
                  <div
                    className="absolute inset-0 bg-center bg-cover opacity-10 blur-sm"
                    style={{ backgroundImage: `url('${country.flagImage}')` }}
                  ></div>

                  {/* Content layer with flex column */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Image */}
                    <div
                      className="h-32 sm:h-40 md:h-48 bg-cover bg-center rounded-t-lg"
                      style={{ backgroundImage: `url('${country.image}')` }}
                    ></div>

                    {/* Flag */}
                    <div className="flex justify-end -mt-8 sm:-mt-10 mr-2 sm:mr-3 text-3xl sm:text-4xl">
                      {country.flag}
                    </div>

                    {/* Content (will grow to fill space) */}
                    <div className="flex-grow">
                      <h3 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 md:mt-8 mb-2 sm:mb-4">
                        Study in {country.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                        {isMobile 
                          ? country.description.split('.')[0] + '...'
                          : country.description
                        }
                      </p>
                      <div className="flex flex-col space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                        <span className="text-sm sm:text-base font-bold text-gray-700">
                          • {country.stats.institutions}
                        </span>
                        <span className="text-sm sm:text-base italic text-gray-700">
                          • {country.stats.courses}
                        </span>
                      </div>
                    </div>

                    {/* Button fixed at bottom */}
                    <div className="mt-auto pt-2 sm:pt-4">
                      <button
                        className="w-full bg-red-700 hover:bg-red-800 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-semibold flex items-center justify-center transition-colors"
                        onClick={() => {
                          setPopOpen(true);
                        }}
                      >
                        Apply Now
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
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

          {/* Right Scroll Button - Hidden on small mobile */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
            aria-label="Scroll right"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600"
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

        {/* You can uncomment this if you want to add action buttons
        <div className="flex flex-col sm:flex-row justify-center mt-8 sm:mt-12 gap-3 sm:gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center justify-center transition-colors text-sm sm:text-base">
            <span className="mr-2">💬</span> Chat with us
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors text-sm sm:text-base">
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