"use client"
import { useState } from 'react';

export default function SingleProductFaq({data}) {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

      const alldata=data && data.FAQ


  return (
    <div className="flex w-full  flex-col items-center justify-center bg-white md:py-10  mt-2 align-middle">
      <div className="heading-div">
        <h2 className="text-center text-slate-800 text-lg  font-lexend md:text-[32px] font-bold py-5">
          FAQs for {data.Countryname} Visa
        </h2>
      </div>
      <div className="flex w-full  flex-col items-center rounded-md bg-white p-4 ">
        {alldata.map((faq, index) => (
          <div key={index} className="relative flex w-full flex-col pb-3">
            <article className="w-full self-center py-3">
              <button
                className="flex h-4 w-full cursor-pointer items-center justify-between bg-white"
                onClick={() => toggleOpen(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-left font-inter text-base font-medium leading-snug text-[#091e42] md:text-sm lg:text-base">
                  {faq.question}
                </span>
                <div className="h-5 w-5 p-1 text-[#0052cc] sm:h-5 sm:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="4"
                    stroke="currentColor"
                    className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="mt-5 text-base text-[#091e42]">
                  {faq.answer}
                </div>
              )}
            </article>
            <div className="my-3 h-[1px] bg-[#CBD1DE] md:my-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
