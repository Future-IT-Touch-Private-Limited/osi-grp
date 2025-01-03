import React from "react";

const CheckListAnswerThree = ({ faqShow }) => {
  const answers = {
    Copyfentryandexitstampandpreviousvisasheld: (
      <ul className="list-disc">
        <li>Visa Stickers and Entry-Exit Stamps Pages in Passport Over the Last 10 Years</li>
      
      </ul>
    ),
    Last6monthsbankstatement: (
      <ul className="list-disc">
        <li>
          Original bank statements covering the past six months, signed and
          stamped, from both the applicant and, if applicable, the sponsor.
        </li>
        <li>
          Should have balance of at least 150 euros per day of the trip per
          traveler
        </li>
        <li>
          Any abrupt deposits into your savings account must be appropriately
          explained and justified.
        </li>
      </ul>
    ),
    // ChecklistofDocumentsUploadedonUKportal: (
    //   <ul className="list-disc">
    //     <li>
    //       A visa file checklist document containing a detailed summary of all
    //       the documents uploaded to the portal, including relevant information.
    //     </li>
    //   </ul>
    // ),
  };

  return (
    faqShow && (
      <div className="bg-[#FFFDEE] px-10 py-5 mx-5 my-3 text-sm">
        {answers[faqShow]}
      </div>
    )
  );
};

export default CheckListAnswerThree;
