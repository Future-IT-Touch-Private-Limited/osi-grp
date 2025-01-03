import React from "react";

const AeAnswerfirst = ({ emFawShow }) => {
 
  return (

      <div className="bg-[#FFFDEE] px-10 py-5 mx-5 my-3 text-sm">
       
<div
dangerouslySetInnerHTML={{ __html: emFawShow }}
/>
      </div>



  );
};

export default AeAnswerfirst;
