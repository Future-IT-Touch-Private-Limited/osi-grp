import React from "react";

const AeAnswerfourth = ({ emFawShow }) => {
  const answers = {
    BusinessRegistration: (
      <ul className="list-disc">
        <li>Income Tax Return of the company for the last 3 years.</li>
      </ul>
    ),
    CompanyBankStatement: (
      <ul className="list-disc">
        <li>Last 6 months company bank statement.</li>
        <li>
          Should have balance of at least 50-150 euros per day of the trip per
          traveler
        </li>
      </ul>
    ),
    CompanyITreturnsforlasyears: (
      <ul className="list-disc">
        <li>Income Tax Return of the company for the last 3 years.</li>
      </ul>
    ),
  };

  return (
    emFawShow && (
      <div className="bg-[#FFFDEE] px-10 py-5 mx-5 my-3 text-sm">
        {answers[emFawShow]}
      </div>
    )
  );
};

export default AeAnswerfourth;
