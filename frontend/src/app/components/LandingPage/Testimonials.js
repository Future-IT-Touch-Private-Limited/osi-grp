"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Testimonials() {
  const scrollContainerRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // Determine how many cards should be visible based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width >= 1600) { // xl
        setCardsPerView(4);
        setIsMobile(false);
      } else if (width >= 1024) { // lg
        setCardsPerView(3);
        setIsMobile(false);
      } else if (width >= 768) { // md
        setCardsPerView(2);
        setIsMobile(false);
      } else if (width >= 640) { // sm
        setCardsPerView(1.5);
        setIsMobile(false);
      } else { // xs
        setCardsPerView(1.2);
        setIsMobile(true);
      }
    };

    // Set initial value
    handleResize();
    
    // Update on window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate card width and initialize scroll position
  useEffect(() => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const gap = 16; // Reduced gap for mobile
      const calculatedCardWidth = (containerWidth - (gap * (cardsPerView - 1))) / cardsPerView;
      setCardWidth(calculatedCardWidth);
      
      // Reset scroll position to start
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "auto" });
      
      // Check for button visibility
      updateScrollButtonVisibility();
    }
  }, [cardsPerView]);
  
  // Update scroll button visibility based on scroll position
  const updateScrollButtonVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 5); // 5px tolerance
    }
  };
  
  // Add scroll listener to update button visibility
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtonVisibility);
      return () => container.removeEventListener('scroll', updateScrollButtonVisibility);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current && cardWidth > 0) {
      const totalCardWidth = cardWidth + (isMobile ? 16 : 24); // card + gap (smaller on mobile)
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
      const totalCardWidth = cardWidth + (isMobile ? 16 : 24); // card + gap (smaller on mobile)
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      const newScroll = Math.min(maxScroll, currentScroll + totalCardWidth);
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };
  
  // Touch event handlers for swipe gestures
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 75) {
      // Swipe left - go right
      scrollRight();
    }
    
    if (touchEndX - touchStartX > 75) {
      // Swipe right - go left
      scrollLeft();
    }
  };

  const testimonials = [
    {
      name: "Joven Singh",
      location: "Patiala",
      text: "\"One of my friends recommended OIC Global for my student visa application, as he had a great experience with them. I feel fortunate to have chosen them for my process. Their professionalism and step-by-step guidance on documentation and visa filing led to a successful outcome. Without a doubt, OIC Global is one of the best immigration consultancies in Chandigarh.\""
    },
    {
      name: "Mannat Kaur",
      location: "Karnal",
      text: "\"I approached OIC Global to apply for my U.S. visitor visa. They guided me thoroughly through the process, handled all the documentation efficiently, and prepared me well for the visa interview. Thanks to their support, I received my U.S. visitor visa without any hassle. I highly recommend OIC Global to anyone seeking assistance with their study or visitor visa application.\""
    },
    {
      name: "Gurjot Singh",
      location: "Mohali",
      text: "\"I am truly grateful to OIC Global for helping me secure a German student visa. Through their personalized consultation, they carefully assessed my educational background and interests. Based on that, they recommended the most suitable college and course with complete transparency. They also guided me through every step of the process with clarity and patience. Choosing OIC Global has been one of the best decisions of my life.\""
    },
    {
      name: "Jasraj Singh",
      location: "Bathinda",
      text: "\"I am extremely thankful to OIC Global for their support in helping my brother get student visa for Australia. From the very first consultation, their team guided him with complete transparency and professionalism. They helped him choose the right university and course based on his profile, and made the entire documentation and visa application process smooth and stress-free.\""
    },
    {
      name: "Jaiveer Singh",
      location: "Jalandhar",
      text: "\"Choosing OIC Global was a turning point in my journey to study in Canada. From day one, their team treated my dream like their own. They carefully evaluated my profile, helped me shortlist the right college and course, and ensured every document was perfectly in place. What stood out the most was their honest advice, prompt responses, and constant motivation.\""
    },
    {
      name: "Pawanpreet Singh",
      location: "Hoshiarpur",
      text: "\"I'm very thankful to OIC Global for helping me successfully get my Canada visit visa. Their team guided me at every step — from preparing the documents to submitting the application — with complete professionalism and transparency. They made the entire process smooth and stress-free. I truly appreciate their dedication and support.\""
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">What Clients Say About OIC Global</h2>
        
        <div className="relative">
          {/* Left Scroll Button */}
          {!isMobile && (
            <button
              onClick={scrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10 ${
                showLeftButton ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
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
          )}

          {/* Testimonial Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 mx-8 md:mx-12"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={updateScrollButtonVisibility}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-shrink-0 snap-center transform transition-transform duration-300 hover:scale-[1.01]"
                style={{ 
                  width: cardWidth > 0 ? `${cardWidth}px` : '100%', 
                  minWidth: cardWidth > 0 ? `${cardWidth}px` : '250px'
                }}
              >
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md h-full flex flex-col">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div>
                      <h3 className="font-bold text-base md:text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{testimonial.location}</p>
                    </div>
                    <Image
                      src="/img/LandingPage/quote.png"
                      alt="Quote"
                      width={20}
                      height={20}
                      className="mt-1 md:mt-2 w-5 h-5 md:w-6 md:h-6"
                    />
                  </div>
                  <p className="mb-4 italic text-sm md:text-base">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          {!isMobile && (
            <button
              onClick={scrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10 ${
                showRightButton ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
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
          )}
        </div>

        {/* Mobile Pagination Indicators */}
        {isMobile && (
          <div className="flex justify-center mt-4 gap-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 focus:outline-none"
                onClick={() => {
                  if (scrollContainerRef.current && cardWidth > 0) {
                    const totalCardWidth = cardWidth + 16; // card + gap
                    scrollContainerRef.current.scrollTo({
                      left: index * totalCardWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        
        @media (max-width: 640px) {
          .testimonial-card {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
}