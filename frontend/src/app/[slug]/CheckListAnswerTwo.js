import React from "react";

const CheckListAnswerTwo = ({ faqShow }) => {
  const answers = {
    Coverletter: (
      <ul className="list-disc">
        <li>Clearly state the purpose of your travel.</li>
        <li>Specify the number of days you intend to stay.</li>
        <li>Provide essential passport and travel details. .</li>
        <li>
          If you are a business owner, the cover letter should be presented on
          your business letterhead.
        </li>
      </ul>
    ),
    AppointmentConfirmationLetter: (
      <ul className="list-disc">
        <li>
          The appointment letter must include essential information such as the
          traveler&apos;s name, appointment date, time, and location.
        </li>
        <li>
          Applicants must carry this letter with them to gain entry into the
          visa center.
        </li>
      </ul>
    ),
  
  };

  return (
    faqShow && (
      <div className="bg-[#FFFDEE] px-10 py-5 mx-5 my-3 text-sm">
        {answers[faqShow]}
      </div>
    )
  );
};

export default CheckListAnswerTwo;
