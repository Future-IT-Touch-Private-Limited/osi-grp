import React from "react";

const AeAnswerfifth = ({ emFawShow }) => {
  const answers = {
    SchoolCollegeInstituteIDCard: (
      <ul className="list-disc">
        <li>Provide a copy of your school or college identification
        .</li>
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

export default AeAnswerfifth;
