import React from "react";

const AeAnswerthird = ({ emFawShow }) => {
  const answers = {
    SponsorBankStatement: (
      <ul className="list-disc">
        <li>
          Documentation of accessible and demonstrated available funds of the
          sponsor.
        </li>
        <li>
          Should have balance of at least 50-150 euros per day of the trip per
          traveler
        </li>
      </ul>
    ),
    SponsCoverLetter: (
      <ul className="list-disc">
        <li>
          Proof of sponsorship and support, including specifics on the nature
          and method of support provided.
        </li>
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

export default AeAnswerthird;
