import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-100 relative">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose CGC Mohali?</h2>

        <div className="relative flex justify-center items-center">
          {/* Central Campus Image */}
          <div className="relative w-96 h-96">
            <Image
              src="/images/campus.jpg"
              alt="CGC Mohali Campus"
              width={384}
              height={384}
              className="rounded-full border-8 border-gray-800 shadow-xl"
            />
          </div>

          {/* Circular Items */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <div className="bg-maroon-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-2">🌳</div>
              <p className="text-center font-bold">Lush Green Campus</p>
            </div>
          </div>

          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <div className="bg-maroon-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-2">🏫</div>
              <p className="text-center font-bold">Research Centric Environment</p>
            </div>
          </div>

          <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2">
            <div className="flex flex-col items-center">
              <div className="bg-maroon-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-2">💼</div>
              <p className="text-center font-bold">100% Assured Placements</p>
            </div>
          </div>

          <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <div className="bg-maroon-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-2">🎓</div>
              <p className="text-center font-bold">Scholarships upto 100%</p>
            </div>
          </div>

          <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <div className="bg-maroon-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-2">📶</div>
              <p className="text-center font-bold">Fully WiFi Enabled Campus</p>
            </div>
          </div>

          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
            <div className="flex flex-col items-center">
              <div className="bg-maroon-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-2">👩‍🏫</div>
              <p className="text-center font-bold">Experienced Faculty</p>
            </div>
          </div>
        </div>

        <button className="mt-12 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 flex items-center">
          Apply Now <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
}