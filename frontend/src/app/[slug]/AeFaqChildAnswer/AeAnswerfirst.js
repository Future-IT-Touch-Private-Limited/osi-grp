import React from "react";

const AeAnswerfirst = ({ emFawShow }) => {
  const answers = {
    BirthCertificate: (
      <ul className="list-disc">
        <li>If minor, provide your birth certificate
</li>
      </ul>
    ),
    ParentsPassportCopyorID: (
      <ul className="list-disc">
        <li>
        This document is required only if the child is travelling without parents/single parent

        </li>
      </ul>
    ),
    Copyofpassportbiopageofaccompanyingadult: (
      <ul className="list-disc">
        <li>
        If you are under 18 years of age and traveling with your parent(s) or legal guardian(s), this applies if they are not applying for a visa at the same time.

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

export default AeAnswerfirst;