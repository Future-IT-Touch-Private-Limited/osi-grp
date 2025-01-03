import React from "react";

const CheckListAnswerFirst = ({ faqShow }) => {
  const answers = {
    originalPassport: (
      <ul className="list-disc">
        <li>Should be valid for at least six months beyond the trip&apos;s duration.</li>
        <li>Must have a minimum of 2 blank pages.</li>
        <li>A scanned copy of the first and last page of the passport.</li>
        <li>
          Scan and include the first and last pages of your previous passport,
          along with its travel history.
        </li>
      </ul>
    ),
    incomeTax: (
      <ul className="list-disc">
        <li>
          Provide ITR-V (Income Tax Return Verification) documents for the most
          recent three financial years, showing your income, tax compliance, and
          financial history for visa applications.
        </li>
      </ul>
    ),
    fixedDeposits: (
      <ul className="list-disc">
        <li>
          Evidence of Rental Income Receipt, Interest Earnings, and Other Income
          Sources.
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

export default CheckListAnswerFirst;